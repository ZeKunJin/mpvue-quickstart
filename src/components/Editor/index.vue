<template>
  <div class="editor">
    <template v-for="(input, index) in contentList">
      <div v-if="input.type === 'text'" class="input-block">
        <textarea :value="input.value" placeholder="请输入文本" @input="onInput($event, index)" auto-focus class="text" />

        <van-icon name="clear" class="clear-icon" size="18" @click="afterDelete($event, index)" />
      </div>

      <div v-if="input.type === 'image'" class="upload-block">
        <uploader
          :max="1"
          :files="input.value ? [{ url: input.value }] : []"
          @afterRead="afterRead($event, index)"
          @delete="afterDelete($event, index)"
        />
      </div>

      <div v-if="input.type === 'video'" class="upload-block">
        <uploader
          accept="video"
          :max="1"
          :files="input.value ? [{ url: input.value }] : []"
          @afterRead="afterRead($event, index)"
          @delete="afterDelete($event, index)"
        />
      </div>
    </template>

    <div class="add-block" @click="newInput">
      <div class="plus-icon">
        文字输入框/选择图片
      </div>
    </div>

    <van-popup :show="show" position="bottom" @close="show = false">
      <van-picker :columns="columns" show-toolbar @confirm="confirm" @cancel="show = false"/>
    </van-popup>
  </div>
</template>

<script>
import Uploader from '@/components/Uploader'

export default {
  components: {
    Uploader
  },

  data () {
    return {
      contentList: [],
      content: '',
      show: false,
      columns: [
        { value: 'text', text: '文字' },
        { value: 'image', text: '图片' },
        { value: 'video', text: '视频' }
      ],
      index: 0
    }
  },

  computed: {
    index: function () {
      return this.contentList.length - 1
    }
  },

  methods: {
    init () {
      this.contentList = []
      this.content = ''
    },

    newInput () {
      this.show = true
    },

    confirm (event) {
      if (this.contentList.length === 0 || this.contentList[this.index].value) {
        this.contentList.push({
          type: event.mp.detail.value.value,
          value: ''
        })
      } else {
        wx.showToast({
          title: '请填写文本或上传图片',
          icon: 'none'
        })
      }
      this.index++
      this.show = false
    },

    onInput (event, index) {
      this.index = index
      this.contentList[this.index].value = event.mp.detail.value
      this.emit()
    },

    afterRead (event, index) {
      this.index = index
      this.contentList[this.index].value = event.url
      this.emit()
    },

    afterDelete (event, index) {
      this.index = index
      this.contentList.splice(this.index, 1)
      this.emit()
    },

    emit () {
      this.content = ''
      this.contentList.forEach(element => {
        switch (element.type) {
          case 'text':
            this.content += `<div>${element.value}</div>`
            break
          case 'image':
            this.content += `<img style="width: 100%" src="${element.value}" />`
            break
          case 'video':
            this.content += `<video style="width: 100%" src="${element.value}" />`
            break
        }
      })
      this.$emit('input', this.content)
    }
  }
}
</script>

<style scoped>
.editor {
  background-color: #ffffff;
}

.editor .add-block {
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  text-align: center;
  height: 64px;
  position: relative;
  background-color: #fafafa
}

.editor .add-block .plus-icon {
  height: 64px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 16px;
  line-height: 64px
}

.editor .input-block {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
}

.editor .input-block .text {
  padding: 10px;
  position: relative;
  z-index: 0
}

.editor .upload-block {
  margin-bottom: 10px;
}

.editor .input-block .clear-icon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>