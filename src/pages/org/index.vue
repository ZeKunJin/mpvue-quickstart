<template>
    <div class="org">
        <van-search shape="round" :value="search" placeholder="请输入搜索关键词" @search="onSearch" @change="onSearchChange">
            <div slot="label" class="area-text" @click="selectArea">
                <div style="width: 48px" class="ellipsis">{{ areaText }}</div>
                <van-icon name="arrow-down" class="arrow-icon"/>
            </div>
        </van-search>

        <template v-if="!loading">
            <div v-if="orgList.length > 0" class="container">
                <van-cell-group :border="false">
                    <van-cell v-for="org in orgList" :key="org.id">
                        <div slot="title">
                            {{ org.name }}
                            <span style="color: #999; margin-left: 8px">({{ orgType[org.type] }})</span>
                        </div>

                        <van-button @click="apply(org)" round size="mini" color="#EE4E8C1A">
                            <span style="color: #E61F1C">加入</span>
                        </van-button>
                    </van-cell>
                </van-cell-group>
            </div>

            <div v-else style="margin: 64px 0">
                <empty />
            </div>
        </template>

        <div class="bottom">
            <van-button @click="createOrg" round color="#E61F1C">
                <div style="padding: 0 32px; display: table-cell">
                    <img src="../../../static/icon/edit.png" class="edit-icon"/>
                    创建主体
                </div>
            </van-button>
        </div>

        <van-popup :show="showArea" position="bottom" @close="showArea = false">
            <van-area :area-list="areaList" @confirm="confirmArea" @cancel="showArea = false"/>
        </van-popup>
    </div>
</template>

<script>
import area from '@/utils/area'
import Empty from '@/components/Empty'
import {list, apply} from '@/api/org'

export default {
  components: {
    Empty
  },

  data () {
    return {
      orgList: [],
      search: '',
      area: '',
      areaText: '全部',
      showArea: false,
      areaList: {
        province_list: {
          0: '全部',
          ...area.province_list
        },
        city_list: area.city_list,
        county_list: area.county_list
      },
      orgType: {
        sqzz: '社会组织',
        sqshzz: '社区社会组织',
        sqjwh: '社区居委会',
        sqjm: '社区居民'
      },
      loading: true
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
  },

  methods: {
    async fetch () {
      const res = await list({
        name: this.search,
        area: this.area
      })
      this.orgList = res.data
      this.loading = false
    },

    onSearchChange (event) {
      this.search = event.mp.detail
    },

    onSearch () {
      this.fetch()
    },

    selectArea () {
      this.showArea = !this.showArea
    },

    confirmArea (event) {
      const value = event.mp.detail.values
      if (value[0].code !== '0') {
        this.areaText = value[value.length - 1].name
        this.area = value[value.length - 1].code
      } else {
        this.areaText = value[0].name
        this.area = ''
      }
      this.fetch()
      this.showArea = false
    },

    async apply (org) {
      try {
        await apply({
          orgId: org.id,
          userId: this.$store.getters.id
        })
        this.$navigate.to('/pages/org/apply/index')
      } catch (error) {
        // on error
      }
    },

    createOrg () {
      this.$navigate.to('/pages/org/create/index')
    }
  }
}
</script>

<style>
    .area-text {
        line-height: 34px;
        font-size: 12px;
        margin: 0 8px;
        position: relative;
        width: 64px
    }

    .arrow-icon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
    }

    .org .bottom {
        position: fixed;
        bottom: 32px;
        text-align: center;
        width: 100vw;
    }

    .org .bottom .van-button {
        box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
    }

    .edit-icon {
        width: 18px;
        height: 18px;
        vertical-align: middle
    }

    .org .container .van-button {
        border: 1px solid E61F1C
    }
</style>
