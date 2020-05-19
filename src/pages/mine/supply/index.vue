<template>
  <div>
    <template v-if="!loading">
      <scroll-view v-if="list.length > 0" :scroll-y="true" @scrolltolower="onBottom" lower-threshold="178" style="height: 100vh">
        <van-row>
          <van-col span="8">
            <div class="table-head">需求</div>
          </van-col>
          <van-col span="8">
            <div class="table-head">联系方式</div>
          </van-col>
          <van-col span="8">
            <div class="table-head">对接时间</div>
          </van-col>
        </van-row>

        <van-row>
          <div v-for="item of list" :key="item.id" @click="toDetail(item)">
            <van-col span="8">
              <div class="table-container ellipsis">{{ item.title }}</div>
            </van-col>
            <van-col span="8">
              <div class="table-container ellipsis">{{ item.contactInfo || '--' }}</div>
            </van-col>
            <van-col span="8">
              <div class="table-container ellipsis">{{ item.createTime }}</div>
            </van-col>
          </div>
        </van-row>

        <div style="width: 100vw; height: 128px; background-color: #ffffff"></div>
      </scroll-view>

      <div v-else style="padding: 64px 0">
        <empty src="empty-supply" />
      </div>
    </template>
  </div>
</template>

<script>
import { userSupplyList } from '@/api/require'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },

  data () {
    return {
      list:[],
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
    this.fetch()
  },

  methods: {
    onBottom () {
      this.page++
      if (this.list.length < this.total) {
        this.fetch()
      }
    },

    async fetch () {
      const res = await userSupplyList({
        userId: this.$store.getters.id,
        page: this.page,
        limit: this.limit
      })
      this.total = res.data.total
      res.data.rows.forEach(element => {
        element.createTime = element.createTime.slice(0, 10)
        this.list.push(element)
      })
      this.loading = false
    },

    toDetail (value) {
      this.$navigate.to('/pages/require/detail/index', {
        id: value.requirementId
      })
    }
  }
}
</script>

<style scoped>
.table-head {
  text-align: center;
  font-size: 14px;
  color: #333333;
  background-color: #FAFAFA;
  padding: 15px 24px
}

.table-container {
  text-align: center;
  font-size: 12px;
  color: #333333;
  padding: 15px 24px
}
</style>

<style>
page {
  background-color: #ffffff
}
</style>