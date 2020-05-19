<template>
  <div class="mine-require">
    <template v-if="!loading">
      <scroll-view v-if="requireList.length > 0" :scroll-y="true" @scrolltolower="onBottom" lower-threshold="178" style="height: 100vh">
        <div v-for="(require, index) in requireList" class="container" @click="detail(require)">
          <div :style="'background: url(' + require.cover +') no-repeat center/cover'" class="img">
            <div v-if="require.isDefaultCover === '2'" class="cover-container">
              <div class="ellipsis">{{ require.typeName }}</div>
              <div>需求对接</div>
            </div>
          </div>

          <div style="position: relative">
            <div class="title">
              {{ require.title }}
            </div>

            <div class="desc">
              <div class="scale">
                <span v-if="require.quantizationType === '1'">
                  进度: {{ require.scale }}%
                </span>
                <span v-else>
                  状态: {{ require.status }}
                </span>
              </div>

              <div class="date">
                <span style="margin-right: 8px">{{ require.createTime }}</span>
                发布
              </div>
            </div>
          </div>

          <van-icon v-if="require.status === '上架' || require.status === '下架-未对接'" name="edit" class="edit-icon" size="20" color="#666" />
          <van-icon @click.stop="onAssign(require)" name="friends-o" class="member-icon" size="20" color="#666" />

          <div class="edit">
            <van-button color="#F68725" size="mini" round @click.stop="showDialog(require, index)" >
              <div style="margin: 0 8px">
                需求状态编辑
              </div>
            </van-button>
          </div>
        </div>

        <div style="width: 100vw; height: 128px; background-color: #ffffff"></div>
      </scroll-view>

      <div v-else style="padding: 64px 0">
        <empty text="暂未发布需求" />
      </div>
    </template>

    <div class="bottom">
      <van-button @click="create" round color="#E61F1C">
        <div style="margin: 0 32px">
          发布需求
        </div>
      </van-button>
    </div>

    <van-dialog use-slot :show="showScale" show-cancel-button @close="showScale = false" @confirm="onConfirm" title="完成度">
      <div class="slider">
        <van-slider :value="currSelected.scale" @change="onScaleChange" use-button-slot active-color="#E61F1C">
          <div slot="button" class="button">
            {{ currSelected.scale }}%
          </div>
        </van-slider>
      </div>
    </van-dialog>

    <van-dialog id="van-dialog" />

    <van-popup :show="showStatus" position="bottom" @close="showStatus = false">
      <van-picker class="status-picker" :columns="columns" show-toolbar @confirm="onSelect" @change="onStatusChange" @cancel="showStatus = false"/>
    </van-popup>

    <van-popup :show="showAssign" position="bottom" @close="showAssign = false">
      <van-picker :columns="assignList" show-toolbar @confirm="onConfirmAssign" @cancel="showAssign = false"/>
    </van-popup>
  </div>
</template>

<script>
import { formatDate } from '@/utils/index'
import { requirementList, requirementUpdate, detailList, assignRequirement } from '@/api/require'
import { userOrgList, orgUserList } from '@/api/org'
import Empty from '@/components/Empty'

export default {
  components: {
    Empty
  },

  data () {
    return {
      requireList: [],
      typeList: [],
      assignList: [],
      currSelected: {},
      currRequirement: {},
      index: 0,
      page: 1,
      limit: 10,
      loading: true,
      showScale: false,
      showStatus: false,
      showAssign: false,
      columns: [
        {
          values: [
            { text: '上架', value: 'up' },
            { text: '下架', value: 'low'}
          ]
        },
        { values: [] }
      ],
      statusList: [
        { text: '成功对接', value: '1' },
        { text: '需求无效', value: '2' },
        { text: '发布到期', value: '3' }
      ]
    }
  },

  async mounted () {
    Object.assign(this, this.$options.data())
    await this.getTypeList()
    this.fetch()
  },

  methods: {
    async fetch () {
      this.getRequirementList()
    },

    async getTypeList () {
      return new Promise(async resolve => {
        const res = await detailList({
          page: 1,
          limit: 999
        })
        this.typeList = res.data.rows
        resolve()
      })
    },

    async getRequirementList () {
      const res = await requirementList({
        limit: this.limit,
        page: this.page,
        userId: this.$store.getters.id
      })
      this.total = res.data.total
      res.data.rows.forEach(element => {
        this.requireList.push(element)
      })
      this.formatRequirementList()
      this.loading = false
    },

    formatRequirementList () {
      this.requireList.forEach(element => {
        element.createTime = formatDate(element.createTime)
      })
    },

    onBottom () {
      this.page++
      if (this.requireList.length < this.total) {
        this.fetch()
      }
    },

    showDialog (value, index) {
      this.currSelected = value
      this.index = index
      switch (value.quantizationType) {
        case '1':
          this.showScale = true
          break
        case '2':
          this.showStatus = true
          break
        default:
          this.showStatus = true
          break
      }
    },

    onScaleChange (event) {
      this.currSelected.scale = Number(event.mp.detail)
    },

    onStatusChange (event) {
      let columnValues = []
      const { picker, value, index } = event.mp.detail
      switch (value[0].value) {
        case 'up':
          columnValues = []
          break
        case 'low':
          columnValues = this.statusList
          break
      }
      picker.setColumnValues(1, columnValues)
      this.columns[1].values = columnValues
    },

    onSelect (event) {
      const value = event.mp.detail.value
      this.currSelected.status = value[0].text
      this.currSelected.lowReason = value[1] ? value[1].value : ''
      this.onConfirm()
    },

    async onConfirm () {
      try {
        const res = await requirementUpdate({
          id: this.currSelected.id,
          scale: this.currSelected.scale,
          status: this.currSelected.status,
          lowReason: this.currSelected.lowReason
        })
        this.requireList[this.index].status = res.data.status
        this.showScale = false
        this.showStatus = false
      } catch (error) {
        // on error
      }
    },

    onTabChange (event) {
      this.active = event.mp.detail.name
      this.initList()
      this.fetch()
    },

    initList () {
      this.loading = true
      this.page = 1
      this.total = 0
      this.requireList = []
    },

    async create () {
      const res = await userOrgList({
        page: 1,
        limit: 1,
        userId: this.$store.getters.id,
        status: 2
      })
      const total = res.data.total
      if (total > 0) {
        this.$navigate.to("/pages/require/create/index")
      } else {
        this.$dialog.confirm({
          title: '提示',
          message: '请先创建或加入组织'
        }).then(() => {
          this.$navigate.to("/pages/org/index")
        })
      }
    },

    requirementDetail (event) {
      this.$navigate.to('/pages/require/detail/index', {
        id: event.requirementId
      })
    },

    async onAssign (require) {
      this.assignList = []
      this.currRequirement = require
      const res = await orgUserList({
        orgId: require.orgId,
        page: 1,
        limit: 999
      })
      this.formatAssignList(res.data.rows)
      this.showAssign = true
    },

    formatAssignList (arr) {
      arr.forEach(element => {
        this.assignList.push({
          value: element.userId,
          text: element.userName,
          disabled: element.userId === this.$store.getters.id
        })
      })
    },

    onConfirmAssign (event) {
      this.showAssign = false
      this.$dialog.confirm({
        title: '提示',
        message: '确认分配需求成员'
      }).then(async () => {
        if (!event.mp.detail.value.disabled) {
          this.saveAssign(event)
        }
        this.showAssign = false
      })
    },

    async saveAssign (event) {
      await assignRequirement({
        ids: this.currRequirement.id,
        orgId: this.currRequirement.orgId,
        userId: event.mp.detail.value.value
      })
      this.initRequirementList()
      this.fetch()
    },

    initRequirementList () {
      this.page = 1
      this.requireList = []
    },

    detail (require) {
      if (require.status.indexOf('已对接') > -1) {
        this.$navigate.to('/pages/mine/require/detail/index', {
          id: require.id
        })
      } else {
        this.$navigate.to('/pages/mine/require/edit/index', {
          id: require.id
        })
      }
    }
  }
}
</script>

<style>
.mine-require {
  background-color: #ffffff
}

.mine-require .bottom {
  position: fixed;
  bottom: 32px;
  text-align: center;
  width: 100vw;
}

.mine-require .bottom .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.mine-require .container {
  width: 100vw;
  padding: 10px 16px;
  display: flex;
  border-bottom: 1px solid #ebedf0;
  position: relative;
}

.mine-require .container .title {
  font-size: 14px;
  color: #630a24;
  font-weight: 500
}

.mine-require .container .scale {
  font-size: 12px;
  color: #F68725;
}

.mine-require .container .desc {
  position: absolute;
  bottom: 0
}

.mine-require .container .date {
  font-size: 12px;
  color: #999999;
  width: 30vw
}

.mine-require .container .edit {
  position: absolute;
  right: 48px;
  bottom: 10px
}

.mine-require .container .edit-icon {
  position: absolute;
  right: 78px;
  top: 10px
}

.mine-require .container .member-icon {
  position: absolute;
  right: 48px;
  top: 10px
}

.mine-require .slider {
  margin-bottom: 24px;
  margin-top: 22px;
  text-align: center;
  width: 90%;
  margin-left: 5%
}

.mine-require .slider .button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: relative;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #999999
}

.mine-require .table-head {
  text-align: center;
  font-size: 14px;
  color: #333333;
  background-color: #FAFAFA;
  padding: 15px 24px
}

.mine-require .table-container {
  text-align: center;
  font-size: 12px;
  color: #333333;
  padding: 15px 24px
}

.mine-require .img {
  width: 72px;
  height: 72px;
  background-size: 72px 72px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-right: 16px;
  border-radius: 10px;
}

.mine-require .img .cover-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 14px;
  width: 72px;
  text-align: center
}
</style>