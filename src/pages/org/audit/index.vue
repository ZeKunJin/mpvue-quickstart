<template>
  <div class="org-audit">
    <van-icon size="60" name="checked" color="#67c13e" />

    <div class="text">
      <div class="title">
        提交审核
      </div>
      <div class="desc">
        正在审核, 请稍后
      </div>
    </div>

    <div class="bottom">
      <van-button @click="back" round color="#E61F1C">
        <div style="padding: 0 32px">
          返回首页
        </div>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$navigate.to('/pages/home/index')
    }
  }
}
</script>

<style>
.org-audit {
  background-color: #ffffff;
  padding: 64px 0;
  text-align: center
}

.org-audit .text {
  margin-top: 10px
}

.org-audit .text .title {
  font-size: 14px;
}

.org-audit .text .desc {
  font-size: 12px;
  color: #999999;
  margin-top: 5px
}

.org-audit .bottom {
  position: fixed;
  bottom: 32px;
  text-align: center;
  width: 100vw;
}

.org-audit .bottom .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}
</style>