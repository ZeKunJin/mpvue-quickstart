<template>
  <van-uploader :accept="accept" preview-image :file-list="files" :max-count="max"  @afterRead="afterRead" @delete="afterDel"/>
</template>

<script>
import { upload } from '@/api/common'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    files: {
      type: Array
    },
    max: {
      type: Number,
      default: 1
    },
    accept: {
      type: String,
      default: 'image'
    }
  },

  methods: {
    async afterRead (event) {
      const { file } = event.mp.detail
      try {
        const res = await upload(file.path)
        this.$emit('afterRead', {
          value: this.value,
          url: JSON.parse(res.data).data.url
        })
      } catch (error) {
        // on error
      }
    },

    afterDel (event) {
      this.$emit('delete', {
        value: this.value,
        index: event.mp.detail.index
      })
    }
  }
}
</script>