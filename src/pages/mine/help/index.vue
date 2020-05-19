<template>
  <img :src="url" class="img" mode="widthFix" />
</template>

<script>
export default {
  data () {
    return {
      url: 'https://npi-website.oss-cn-shanghai.aliyuncs.com/fangyi/help.png'
    }
  }
}
</script>

<style scoped>
.img {
  width: 100vw
}
</style>