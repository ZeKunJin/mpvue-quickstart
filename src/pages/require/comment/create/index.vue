<template>
  <div class="create-comment">
    <div class="publish">
      <span @click="publish">发布</span>
    </div>

     <div class="text-input">
       <textarea :value="text" placeholder="请输入文本" @input="onInput" auto-focus style="padding: 10px" />
     </div>

     <div class="file-upload">
       <uploader :max="3" :files="files" @afterRead="afterRead" @delete="afterDelete" />
     </div>
  </div>
</template>

<script>
import Uploader from '@/components/Uploader'
import { commentPublish, commentRepay } from '@/api/comment'

export default {
  components: {
    Uploader
  },

  data () {
    return {
      requirementId: '',
      commentId: '',
      repayId: '',
      repayType: '',
      text: '',
      files: []
    }
  },

  onLoad (option) {
    Object.assign(this, this.$options.data())
    this.requirementId = option.requirementId
    this.commentId = option.commentId || ''
    this.repayId = option.repayId || ''
    this.repayType = option.repayType || 'default'
  },

  methods: {
    onInput (event) {
      this.text = event.mp.detail.value
    },

    afterRead (event) {
      this.files.push({
        url: event.url
      })
    },

    afterDelete (event) {
      this.files.splice(event.index, 1)
    },

    async publish () {
      if (this.text) {
        try {
          switch (this.repayType) {
            case 'default':
              await this.commentPublish()
              break
            case 'comment':
              await this.commentRepay()
              break
            case 'repay':
              await this.commentRepay()
              break
          }
          this.$navigate.back()
          wx.showToast({
            title: "发布成功",
            icon: "none"
          })
        } catch (err) {
          // on error
        }
      }
    },

    commentPublish () {
      const vm = this
      return new Promise(async (resolve, reject) => {
        await commentPublish({
          content: vm.text,
          contentFiles: vm.files,
          contentLabel: '1',
          requirementId: vm.requirementId
        })
        resolve()
      })
    },

    commentRepay () {
      const data = {
        commentId: this.commentId,
        content: this.text,
        contentFiles: this.files,
        requirementId: this.requirementId,
        repayId: this.repayId,
        repayType: this.repayType
      }
      return new Promise(async (resolve, reject) => {
        await commentRepay(data)
        resolve()
      })
    }
  }
}
</script>

<style scoped>
.create-comment {
  padding: 10px 16px;
  background-color: #ffffff
}

.create-comment .text-input {
  margin-top: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
}

.create-comment .file-upload {
  margin-top: 10px;
}

.create-comment .publish {
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  color: #630a24;
}
</style>