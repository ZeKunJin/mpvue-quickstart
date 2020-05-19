<template>
  <div>
    <template v-if="!loading">
      <scroll-view v-if="list.length > 0" class="scroll" :scroll-y="true" @scrolltolower="onBottom">
        <van-row>
          <van-col span="8">
            <div class="table-head">姓名</div>
          </van-col>
          <van-col span="8">
            <div class="table-head">联系方式</div>
          </van-col>
          <van-col span="8">
            <div class="table-head">创建日期</div>
          </van-col>
        </van-row>

        <van-row>
          <div v-for="item of list" :key="item.id">
            <van-col span="8">
              <div class="table-container ellipsis">{{ item.name }}</div>
            </van-col>
            <van-col span="8">
              <div class="table-container ellipsis" @click.stop="phoneCall(item.phone)">{{ item.phone }}</div>
            </van-col>
            <van-col span="8">
              <div class="table-container ellipsis">{{ item.createTime }}</div>
            </van-col>
          </div>
        </van-row>

        <div style="width: 100vw; height: 128px; background-color: #ffffff"></div>
      </scroll-view>

      <div v-else style="padding: 64px 0">
        <empty />
      </div>
    </template>
  </div>
</template>

<script>
import { formatDate } from "@/utils/index"
import { supplyList } from '@/api/require'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },

  data () {
    return {
      list: [],
      requirementId: '',
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    }
  },

  onLoad (option) {
    Object.assign(this, this.$options.data())
    this.requirementId = option.id
  },

  mounted () {
    this.fetch()
  },

  methods: {
    onBottom () {
      this.page++
      if (this.list.length < this.total) {
        this.loading = true
        this.fetch()
      }
    },

    async fetch () {
      try {
        const res = await supplyList({
          requirementId: this.requirementId,
          limit: this.limit,
          page: this.page
        })
        this.total = res.data.total
        res.data.rows.forEach(element => {
          element.createTime = formatDate(element.createTime).slice(0, 10)
          this.list.push(element)
        })
        this.loading = false
      } catch (error) {
        // on error
      }
    },

    phoneCall (value) {
      const rules = [
        { value: value, type: 'phone', required: true }
      ]
      this.$validate(rules).then(() => {
        wx.makePhoneCall({
          phoneNumber: value
        })
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