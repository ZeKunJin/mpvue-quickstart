<template>
  <div class="require">
    <van-search
      shape="round"
      :value="search"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @change="onChange"
    >
      <div slot="label" class="area-text" @click="selectArea">
        <div style="width: 48px" class="ellipsis">{{ areaText }}</div>
        <van-icon name="arrow-down" class="arrow-icon" />
      </div>
    </van-search>
    
    <div class="tool" @click="toRequire">
      <img src="../../../static/icon/add.png" class="icon" />
    </div>

    <van-tabs :active="active" :border="false" color="#E61F1C" @change="logActive" @onClick="initTab">
      <van-tab v-for="(stair, index) in stairs" :key="index" :name="stair.id" :title="stair.remark">
        <div class="sidebar" style="width: 85px">
          <van-sidebar :active-key="activityKey" @change="onSidebarChange">
            <van-sidebar-item
              v-for="(item, _index) in detailList"
              :key="_index"
              :title="item.label"
            />
          </van-sidebar>
        </div>

        <div class="container" style="width: calc(100vw - 85px)">
          <scroll-view
            v-if="requirementList.length!==0"
            class="hei_box"
            scroll-y="true"
            @scrolltoupper="refresh"
            @scrolltolower="loadMore"
          >
            <ul>
              <li
                v-for="(itemss,____index) in requirementList"
                :key="____index"
                class="list_box"
                @click.stop="goDetail(itemss.id)"
                style="position: relative"
              >
                <div class="list_image_box">
                  <div :style="'background: url(' + itemss.cover +') no-repeat center/cover'" class="img">
                    <div v-if="itemss.isDefaultCover === '2'" class="cover-container">
                      <div class="ellipsis">{{ itemss.typeName }}</div>
                      <div>需求对接</div>
                    </div>
                  </div>
                  <div class="urgent_box" v-if="itemss.level === 2">急缺</div>
                </div>

                <div style="position: absolute; top: 10px; right: 16px; color: #999; font-size: 12px">
                  浏览量: {{ itemss.browseTimes || 0 }}
                </div>

                <div class="list_right_box">
                  <div class="first_box">
                    <p style="word-wrap:break-word;">{{itemss.title}}</p>
                  </div>

                  <div class="last_box">
                    <span>{{itemss.createTime}}发布</span>
                    <div style="position: absolute; right: 16px">
                      <van-button
                        round
                        size="small"
                        color="#F68725"
                        custom-style="font-size:12px; height:44rpx"
                        @click.stop="goSupply(itemss.id)"
                      >我要对接</van-button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </scroll-view>

          <div class="empty_box" v-else>
            <img src="/static/images/empty.png" />
            暂无数据
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <van-popup :show="showArea" position="bottom" @close="showArea = false">
      <van-area :area-list="areaList" @confirm="confirmArea" @cancel="showArea = false" :value="area" :columns-placeholder="['请选择', '请选择', '请选择']" />
    </van-popup>

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { typeList, detailList, requirementList, requirementBrowse } from '@/api/require'
import { userOrgList } from '@/api/org'
import { formatDate } from '@/utils/index'
import { geocoder } from '@/api/map'
import area from '@/utils/area'

export default {
  data () {
    return {
      active: 0,
      activityKey: -1,
      page: 1,
      tabs: [],
      stairs: '',
      detailList: '',
      requirementList: '',
      formatDate,
      search: '',
      more: true,
      titleVal: '',
      area: '',
      city: '',
      province: '',
      areaText: '请选择',
      showArea: false,
      areaList: area,
      districtCode: ''
    }
  },

  async mounted () {
    try {
      await this.getLocation()
      await this.regionGeocoder()
      this.getTypeList()
    } catch (err) {
      this.area = ''
      this.city = ''
      this.province = ''
      this.getTypeList()
    }
  },

  methods: {
    getLocation() {
      return new Promise((resolve, reject) => {
        const vm = this;
        wx.getLocation({
          type: "wgs84",
          success: res => {
            vm.region = res
            resolve()
          },
          fail: err => {
            reject(err)
          }
        })
      })
    },

    async regionGeocoder () {
      return new Promise(async resolve => {
        const { latitude, longitude } = this.region
        const res = await geocoder({
          location: `${latitude},${longitude}`
        })
        this.area = res.result.ad_info.adcode
        this.city = res.result.ad_info.adcode.slice(0, 4)
        this.province = res.result.ad_info.adcode.slice(0, 2)
        this.areaText = res.result.ad_info.city
        resolve()
      })
    },

    selectArea () {
      this.showArea = !this.showArea
    },

    confirmArea (event) {
      const value = event.mp.detail.values
      const region = this.getRegionCode(value)
      if (region && region.code) {
        this.areaText = region.name
      } else {
        this.areaText = '请选择'
        this.area = ''
        this.city = ''
        this.province = ''
      }
      if (this.activityKey === -1) {
          this.getRequirementList('', '', true)
        } else {
          this.getRequirementList(this.detailList[this.activityKey].value, '', true)
        }
      this.showArea = false
    },

    getRegionCode (value) {
      this.area = ''
      this.province = ''
      this.city = ''
      for (let i = 2; i > -1; i--) {
        if (value[i] && value[i].code) {
          switch (i) {
            case 2:
              this.area = value[i].code
              break
            case 1:
              value[i].code = value[i].code.slice(0, 4)
              this.city = value[i].code
              break
            case 0:
              value[i].code = value[i].code.slice(0, 2)
              this.province = value[i].code
              break
          }
          return value[i]
        }
      }
    },

    loadMore () {
      if (!this.more) {
        return false
      }
      this.page += 1
      if (this.activityKey === -1) {
        this.getRequirementList('', this.titleVal, false, this.areaText)
      } else {
        this.getRequirementList(this.detailList[this.activityKey].value, '', false)
      }
    },

    onSearch (e) {
      if (e.mp.detail !== '') {
        this.titleVal = e.mp.detail
        this.getRequirementList('', this.titleVal, true)
      }
      this.activityKey = -1
    },

    onChange (e) {
      if (e.mp.detail === '') {
        this.activityKey = -1
        this.getRequirementList('', '', true)
      }
    },

    async getRequirementList (val, title, init) {
      if (init) {
        this.page = 1
        this.more = true
        this.requirementList = []
      }
      try {
        let res = await requirementList({
          type: this.active === 0 ? '' : this.active,
          demandType: val === 0 ? '' : val,
          limit: 10,
          page: this.page,
          queryString: title || '',
          area: this.city ? '' : this.area,
          city: this.province ? '' : this.city,
          province: this.province
        })
        if (res.data.rows < 6 && this.page > 1) {
          this.more = false
        }
        if (init) {
          this.requirementList = res.data.rows
          this.requirementList.forEach((i) => {
            i.createTime = this.formatDate(i['createTime'])
          })
        } else {
          res.data.rows.forEach((i) => {
            i.createTime = this.formatDate(i['createTime'])
          })
          this.requirementList = this.requirementList.concat(res.data.rows)
        }
      } catch (e) {

      }
    },
    async getDetailList (val) {
      try {
        let res = await detailList({
          dictId: val === 0 ? '' : val,
          limit: 999,
          page: 1
        })
        this.detailList = res.data.rows
        if (this.activityKey === -1) {
          this.getRequirementList('', '', true)
        } else {
          this.getRequirementList(this.detailList[this.activityKey].value, '', true)
        }
      } catch (e) {

      }
    },

    logActive (event) {
      this.active = event.mp.detail.name
      this.activityKey = -1
      this.getDetailList(this.active)
    },

    initTab (event) {
      this.activityKey = -1
      this.getDetailList(this.active)
    },

    async getTypeList () {
      try {
        const res = await typeList({
          limit: 10,
          page: 1
        })
        this.stairs = res.data.rows
        this.stairs.unshift({
          id: 0,
          name: 'all_service',
          remark: '全部'
        })
        this.getDetailList(this.active)
      } catch (error) {
        // on error
      }
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
        this.$navigate.to("/pages/require/create/index")
      } else {
        this.$dialog.confirm({
          title: '提示',
          message: '请先创建或加入组织'
        }).then(() => {
          this.$navigate.to("/pages/org/index")
        })
      }
    },

    async goDetail (val) {
      await requirementBrowse({
        requirementId: val
      })
      this.$navigate.to('/pages/require/detail/index?id=' + val)
    },

    goSupply (val) {
      // this.getTypeList()
      this.$navigate.to('/pages/require/supply/index', {
        id: val
      })
    },

    onSidebarChange (event) {
      this.activityKey = event.mp.detail
      this.getRequirementList(this.detailList[this.activityKey].value, '', true)
    }
  },

  onShareAppMessage (res) {
    if (res.from !== 'button') return false
    return {
      title: res.target.dataset.title,
      path: '/pages/require/detail/index?id=' + res.target.dataset.id,
      imageUrl: res.target.dataset.img
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.tool {
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  bottom: 40px;
  right: 16px;
  z-index: 9;
  background-color: #fff
}

.tool .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
}

.area-text {
  line-height: 34px;
  font-size: 12px;
  margin: 0 8px;
  position: relative;
  width: 64px;
}

.arrow-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}

.share-button {
  list-style: none;
  background: #fff;
  font-size: 14px;
  color: #999;
  border: none;

  &:after {
    border: none;
  }
}

.list_box {
  width: 100%;
  height: 92px;
  padding: 10px 7px;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;

  .list_right_box {
    .last_box {
      margin-top: 16px;
      font-size: 12px;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .first_box {
      width: 100%;
      display: flex;

      p {
        width: 140px;
        font-size: 14px;
        line-height: 18px;
        height: 36px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font-weight: 500;
        color: rgba(99, 10, 36, 1);
      }
    }
  }

  .list_image_box {
    width: 72px;
    height: 72px;
    margin-right: 10px;
    position: relative;

    .urgent_box {
      position: absolute;
      width: 32px;
      height: 18px;
      background: rgba(209, 20, 111, 1);
      border-radius: 0px 4px 0px 4px;
      left: 0;
      bottom: 0;
      font-size: 10px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 18px;
      text-align: center;
    }

    .img {
      width: 72px;
      height: 72px;
      background-size: 72px 72px;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-radius: 10px;

      .cover-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        font-size: 14px;
        width: 72px;
        text-align: center
      }
    }
  }
}

.sidebar {
  float: left;
  width: 85px;
  height: calc(100vh - 100px);
  overflow: auto;
}

.require {
  height: 100vh;
  overflow: hidden;

  .container {
    float: left;
    width: calc(100% - 85px);
    /*overflow: auto;*/
    .hei_box {
      height: calc(100vh - 98px);
    }

    .empty_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-top: 56px;

      img {
        width: 120px;
        height: 92px;
      }
    }
  }
}
</style>

<style>
.sidebar .van-sidebar-item--selected {
  border-color: #e61f1c;
}

page {
  background-color: #ffffff
}
</style>
