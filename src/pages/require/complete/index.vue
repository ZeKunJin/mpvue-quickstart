<template>
    <div>
        <div class="top_toast">
            <van-icon name="checked" class="icon_box"/>
            <p>信息提交成功，需求发布方将会及时与您联系</p>
        </div>
        <div class="btn_box">
            <van-button round type="info"  color="linear-gradient(90deg,rgba(241,83,80,1) 0%,rgba(248,110,110,1) 100%);" custom-style="width:300rpx;height:88rpx;box-shadow:0px 4px 4px 0px rgba(248,110,110,0.25);" @click="goHome">返回首页
            </van-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goHome () {
      this.$navigate.to('/pages/home/index')
    }
  }
}
</script>

<style lang="scss" scoped>
    .top_toast {
        padding-top: 34px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;

        .icon_box {
            font-size: 36px;
            color: #69C03F;
        }

        > p {
            font-size: 12px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 17px;
            padding: 14px 0 44px;
        }

    }

    .btn_box {
        position: fixed;
        bottom: 50px;
        left: 50%;
        margin-left: -75px;
    }
</style>
