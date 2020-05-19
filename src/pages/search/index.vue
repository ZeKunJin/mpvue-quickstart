<template>
    <div>
        <van-search :value="search" placeholder="请输入组织名称搜索对应需求" @search="onSearch" @change="onInput" shape="round" />

        <van-cell-group>
            <van-cell
                    v-for="result in list"
                    :key="result.id"
                    :border="false"
                    :title="result.name"
                    @click="gooo(result.name)"
            />
        </van-cell-group>
    </div>
</template>

<script>
import {list} from '@/api/org'

export default {
  data () {
    return {
      search: '',
      list: []
    }
  },

  watch: {
    search: function (newVal) {
      this.fetch()
    }
  },

  methods: {
    async fetch () {
      const res = await list({
        name: this.search
      })
      this.list = res.data
    },

    onInput (event) {
      this.search = event.mp.detail
      this.fetch()
    },

    gooo (val) {
      this.$navigate.to('/pages/search/result/index', {
        orgName: val
      })
    },

    onSearch (event) {
      this.fetch()
    }
  }
}
</script>
