<template>
  <div class="map">
    <div class="search">
      <van-search
        :value="search"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        shape="round"
      >
        <div slot="label" class="area-text" @click="showCity = true">
          <div style="width: 48px" class="ellipsis">{{ city }}</div>
          <van-icon name="arrow-down" class="arrow-icon" />
        </div>
      </van-search>
    </div>
    
    <map
      id="background"
      scale="14"
      :longitude="currLocation.longitude"
      :latitude="currLocation.latitude"
      :markers="markers"
      show-location
      @tap="onTap"
      style="width: 100vw; height: calc(100vh - 310px)"
      class="map"
    />

    <scroll-view class="result" :scroll-y="true" @scrolltolower="onBottom">
      <van-cell-group>
        <van-cell v-for="item in result" :key="item.id" :title="item.title" @click="onSelect(item)" />
      </van-cell-group>
    </scroll-view>

    <van-popup :show="showCity" position="bottom" @close="showCity = false">
      <van-area :area-list="areaList" columns-num="2" @confirm="confirmCity" @cancel="showCity = false" :value="area.adcode" />
    </van-popup>
  </div>
</template>

<script>
import { search, geocoder } from '@/api/map'
import bus from '@/utils/bus'
import area from '@/utils/area'

export default {
  data () {
    return {
      search: '',
      city: '请选择',
      result: [],
      area: {},
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      },
      markers: [],
      page: 1,
      showCity: false,
      areaList: area
    }
  },

  async mounted () {
    Object.assign(this, this.$options.data())
    await this.getLocation()
    this.getNearby()
  },

  methods: {
    onBottom () {
      this.page++
      if (this.search) {
        this.mapSearch()
      } else {
        this.getNearby()
      }
    },

    initResult () {
      this.page = 1
      this.result = []
    },

    getLocation () {
      const vm = this
      return new Promise(resolve => {
        wx.getLocation({
          type: "wgs84",
          success(res) {
            vm.currLocation = {
              longitude: res.longitude,
              latitude: res.latitude
            }
            resolve()
          }
        })
      })
    },

    confirmCity (event) {
      this.city = event.mp.detail.values[1].name
      this.showCity = false
    },

    onSearch (event) {
      this.initResult()
      this.search = event.mp.detail
      if (this.search) {
        this.mapSearch()
      } else {
        this.getNearby()
      }
    },

    async mapSearch () {
      const res = await search({
        keyword: encodeURI(this.search),
        boundary: `region(${this.city}, 0)`,
        page_index: this.page
      })
      this.getResult(res.data)
    },

    async getNearby () {
      const res = await geocoder({
        location: `${this.currLocation.latitude},${this.currLocation.longitude}`,
        get_poi: 1,
        poi_options: `page_size=10;page_index=${this.page}`
      })
      this.area = res.result.ad_info
      this.city = res.result.ad_info.city
      this.getResult(res.result.pois)
    },

    getResult (arr) {
      arr.forEach(element => {
        this.result.push(element)
      })
    },

    onSelect (value) {
      this.$navigate.back()
      this.setMarkers(value)
      this.editPreData(value)
      this.refreshCenter(value)
    },

    refreshCenter (value) {
      this.currLocation = {
        longitude:  value.location.lng,
        latitude: value.location.lat
      }
    },

    setMarkers (value) {
      this.markers = [{
        id: value.id,
        iconPath: "/static/icon/location.png",
        latitude: value.location.lat,
        longitude: value.location.lng,
        width: 30,
        height: 30,
        callout: {
          content: value.title,
          display: "ALWAYS",
          padding: 8,
          bgColor: "#ffffff",
          borderRadius: 6,
          borderWidth: 2,
          borderColor: "#E61F1C",
          color: "#E61F1C",
          fontSize: 12
        }
      }]
    },

    editPreData (value) {
      bus.$emit('refresh', {
        requirement: {
          longitude: value.location.lng,
          dimension: value.location.lat,
          area: value.ad_info.adcode
        },
        mapText: value.title
      })
    }
  }
}
</script>

<style>
.map .background {
  width: 100vw;
  height: 100vh;
}

.map .search {
  width: 100vw;
}

.map .result {
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
  width: 100vw;
  height: 256px;
  z-index: 1;
}

.map .area-text {
  line-height: 34px;
  font-size: 12px;
  margin: 0 8px;
  position: relative;
  width: 64px;
}

.map .arrow-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}
</style>