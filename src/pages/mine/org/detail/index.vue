<template>
  <div class="mine-org-detail">
    <van-tabs :active="active" @change="onChange" color="#E61F1C">
      <van-tab title="成员列表" name="member">
        <template v-if="!loading">
          <scroll-view v-if="member.list.length > 0" style="height: calc(100vh - 44px)" :scroll-y="true" @scrolltolower="onBottom('member')">
            <van-swipe-cell v-for="member in member.list" :key="member.userId" :right-width="65">
              <van-cell @click="setManager(member)">
                <div slot="title">
                  {{ member.userName }}
                  <van-tag v-if="member.userRole === 'admin' || member.userRole === 'org_admin'" color="#fbe7f0" text-color="#E61F1C" style="margin-left: 8px">管理员</van-tag>
                </div>
              </van-cell>
              <div slot="right" class="del-container" @click="onDelete($event, member)">
                <span>删除</span>
              </div>
            </van-swipe-cell>
          </scroll-view>

          <div v-else style="margin: 64px 0">
            <empty />
          </div>
        </template>
      </van-tab>

      <van-tab title="待审核" name="audit" v-if="roles === 'admin' || roles === 'org_admin'">
        <template v-if="!loading">
          <scroll-view v-if="audit.list.length > 0" class="scroll" :scroll-y="true" @scrolltolower="onBottom('audit')">
            <van-cell v-for="audit in audit.list" :key="audit.userId">
              <div slot="title">
                {{ audit.userName }}
              </div>

              <van-button @click="onApply(audit)" round size="mini" color="#EE4E8C1A">
                <span style="color: #E61F1C">审核</span>
              </van-button>
            </van-cell>
          </scroll-view>

          <div v-else style="margin: 64px 0">
            <empty />
          </div>
        </template>
      </van-tab>
    </van-tabs>

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { orgUserList, orgApplyList, applyAudit, removeUser, setManager, revokeManager } from '@/api/org'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },

  data () {
    return {
      active: 'member',
      orgId: '',
      roles: '',
      member: {
        total: 0,
        page: 1,
        list: []
      },
      audit: {
        total: 0,
        page: 1,
        list: []
      },
      limit: 999,
      loading: true
    }
  },

  onLoad (option) {
    Object.assign(this, this.$options.data())
    this.orgId = option.id
    this.roles = option.roles
  },

  mounted () {
    this.fetch()
  },

  methods: {
    fetch () {
      this.getMemList()
      this.getAuditList()
    },

    onBottom (value) {
      if (this[value].list.length < this[value].total) {
        this[value].page++
        switch (value) {
          case 'member':
            this.getMemList()
            break
          case 'audit':
            this.getAuditList()
            break
        }
      }
    },

    async getMemList () {
      const res = await orgUserList({
        orgId: this.orgId,
        page: this.member.page,
        limit: this.limit
      })
      this.member.total = res.data.total
      res.data.rows.forEach(element => {
        this.member.list.push(element)
      })
      this.loading = false
    },

    async getAuditList () {
      const res = await orgApplyList({
        orgId: this.orgId,
        page: this.audit.page,
        limit: this.limit
      })
      this.audit.total = res.data.total
      res.data.rows.forEach(element => {
        this.audit.list.push(element)
      })
      this.loading = false
    },

    onChange (event) {
      this.active = event.mp.detail.name
    },

    async onApply (audit) {
      try {
        await this.$dialog.confirm({
          title: '提示',
          message: '确认该成员审核通过',
          confirmButtonText: '通过',
          cancelButtonText: '拒绝'
        })
        this.onAudit(audit, 2)
      } catch (error) {
        this.onAudit(audit, 3)
      }
    },

    async setManager (member) {
      try {
        await this.$dialog.confirm({
          title: '提示',
          message: member.userRole === 'member' ? '确认设置管理员' : '确认撤销管理员'
        })
        const params = {
          userId: member.userId,
          orgId: member.orgId
        }
        if (member.userRole === 'member') {
          await setManager(params)
        } else {
          await revokeManager(params)
        }
        this.refresh()
      } catch (err) {
        // on cancel
      }
    },

    async onDelete (event, member) {
      try {
        await this.$dialog.confirm({
          title: '提示',
          message: '确认删除组织成员'
        })
        await removeUser({
          orgId: member.orgId,
          userId: member.userId
        })
        this.refresh()
      } catch (error) {
        // on cancel
      }
    },

    async onAudit (audit, status) {
      this.orgUserList = []
      this.orgApplyList = []
      await applyAudit({
        id: audit.id,
        status
      })
      this.refresh()
    },

    refresh () {
      this.loading = true
      this.member = {
        total: 0,
        page: 1,
        list: []
      },
      this.audit = {
        total: 0,
        page: 1,
        list: []
      }
      this.fetch()
    }
  }
}
</script>

<style scoped>
.del-container {
  background-color: #E61F1C;
  text-align: center;
  width: 65px;
  height: 44px
}

.del-container span {
  color: #ffffff;
  line-height: 44px;
  font-size: 14px
}
</style>

<style>
.mine-org-detail .dialog-container {
  padding: 0 16px;
  padding-top: 12px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 14px;
  color: #646566
}
</style>