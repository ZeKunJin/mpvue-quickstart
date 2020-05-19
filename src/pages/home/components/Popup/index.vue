<template>
  <div>
    <van-popup
      :show="popupInfo.show"
      round
      position="bottom"
      custom-style="width:90%; margin-left: 5%; box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.24) inset;"
      @close="onClose"
    >
      <div style="text-align: center">
        <div class="show-button" />
      </div>

      <div class="container" @click="detail">
        <div :style="'background: url(' + requirementInfo.cover +') no-repeat center/cover'" class="img">
          <div v-if="requirementInfo.isDefaultCover === '2'" class="cover-container">
            <div class="ellipsis">{{ requirementInfo.typeName }}</div>
            <div>需求对接</div>
          </div>
        </div>
        
        <div style="position: relative">
          <div class="title">
            {{ requirementInfo.title }}
          </div>

          <div class="desc">
            <div style="color: #F68725; font-size: 12px; display: flex">
              需求进度
              <template v-if="requirementInfo.quantizationType === '1'">
                <div style="width: 142px; padding: 6.5px 4px">
                  <van-progress :percentage="requirementInfo.scale" :show-pivot="false" color="#F68725" />
                </div>
                {{ requirementInfo.scale }}%
              </template>

              <div v-else style="margin-left: 4px">
                {{ requirementInfo.status }}
              </div>
            </div>

            <div style="font-size: 12px; width: calc(90vw - 48px); margin-top: 3px; color: #333; display: flex">
              <div class="ellipsis" style="width: 128px">
                类型: {{ requirementInfo.demandTypeName }}
              </div>
              <span style="margin-left: 4px; font-size: 10px; color: #999">
                {{ requirementInfo.createTime }}
                <span style="margin-left: 4px">发布</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="supply">
        <div class="ellipsis" style="width: 192px">需求方: {{ requirementInfo.requirementOrgName }}</div>

        <van-button size="mini" style="margin-left: auto" round color="#F68725" @click="supply">
          <div style="margin: 0 16px">我要对接</div>
        </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { requirementDetail, requirementBrowse } from "@/api/require";
import { formatDate } from "@/utils/index";

export default {
  data() {
    return {
      requirementInfo: {}
    };
  },

  model: {
    prop: "popupInfo",
    event: "onClose"
  },

  props: {
    popupInfo: {
      type: Object,
      default: function() {
        return {
          show: false,
          markerId: ""
        };
      }
    }
  },

  mounted() {
    if (this.popupInfo.markerId) {
      this.fetch();
    }
  },

  methods: {
    async fetch() {
      const res = await requirementDetail({
        requirementId: this.popupInfo.markerId
      })
      this.requirementInfo = res.data
      this.requirementInfo.createTime = formatDate(this.requirementInfo.createTime)
      this.requirementInfo.typeText = this.requirementInfo.demandTypeName.split(',')[0]
    },

    onClose () {
      this.$emit('onClose')
    },

    async detail () {
      await requirementBrowse({
        requirementId: this.requirementInfo.id
      })
      this.$navigate.to("/pages/require/detail/index?id=" + this.requirementInfo.id)
    },

    supply () {
      this.$navigate.to("/pages/require/supply/index", {
        id: this.requirementInfo.id
      })
    }
  },

  watch: {
    popupInfo(val) {
      if (val.markerId) {
        this.fetch();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 18px 16px 10px 16px;
  display: flex;

  .img {
    width: 72px;
    height: 72px;
    background-size: 72px 72px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-right: 16px;
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

  .title {
    font-size: 14px;
    color: #630a24;
    font-weight: 500
  }

  .desc {
    position: absolute;
    bottom: 0;
  }
}

.supply {
  padding: 10px 16px;
  padding-bottom: 20px;
  border-top: 1px solid #F1F1F1;
  font-size: 12px;
  color: #333333;
  display: flex;
}

.show-button {
  background-color: #DAE0E7;
  width: 45px;
  height: 4px;
  border-radius: 2px;
  margin: auto;
  margin-top: 10px
}
</style>
