<template>
  <img :src="url" class="img" mode="widthFix" />
</template>

<script>
import { adInfo } from '@/api/ad'

export default {
  data() {
    return {
      url: 'https://npi-website.oss-cn-shanghai.aliyuncs.com/files/20200319/1240552394950082560.jpeg',
      adId: ''
    }
  },

  onLoad(option) {
    this.adId = option.id
    this.fetch()
  },

  methods: {
    async fetch() {
      // const res = await adInfo({
      //   id: this.adId
      // })
      // this.url = res.data.bannerLinkUrl
    }
  }
}
</script>

<style scoped>
.img {
  width: 100vw;
}
</style>