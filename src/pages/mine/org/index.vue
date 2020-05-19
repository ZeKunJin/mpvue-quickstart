<template>
  <div class="mine-org">
    <template v-if="!loading">
      <scroll-view v-if="orgList.length > 0 || applyList.length > 0" class="scroll" :scroll-y="true" @scrolltolower="onBottom" lower-threshold="178">
        <van-cell v-for="org in orgList" :key="org.id" @click="detail(org)" is-link >
          <div slot="title" style="display: flex; align-items: center">
            <div v-if="org.applyNum > 0" class="unread" />
            {{ org.orgName }}
            <div v-if="org.status === '1'" >
              <div class="icon-container" style="color: #F7B500">
                <img class="audit-icon" src="../../../../static/icon/audit.png" />
                审核中
              </div>
            </div>
            <div v-if="org.status === '3'">
              <div class="icon-container" style="color: #C1C1C1">
                <img class="audit-icon" src="../../../../static/icon/confuse.png" />
                已拒绝: {{ org.checkReason || '--' }}
              </div>
            </div>
            <van-tag v-if="org.userRole === 'admin' || org.userRole === 'org_admin'" color="#fbe7f0" text-color="#E61F1C" style="margin-left: 8px">管理员</van-tag>
          </div>
        </van-cell>

        <van-cell v-for="apply in applyList" :key="org.id" is-link >
          <div slot="title">
            {{ apply.orgName }}
            <span v-if="apply.applyStatus === '1'" style="color: #999">(申请中)</span>
            <span v-if="apply.applyStatus === '3'" style="color: #999">(已拒绝)</span>
          </div>
        </van-cell>

        <div style="background-color: #fff; width: 100vw; height: 128px"></div>
      </scroll-view>

      <div v-else style="margin: 64px 0">
        <empty text="暂未加入或创建主体" src="empty-org" />
      </div>
    </template>

    <div class="bottom">
      <van-button @click="org" round color="#E61F1C">
        <div style="margin: 0 16px">
          加入组织/创建主体
        </div>
      </van-button>
    </div>
  </div>
</template>

<script>
import Empty from '@/components/Empty'
import { userOrgList, orgUserApplyList } from '@/api/org'

export default {
  components: {
    Empty
  },

  data () {
    return {
      orgList: [],
      applyList: [],
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
    this.orgList = []
    this.fetch()
  },

  methods: {
    onBottom () {
      this.page++
      if (this.orgList.length < this.total) {
        this.loading = true
        this.getOrgList()
      }
    },

    fetch () {
      this.getOrgList()
      this.getApplyList()
    },

    async getApplyList () {
      try {
        const res = await orgUserApplyList({
          page: 1,
          limit: 999,
          userId: this.$store.getters.id
        })
        this.applyList = res.data.rows
      } catch (error) {
        // on error
      }
    },

    async getOrgList () {
      try {
        const res = await userOrgList({
          page: this.page,
          limit: this.limit,
          userId: this.$store.getters.id
        })
        this.loading = false
        this.total = res.data.total
        res.data.rows.forEach(element => {
          this.orgList.push(element)
        })
      } catch (error) {
        // on error
      }
    },

    org () {
      this.$navigate.to('/pages/org/index')
    },

    detail (org) {
      const roles = org.userRole
      this.$navigate.to('/pages/mine/org/detail/index', {
        id: org.orgId,
        roles
      })
    }
  }
}
</script>

<style>
page {
  background-color: #ffffff
}

.mine-org .bottom {
  position: fixed;
  bottom: 32px;
  text-align: center;
  width: 100vw;
}

.mine-org .bottom .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.mine-org .scroll {
  height: 100vh;
}

.mine-org .icon-container {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 4px
}

.mine-org .audit-icon {
  width: 16px;
  height: 16px;
}

.mine-org .unread {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  margin-right: 8px;
  align-items: center;
}
</style>