<script>
export default {
  async created () {
    // init app log
    let logs
    logs = mpvue.getStorageSync('logs') || []
    logs.unshift(Date.now())
    mpvue.setStorageSync('logs', logs)
  },

  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
