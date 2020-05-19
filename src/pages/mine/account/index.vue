<template>
  <div class="account">
    <div style="background-color: #fff">
      <div class="avatar">
        <van-image round width="60" height="60" :src="userInfo.avatar" />
        <div class="name">
          {{ userInfo.name }}
        </div>
      </div>

      <van-cell-group :border="false">
        <van-cell title="姓名" :value="userInfo.name" />
        <van-cell title="手机号" :value="userInfo.phone" @click="showEditPhone = true" is-link />
      </van-cell-group>
    </div>

    <div style="margin-top: 10px">
      <van-button @click="logout" plain hairline size="large">退出登录</van-button>
    </div>

    <van-dialog use-slot :show="showEditPhone" show-cancel-button @close="showEditPhone = false" @confirm="onConfirmPhone" title="修改手机">
      <div class="dialog-container">
        <div class="input">
          <input :value="phone" placeholder="请输入手机号" placeholder-class="placeholder" @input="phone = $event.target.value" />
        </div>

        <div class="input" style="margin-top: 20px; position: relative">
          <input :value="code" placeholder="请输入验证码" placeholder-class="placeholder" @input="code = $event.target.value" />

          <div v-if="!disabled" class="code-text" @click="verify">
            发送验证码
          </div>
          <div v-else class="code-text" style="color: #999">
            ({{ second }}s)
          </div>
        </div>
      </div>
    </van-dialog>

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { info, edit } from '@/api/user'
import { verify } from '@/api/common'

export default {
  data () {
    return {
      userInfo: {},
      showEditPhone: false,
      phone: '',
      code: '',
      second: 60,
      disabled: false
    }
  },

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      try {
        const res = await info()
        this.userInfo = res.data
      } catch (error) {
        // on error
      }
    },

    count () {
      const tim = setInterval(() => {
        this.second--
        if (this.second === 0) {
          clearInterval(tim)
          this.disabled = false
          this.second = 60
        }
      }, 1000)
    },

    async verify () {
      try {
        await verify({
          phoneNum: this.phone,
          type: 'updatePhone'
        })
        this.disabled = true
        this.count()
      } catch (error) {
        // on error
        this.disabled = false
        this.second = 60
      }
    },

    async onConfirmPhone () {
      try {
        const { phone, code } = this
        await edit({
          phone,
          code
        })
        this.showEditPhone = false
      } catch (err) {
        // on error
      }
    },

    async logout () {
      try {
        await this.$dialog.confirm({
          title: '退出登录',
          message: '退出之后再次登录需要输入密码'
        })
        try {
          await this.$store.dispatch('user/logout')
          this.$navigate.to('/pages/home/index', {}, true)
        } catch (error) {
          // on error
        }
      } catch (error) {
        // on cancel
      }
    }
  }
}
</script>

<style>
.account .avatar {
  text-align: center;
  padding: 10px 0
}

.account .name {
  margin-top: 5px;
  font-size: 14px;
  color: #323233;
  font-weight: 500
}

.account .dialog-container {
  padding: 0 16px;
  padding-top: 12px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 14px;
  color: #646566
}

.account .input {
  border-bottom: 1px solid #F3F3F5;
  padding: 5px 4px;
  text-align: left
}

.account .input .code-text {
  position: absolute;
  color: #E61F1C;
  font-size: 14px;
  right: 4px;
  top: 5px;
  z-index: 2
}

.placeholder {
  color: #C1C1C1
}
</style>