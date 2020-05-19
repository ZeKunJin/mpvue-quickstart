<script>
export default {
  data () {
    return {
      updateManager: wx.getUpdateManager()
    }
  },

  async created () {
    // init app log
    let logs
    logs = mpvue.getStorageSync('logs') || []
    logs.unshift(Date.now())
    mpvue.setStorageSync('logs', logs)

    this.checkUpdate()
  },

  log () {
    console.log(`log at:${Date.now()}`)
  },

  methods: {
    checkUpdate () {
      const vm = this
      this.updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          vm.onUpdate()
        }
      })
    },

    onUpdate () {
      this.updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success (res) {
            if (res.confirm) {
              this.updateManager.applyUpdate()
            }
          }
        })
      })

      this.updateManager.onUpdateFailed(function () {
        wx.showModal({
          title: '已经有新版本了哟~',
          content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
        })
      })
    }
  }
}
</script>

<style>
html, body {
  background-color: #F7F8FA
}
page {
  background-color: #F7F8FA
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
