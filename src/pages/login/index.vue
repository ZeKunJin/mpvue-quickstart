<template>
  <div class="login">
    <img class="login-bg" src="../../../static/images/title-background.png" >

    <div class="block">
      <div class="title">
        <div class="desc">
          欢迎来到
        </div>
        <div class="name">
          社区微心愿
        </div>
      </div>

      <div style="margin-top: 30px">
        <div class="input">
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
      </div>

      <div class="button" style="height: 50px">
        <div style="width: calc(50vw - 40px); position: absolute; left: 32px">
          <van-button @click="cancel" round size="large">
            <span style="color: #999999">暂不登录</span>
          </van-button>
        </div>
        <div style="width: calc(50vw - 40px); float: right" class="login">
          <van-button @click="login" round color="linear-gradient(to right, #F15350, #F86E6E)" size="large">登录</van-button>
        </div>
      </div>

      <div class="register-text" @click="register">
        暂无账号?
        <span style="color: #E61F1C">点击注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { verify } from '@/api/common'

export default {
  data () {
    return {
      phone: '',
      code: '',
      disabled: false,
      second: 60
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
  },

  methods: {
    register () {
      this.$navigate.to('/pages/register/index')
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
          type: 'login'
        })
        this.disabled = true
        this.count()
      } catch (error) {
        // on error
        this.disabled = false
        this.second = 60
      }
    },
    
    cancel () {
      this.$navigate.back()
    },

    async login () {
      try {
        await this.$store.dispatch('user/login', {
          phone: this.phone,
          code: this.code,
          type: 0
        })
        this.$navigate.to('/pages/home/index')
      } catch (error) {
        // on error
      }
    }
  }
}
</script>

<style>
page {
  background-color: #ffffff
}

.login-bg {
  width: 100vw;
  height: 120px
}

.login .block {
  padding: 40px 32px
}

.login .title .desc {
  color: #999999;
  font-size: 20px;
  font-weight: 500
}

.login .title .name {
  font-size: 24px;
  font-weight: 500
}

.login .input {
  border-bottom: 1px solid #F3F3F5;
  padding: 5px 4px
}

.login .input .code-text {
  position: absolute;
  color: #E61F1C;
  font-size: 14px;
  right: 4px;
  top: 5px;
  z-index: 2
}

.login .button {
  margin-top: 64px;
  text-align: center
}

.login .register-text {
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  color: #666666
}

.login .button .login .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25)
}

.placeholder {
  color: #C1C1C1
}
</style>