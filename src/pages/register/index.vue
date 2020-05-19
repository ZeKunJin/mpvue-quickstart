<template>
  <div class="register">
    <img class="register-bg" src="../../../static/images/title-background.png" >

    <div class="block">
      <div class="title">
        <div class="desc">
          注册
        </div>
      </div>

      <div style="margin-top: 30px">
        <div class="input" style="margin-top: 10px; position: relative">
          <input :value="name" placeholder="请输入用户名" placeholder-class="placeholder" @input="inputName" />
        </div>
        <div class="input" style="margin-top: 20px">
          <input :value="phone" placeholder="请输入手机号" placeholder-class="placeholder" @input="inputPhone" />
        </div>
        <div class="input" style="margin-top: 20px; position: relative">
          <input :value="code" placeholder="请输入验证码" placeholder-class="placeholder" @input="inputCode" />
          <div v-if="!disabled" class="code-text" @click="verify">
            发送验证码
          </div>
          <div v-else class="code-text" style="color: #999">
            ({{ second }}s)
          </div>
        </div>

        <div style="margin-top: 20px; font-size: 12px">
          <van-checkbox :value="checked" @change="onCheckededChange" checked-color="#E61F1C" icon-size="18">
            <span style="color: #666">我已阅读并同意</span>
            <span style="color: #E61F1C" @click="agreement">《用户使用协议》</span>
          </van-checkbox>
        </div>
      </div>

      <div class="button">
        <van-button open-type="getUserInfo" @getuserinfo="wxGetInfo" round color="linear-gradient(to right, #F15350, #F86E6E)" size="large">
          注册
        </van-button>
      </div>

      <div class="login-text" @click="login">
        已有账号?
        <span style="color: #E61F1C">立即登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { verify, openid } from '@/api/common'
import { register } from '@/api/user'

export default {
  data () {
    return {
      name: '',
      phone: '',
      code: '',
      avatar: '',
      disabled: false,
      second: 60,
      checked: false
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
  },

  methods: {
    login () {
      this.$navigate.back()
    },

    inputName (event) {
      this.name = event.target.value
    },

    inputPhone (event) {
      this.phone = event.target.value
    },

    inputCode (event) {
      this.code = event.target.value
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
          type: 'register'
        })
        this.disabled = true
        this.count()
      } catch (error) {
        // on error
      }
    },

    wxGetInfo (event) {
      const { userInfo } = event.mp.detail
      this.avatar = userInfo.avatarUrl
      this.register()
    },

    wxLogin () {
      wx.login({
        async success (res) {
          if (res.code) {
            await openid({ code: res.code })
          }
        }
      })
    },

    onCheckededChange (event) {
      this.checked = event.mp.detail
    },

    validate () {
      return new Promise((resolve, reject) => {
        if (this.checked) {
          resolve()
        } else {
          reject()
        }
      })
    },

    async register () {
      try {
        await this.validate()
        try {
          await register({
            name: this.name,
            phone: this.phone,
            code: this.code,
            avatar: this.avatar,
            type: 0
          })
          this.$navigate.back()
          wx.showToast({
            title: '注册成功',
            icon: 'none'
          })
        } catch (error) {
          // on error
        }
      } catch (error) {
        wx.showToast({
          title: '请同意用户使用协议',
          icon: 'none'
        })
      }
    },

    agreement () {
      this.$navigate.to('/pages/register/agreement/index')
    }
  }
}
</script>

<style>
page {
  background-color: #ffffff
}

.register-bg {
  width: 100vw;
  height: 120px
}

.register .block {
  padding: 40px 32px
}

.register .title .desc {
  font-size: 20px;
  font-weight: 500
}

.register .title .name {
  font-size: 24px;
  font-weight: 500
}

.register .input {
  border-bottom: 1px solid #F3F3F5;
  padding: 5px 4px
}

.register .input .code-text {
  position: absolute;
  color: #E61F1C;
  font-size: 14px;
  right: 4px;
  top: 5px;
  z-index: 2
}

.register .button {
  margin-top: 44px;
  text-align: center
}

.register .login-text {
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  color: #666666
}

.register .button .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25)
}

.placeholder {
  color: #C1C1C1
}
</style>