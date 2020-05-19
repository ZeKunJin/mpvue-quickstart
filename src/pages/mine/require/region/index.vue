<template>
  <div class="region">
    <van-field
      label="需求地址"
      :value="requirement.location"
      placeholder="请输入需求地址"
      input-align="right"
      @change="onLocationChange"
    />

    <van-field
      label="需求定位"
      required
      readonly
      disabled
      input-align="right"
      :value="requirement.mapText"
      @click="toMap"
      :is-link="!requirement.mapText"
    />

    <van-field
      v-if="requirement.area"
      label="街道社区"
      required
      readonly
      disabled
      input-align="right"
      :value="regionText"
      @click="showRegion = true"
      :is-link="!requirement.village"
    />

    <div v-if="requirement.area" style="padding: 10px 16px; background-color: #fff">
      <map
        id="background"
        scale="14"
        :longitude="currLocation.longitude"
        :latitude="currLocation.latitude"
        :markers="markers"
        show-location
        style="width: calc(100vw - 32px); height: calc(100vw - 32px)"
      />
    </div>

    <div class="bottoms">
      <van-row gutter="20">
        <van-col span="12" style="text-align: right" class="cancel-button">
          <van-button @click="$navigate.back()" round>
            <div style="width: 128px">上一步</div>
          </van-button>
        </van-col>
        <van-col span="12" style="text-align: left" class="next-button">
          <van-button @click="next" round color="#E61F1C">
            <div style="width: 128px">确认修改</div>
          </van-button>
        </van-col>
      </van-row>
    </div>

    <van-dialog use-slot :show="showConfirm" show-cancel-button @close="showConfirm = false" @confirm="onRequire" title="提示">
      <div class="dialog-container">
        我已阅读并同意
        <span style="color: #E61F1C">《需求发布协议》</span>

        <p>
          红哨子社区对接平台”提交的信息中所涉及的内容描述、文件、证件及其有关附件是真实有效的，复印件与原件是一致的，并对因提交材料虚假所引发的一切后果承担全部法律责任。
        </p>
      </div>
    </van-dialog>

    <van-popup :show="showRegion" position="bottom" @close="showRegion = false">
      <van-picker :columns="regionColumns" show-toolbar @confirm="confirmRegion" @cancel="showRegion = false" @change="onRegionChange"/>
    </van-popup>
  </div>
</template>

<script>
import { editRequirement } from "@/api/require";
import { regionInfo, regionText } from '@/api/region'
import bus from '@/utils/bus'

export default {
  data() {
    return {
      requirement: {},
      provinceList: [],
      villageList: [],
      regionColumns: [],
      markers: [],
      regionText: '请选择',
      showConfirm: false,
      showRegion: false,
      loading: false,
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      },
    };
  },

  onLoad (option) {
    Object.assign(this, this.$options.data());
    this.requirement = JSON.parse(decodeURIComponent(option.requirement));
    this.getRegionText()
    this.getRegionInfo()
    this.setMarkers()
    this.setCenter()
  },

  onShow () {
    bus.$on('refresh', res => {
      this.requirement.area = res.requirement.area
      this.requirement.longitude = res.requirement.longitude
      this.requirement.dimension = res.requirement.dimension
      this.requirement.mapText = res.mapText
      this.setMarkers()
      this.setCenter()
      this.getRegionInfo()
    })
  },

  methods: {
    async getRegionInfo () {
      this.provinceList = []
      this.villageList = []
      const res = await this.getProvince()
      await this.getVillage(res)
    },

    setMarkers () {
      this.markers = [{
        id: 0,
        iconPath: "/static/icon/location.png",
        latitude: Number(this.requirement.dimension),
        longitude: Number(this.requirement.longitude),
        width: 30,
        height: 30,
        callout: {
          content: this.requirement.mapText,
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

    setCenter () {
      this.currLocation = {
        longitude: Number(this.requirement.longitude),
        latitude: Number(this.requirement.dimension)
      }
    },

    async getRegionText () {
      const { province, city, area, street, village } = this.requirement
      const regionArr = [
        province,
          city,
          area,
          street,
          village
      ]
      const res = await regionText({
        info: JSON.stringify(regionArr)
      })
      this.regionText = res.data[res.data.length - 1]
    },

    getProvince () {
      return new Promise(async resolve => {
        const res = await regionInfo({
          code: this.requirement.area,
          type: 3 
        })
        this.formatProvince(res.data)
        resolve(res.data[0].code)
      })
    },

     getVillage (code) {
      return new Promise(async resolve => {
        const res = await regionInfo({
          code,
          type: 4
        })
        this.formatVillage(res.data)
        resolve()
      })
    },

    formatProvince (province) {
      province.forEach(element => {
        this.provinceList.push({
          value: element.code,
          text: element.name
        })
      })
      this.regionColumns = [
        { values: this.provinceList },
        { values: [] }
      ]
    },

    formatVillage (village) {
      this.villageList = []
      village.forEach(element => {
        this.villageList.push({
          value: element.code,
          text: element.name
        })
      })
      this.regionColumns[1] = { values: this.villageList }
    },

    async onRegionChange (event) {
      const { picker, value, index } = event.mp.detail
      await this.getVillage(value[0].value)
      picker.setColumnValues(1, this.villageList)
    },

    confirmRegion (event) {
      const { value } = event.mp.detail
      this.regionText = value[1].text
      this.requirement.street = value[0].value
      this.requirement.village = value[1].value
      this.showRegion = false
    },

    validate() {
      return new Promise((resolve, reject) => {
        const info = this.requirement.longitude &&
          this.requirement.dimension &&
          this.requirement.street &&
          this.requirement.village &&
          this.requirement.area;

        if (info) {
          resolve();
        } else {
          reject();
        }
      });
    },

    next () {
      this.showConfirm = true
    },

    async onRequire() {
      try {
        await this.validate();
        try {
          this.requirement.city = String(this.requirement.area).slice(0, 4)
          this.requirement.province = String(this.requirement.area).slice(0, 2)
          await editRequirement(this.requirement);
          this.$navigate.to("/pages/require/index");
          wx.showToast({
            title: "修改成功",
            icon: "none"
          });
        } catch (error) {
          // on error
        }
      } catch (error) {
        let errMsg = "";
        errMsg = "请完善需求信息";
        wx.showToast({
          title: errMsg,
          icon: "none"
        });
      }
    },

    onLocationChange(event) {
      this.requirement.location = event.mp.detail;
    },

    toMap () {
      this.$navigate.to('/pages/mine/require/map/index')
    },

    agreement () {
      this.$navigate.to('/pages/require/agreement/index')
    }
  }
};
</script>

<style>
.region .bottoms {
  position: fixed;
  bottom: 32px;
  width: 100vw;
}

.region .next-button .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.region .cancel-button .van-button {
  box-shadow: 0 6px 10px 0 rgba(228, 235, 248, 0.31);
}

.region .dialog-container {
  padding-top: 12px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 14px;
  color: #646566
}

.region .dialog-container p {
  font-size: 12px;
  color: #999999;
  padding: 0 16px;
  margin-top: 10px;
  text-align: left;
}
</style>
