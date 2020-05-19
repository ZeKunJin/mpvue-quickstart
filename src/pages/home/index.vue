<template>
  <div>
    <swiper :autoplay="true" class="title-bg">
      <!-- <swiper-item v-for="item of adList" :key="item.id">
        <img @click="toAd(item)" class="banner" :src="item.bannerUrl" />
      </swiper-item> -->

      <swiper-item>
        <img class="banner" src="../../../static/images/title-background.png" />
      </swiper-item>
    </swiper>

    <!-- 需求搜索 -->

    <!-- <div class="search" @click="search">
      <img src="../../../static/icon/search.png" class="icon" />
      <div class="container">
        <span>搜索</span>
      </div>
    </div>-->

    <div class="require" @click="toRequire">
      <div class="container">
        <span>发布需求</span>
      </div>
    </div>

    <!-- 轮播首页通知栏 -->
    <swiper :autoplay="true" :vertical="true" class="notice-bar">
      <swiper-item v-for="(item, index) in noticeList" :key="index">
        <div class="notice-container">
          <van-icon name="volume-o" size="20" color="#333" style="margin-right: 8px" />
          {{ item.content }}
        </div>
      </swiper-item>
    </swiper>

    <!-- 最近需求通知栏 -->
    <div v-if="showDistance && !loading" class="near">
      <div style="line-height: 42px; padding: 0 16px; position: relative">
        <van-icon name="warning-o" size="16" class="warning-icon" color="#F66766" />
        <span v-if="distance.id" style="margin-left: 24px">距离您最近的需求为{{ distance.num || '--' }}公里</span>
        <span v-else style="margin-left: 24px">当前您附近暂无需求</span>
      </div>
      <div class="more" v-if="distance.id" @click="toReauireDetail">查看详情</div>
      <div class="del-icon" @click="showDistance = false">
        <van-icon name="cross" color="#fff" size="16" />
      </div>
    </div>

    <map
      id="map"
      :scale="8"
      :longitude="106.26667"
      :latitude="38.46667"
      :markers="markers"
      @callouttap="onTapMarker"
      @markertap="onTapMarker"
      @regionchange="onRegionChange"
      @end="onRegionChange"
      @tap="initCurr"
      show-location
      style="position: absolute; top: 132px; bottom: 0; width: 100vw; height: calc(100vh - 132px)"
    />

    <!-- 定位工具栏 -->
    <div class="locate-tool" @click="getLocation">
      <img src="../../../static/icon/locate.png" class="icon" />
    </div>

    <!-- 数据工具栏 -->
    <div class="data-tool" @click="getData()">
      <img src="../../../static/icon/data.png" class="icon" />
    </div>

    <van-popup :show="showData" @close="showData = false" round closeable>
      <div class="data-container">
        <img src="../../../static/images/line.png" />

        <div class="sys-name">红哨子社区平台</div>

        <div class="needs">需求汇总</div>

        <div class="block">
          <div>发布需求社区: {{ statistics.orgNum }}个</div>
        </div>

        <div class="block">
          <div>发布需求数量: {{ statistics.requirementNum }}个</div>
        </div>
      </div>
    </van-popup>

    <popup v-model="popupInfo" @onClose="onPopupClose" />

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { list, info, userOrgList } from '@/api/org'
import { requirementList, nearRequirement, msgRequirement } from '@/api/require'
import { adList } from '@/api/ad'
import { data } from '@/api/common'
import Popup from './components/Popup'

export default {
  components: {
    Popup
  },

  data() {
    return {
      setData: {
        latitude: 39.91667,
        longitude: 116.41667
      },
      popupInfo: {},
      statistics: {},
      noticeList: [],
      scaleVal: 14,
      init: false,
      markers: [],
      adList: [],
      requireList: [],
      currOrg: {
        id: '',
        name: ''
      },
      currRequire: {},
      activeTab: 0,
      distance: {},
      showDistance: true,
      showData: false,
      loading: true,
      adBannerUrl: ''
    }
  },

  async created() {
    this.getUserInfo()
  },

  async mounted() {
    Object.assign(this, this.$options.data())
    await this.getLocation()
    this.fetch()
  },

  onShareAppMessage(res) {
    if (res.from !== 'button') return false
  },

  methods: {
    getUserInfo() {
      if (this.$store.getters.token) {
        this.$store.dispatch('user/getInfo')
      }
    },

    async fetch() {
      const [resReq, resNear, resAd] = await Promise.all([
        requirementList({
          page: 1,
          limit: 99999
        }),
        nearRequirement({
          dimension: this.setData.latitude,
          longitude: this.setData.longitude
        }),
        this.$store.dispatch('notice/setNotice')
      ])
      this.noticeList = this.$store.getters.notice
      this.distance.num = Number(resNear.data.distance)
      this.distance.num = this.distance.num.toFixed(1)
      this.distance.id = resNear.data.requirementId
      this.requireList = resReq.data.rows
      // this.adList = resAd.data.rows
      this.initMarkers(this.requireList)
      this.loading = false
    },

    initCurr() {
      this.currOrg = {
        id: '',
        name: ''
      }
    },

    initMarkers(arr) {
      arr.forEach(element => {
        this.markers.push({
          id: element.id,
          iconPath: '/static/icon/location.png',
          latitude: element.dimension,
          longitude: element.longitude,
          width: 30,
          height: 30,
          callout: {
            content: element.title,
            display: 'ALWAYS',
            padding: 8,
            bgColor: '#ffffff',
            borderRadius: 6,
            borderWidth: 2,
            borderColor: '#E61F1C',
            color: '#E61F1C',
            fontSize: 12
          }
        })
      })
    },

    onRegionChange(event) {
      const { causedBy } = event.mp
      if (causedBy === 'drag') {
        this.resetData()
      }
    },

    resetData() {
      const vm = this
      const mapCtx = wx.createMapContext('map')
      mapCtx.getCenterLocation({
        success: function(res) {
          const { latitude, longitude } = res
          vm.setData = {
            latitude,
            longitude
          }
        }
      })
    },

    getLocation() {
      return new Promise(resolve => {
        const vm = this
        wx.getLocation({
          type: 'wgs84',
          success: res => {
            const { longitude, latitude } = res
            vm.setData = {
              longitude,
              latitude
            }
            resolve()
          }
        })
      })
    },

    onTapMarker(event) {
      this.currOrg.id = event.mp.markerId
      this.popupInfo = {
        show: true,
        markerId: event.mp.markerId
      }
    },

    async getData() {
      try {
        const res = await data()
        this.statistics = res.data
        this.showData = true
      } catch (error) {
        // on error
      }
    },

    onPopupClose() {
      this.popupInfo = {}
    },

    async toRequire() {
      const res = await userOrgList({
        page: 1,
        limit: 1,
        userId: this.$store.getters.id,
        status: 2
      })
      const total = res.data.total
      if (total > 0) {
        this.$navigate.to('/pages/require/create/index')
      } else {
        this.$dialog
          .confirm({
            title: '提示',
            message: '请先创建或加入组织'
          })
          .then(() => {
            this.$navigate.to('/pages/org/index')
          })
      }
    },

    toReauireDetail() {
      this.$navigate.to('/pages/require/detail/index?id=' + this.distance.id)
    },

    search() {
      this.$navigate.to('/pages/search/index')
    },

    toAd (event) {
      if (event.bannerType !== '3') {
        this.$navigate.to("/pages/home/ad/index", {
          id: event.id
        })
      }
    }
  }
}
</script>

<style>
.title-bg {
  width: 100vw;
  height: 120px;
  position: fixed;
  top: 0;
  z-index: 1;
}

.title-bg .banner {
  width: 100vw;
  height: 120px;
}

.search {
  position: fixed;
  width: 128px;
  height: 42px;
  background-color: #ffffff;
  top: 140px;
  z-index: 1;
  right: 16px;
  border-radius: 21px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
}

.notice-bar {
  position: fixed;
  top: 120px;
  z-index: 1;
  width: 100vw;
  height: 44px;
  background-color: #fafafa;
}

.notice-bar .notice-container {
  background-color: #fafafa;
  width: 100vw;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
  color: #666666;
}

.require {
  position: fixed;
  width: calc(100vw - 32px);
  height: 42px;
  background-color: #ff7d7d;
  top: 180px;
  z-index: 1;
  left: 16px;
  border-radius: 21px;
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.near {
  background-color: #ffffff;
  position: fixed;
  width: calc(100vw - 32px);
  height: 42px;
  z-index: 1;
  top: 242px;
  left: 16px;
  border-radius: 21px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #f66766;
  font-size: 12px;
  color: #333333;
  display: flex;
}

.near span {
  line-height: 42px;
}

.near .more {
  position: absolute;
  right: 56px;
  color: #f66766;
  top: 50%;
  transform: translate(0, -50%);
}

.near .warning-icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.near .del-icon {
  background-color: #f66766;
  width: 40px;
  position: absolute;
  right: -1px;
  height: 42px;
  border-radius: 0 21px 21px 0;
  text-align: center;
}

.near .del-icon .van-icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.require .container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 16px;
}

.require .container span {
  color: #ffffff;
  font-size: 14px;
}

.search .container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);
  padding: 0 16px;
}

.search .icon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translate(15px, -50%);
}

.search .container span {
  color: #c1c1c1;
  font-size: 14px;
}

.requirement-container {
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 5vw;
  border-radius: 8px 8px 0 0;
  height: 320px;
  width: 90vw;
  box-shadow: 0 8px 20px 0 rgba(10, 36, 99, 0.24);
}

.requirement-container .pull-icon {
  background-color: #dae0e7;
  width: 45px;
  height: 4px;
  border-radius: 2px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.requirement-container .title {
  font-size: 16px;
  color: #333333;
  padding: 10px 16px;
  padding-bottom: 0;
  font-weight: 500;
}

.requirement-container .title .more {
  float: right;
  color: #999;
  font-weight: normal;
}

.locate-tool {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: absolute;
  right: 16px;
  bottom: 40px;
}

.locate-tool .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
}

.data-tool {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: absolute;
  right: 16px;
  bottom: 108px;
}

.data-tool .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
}

.data-container {
  width: calc(90vw - 70px);
  height: 172px;
  background-color: #ff7d7d;
  position: relative;
  padding: 24px 35px;
}

.data-container img {
  width: 152px;
  height: 123px;
  position: absolute;
  right: -5px;
  bottom: 20px;
  z-index: 0;
}

.data-container .sys-name {
  color: #ffffff;
  font-size: 22px;
}

.data-container .needs {
  color: #ffffff;
  font-size: 32px;
  margin-top: 5px;
  font-weight: 500;
}

.data-container .block {
  background-color: rgba(253, 254, 255, 0.85);
  height: 38px;
  width: 100%;
  border-radius: 19px;
  margin-top: 10px;
  color: #e61f1c;
  font-size: 16px;
  position: relative;
  z-index: 2;
}

.data-container .block div {
  padding: 7px 16px;
}
</style>
