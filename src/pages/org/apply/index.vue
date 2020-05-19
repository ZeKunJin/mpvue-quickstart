<template>
  <div class="apply">
    <img src="../../../../static/images/apply.png" />

    <div class="text">
      申请成功, 请等待组织审核
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
page {
  background-color: #ffffff
}

.apply {
  margin: 64px 0;
  text-align: center
}

.apply img {
  width: 144px;
  height: 116px;
}

.apply .text {
  color: #999999;
  margin-top: 10px;
  font-size: 12px
}

.apply .bottom {
  position: fixed;
  bottom: 32px;
  text-align: center;
  width: 100vw;
}

.apply .bottom .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}
</style>