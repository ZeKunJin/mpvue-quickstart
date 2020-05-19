<template>
  <div style="text-align: center">
    <div>
      <img class="empty-img" :src="imgUrl" mode="widthFix" />
    </div>
    <div class="empty-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '暂无数据'
    },
    src: {
      type: String,
      default: 'empty'
    }
  },
  
  data () {
    return {
      imgUrl: ''
    }
  },

  created () {
    this.imgUrl = `https://npi-website.oss-cn-shanghai.aliyuncs.com/fangyi/${this.src}.png`
  }
}
</script>

<style scoped>
.empty-img {
  width: 120px;
}

.empty-text {
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
}
</style>
