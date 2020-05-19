<template>
  <div class="mine">
    <div class="block">
      <van-image round width="60px" height="60px" :src="isLogin ? userInfo.avatar : ''" use-error-slot>
        <van-icon slot="error" name="user-o" />
      </van-image>

      <van-tag v-if="!isLogin" @click="login" class="login-tag" round size="large" color="#F7F7F7">
        <div class="login-text">
          登录/注册
        </div>
      </van-tag>

      <div v-else class="info-text">
        <div class="name">
          {{ userInfo.name }}
        </div>
        <div style="margin-top: 5px">
          <van-tag round size="large" :color="isOrg ? '#fbe7f0' : '#F7F7F7'">
            <img v-if="isOrg" src="../../../static/icon/logo.png" style="width: 20px; height: 20px" />
            <img v-else src="../../../static/icon/logo-inactive.png" style="width: 20px; height: 20px" />
            <div class="org-text">
              <template v-if="isOrg" @click="mineOrg">
                <div style="width: 128px" class="ellipsis">
                  {{ orgName }}
                </div>
              </template>
              <span v-else @click="org">
                加入组织/创建主体
              </span>
            </div>
          </van-tag>
        </div>
      </div>
    </div>

    <van-cell-group :border="false">
      <van-cell @click="mineOrg" is-link >
        <img slot="icon" src="../../../static/icon/org.png" class="icon" />
        <div slot="title" style="display: flex; align-items: center">
          我的组织
          <div v-if="hasApply" class="unread" />
        </div>
      </van-cell>
      <van-cell title="我的需求" @click="mineRequire" is-link >
        <img slot="icon" src="../../../static/icon/require.png" class="icon" />
      </van-cell>
      <van-cell title="我的对接" @click="supply" is-link >
        <img slot="icon" src="../../../static/icon/supply.png" class="icon" />
      </van-cell>
      <van-cell title="账号信息" @click="account" is-link >
        <img slot="icon" src="../../../static/icon/account.png" class="icon" />
      </van-cell>
      <van-cell title="联系我们" @click="phone" is-link >
        <img slot="icon" src="../../../static/icon/phone.png" class="icon" />
      </van-cell>
      <van-cell title="帮助" @click="help" is-link >
        <img slot="icon" src="../../../static/icon/question.png" class="icon" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { info } from '@/api/user'
import { userOrgList, hasApply } from '@/api/org'

export default {
  data () {
    return {
      userInfo: {},
      orgList: [],
      orgName: '',
      total: 0,
      limit: 5,
      page: 1,
      status: 2,
      hasApply: false
    }
  },

  computed: {
    isLogin: function (params) {
      const value = !!this.$store.getters.token
      if (value) {
        this.fetch()
      }
      return value
    },

    isOrg: function () {
      return this.total > 0
    }
  },

  onShow () {
    if (this.isLogin) {
      this.fetch()
    }
  },

  methods: {
    async fetch () {
      let nameList = []
      try {
        const [userRes, orgRes, applyRes] = await Promise.all([
          info(),
          userOrgList({
            page: this.page,
            limit: this.limit,
            userId: this.$store.getters.id,
            status: this.status
          }),
          hasApply()
        ])
        this.userInfo = userRes.data
        this.orgList = orgRes.data.rows
        this.orgList.forEach(element => {
          nameList.push(element.orgName)
        })
        this.orgName = nameList.join('/')
        this.hasApply = applyRes.data.length > 0
        this.total = orgRes.data.total
      } catch (error) {
        // on error
      }
    },

    mineOrg () {
      this.$navigate.to('/pages/mine/org/index')
    },

    org () {
      this.$navigate.to('/pages/org/index')
    },

    mineRequire () {
      this.$navigate.to('/pages/mine/require/index')
    },

    account () {
      this.$navigate.to('/pages/mine/account/index')
    },

    supply () {
      this.$navigate.to('/pages/mine/supply/index')
    },

    login () {
      this.$navigate.to('/pages/login/index')
    },

    help () {
      this.$navigate.to('/pages/mine/help/index')
    },

    phone () {
      wx.makePhoneCall({
        phoneNumber: '13046639806'
      })
    }
  }
}
</script>

<style scoped>
.mine {
  background-color: #ffffff
}

.mine .block {
  position: relative;
  background-color: #ffffff;
  padding: 10px 16px
}

.mine .login-tag {
  position: absolute;
  top: 50%;
  transform: translate(10px, -50%)
}

.mine .login-text {
  color: #E61F1C;
  margin: 5px 24px;
  font-weight: 500
}

.mine .icon {
  width: 22px;
  height: 22px;
  margin-right: 8px
}

.mine .info-text {
  position: absolute;
  top: 50%;
  transform: translate(16px, -50%);
  display: inline;
}

.mine .info-text .name {
  font-size: 16px;
  color: #323233
}

.mine .info-text .org-text {
  font-size: 14px;
  color: #E61F1C;
  margin: 3px 24px;
}

.mine .unread {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  margin-left: 8px;
  align-items: center;
}
</style>
