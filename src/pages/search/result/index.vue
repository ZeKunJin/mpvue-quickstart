<template>
    <div class="require">
        <van-tabs :active="active" :border="false" color="#E61F1C" @change="logActive($event)">
            <van-tab v-for="(stair, index) in stairs" :key="index" :name="stair.id" :title="stair.remark">

                <div class="sidebar">
                    <van-sidebar :active-key="activityKey" @change="onSidebarChange($event)">
                        <van-sidebar-item
                                v-for="(item, _index) in detailList"
                                :key="_index"
                                :title="item.label"/>
                    </van-sidebar>
                </div>

                <div class="container">
                    <ul v-if="requirementList.length!==0">
                        <li v-for="(itemss,____index) in requirementList" :key="____index" class="list_box"
                            @click.stop="goDetail(itemss.id)">
                            <div class="list_image_box">
                                <img :src="itemss.cover"/>
                                <div class="urgent_box" v-if="itemss.level === 2">
                                    急缺
                                </div>
                            </div>
                            <div class="list_right_box">
                                <div class="first_box">
                                    <p style="word-wrap:break-word;">{{itemss.title}}</p>
                                    <van-button
                                            icon="weapp-nav"
                                            round
                                            size="mini"
                                            color="#F7F8FA"
                                            custom-style="color:#999999"
                                            @click.stop="feng"
                                            open-type="share"

                                    >分享
                                    </van-button>
                                </div>
                                <div class="last_box">
                                    <span>{{itemss.createTime}}发布</span>
                                    <van-button
                                            round size="small" color="#F68725"
                                            custom-style="font-size:12px;height:44rpx"
                                            @click.stop="goSupply(itemss.id)"
                                    >我要对接
                                    </van-button>
                                </div>
                            </div>
                        </li>
                        <p style="text-align: center" v-show="!more">没有更多数据</p>
                    </ul>
                    <div class="empty_box" v-else>
                        <img src="/static/images/empty.png">
                        暂无数据
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import {typeList, detailList, requirementList} from '@/api/require'
import {formatDate} from '@/utils/index'

export default {
  data () {
    return {
      active: 0,
      activityKey: 0,
      page: 1,
      tabs: [],
      stairs: '',
      detailList: '',
      requirementList: '',
      formatDate,
      more: true,
      markerId: '',
      orgName: ''
    }
  },

  mounted () {

  },
  methods: {
    feng () {
    },
    async getRequirementList (val, title, markerId, orgName) {
      try {
        let res = await requirementList({
          demandType: val === 0 ? '' : val,
          orgId: markerId === '' ? '' : markerId,
          limit: 999,
          page: 1,
          title: title === '' ? '' : title,
          orgName: orgName === '' ? '' : orgName
        })
        this.requirementList = res.data.rows
        this.requirementList.forEach((i) => {
          i.createTime = this.formatDate(i['createTime'])
        })
      } catch (e) {

      }
    },
    async getDetailList (val) {
      try {
        let res = await detailList({
          dictId: val === 0 ? '' : val,
          limit: 999,
          page: 1
        })
        this.detailList = res.data.rows
        this.getRequirementList(this.detailList[this.activityKey].value, '', this.markerId, this.orgName)
      } catch (e) {

      }
    },
    logActive (event) {
      this.active = event.mp.detail.name
      this.getDetailList(this.active)
    },
    async getTypeList () {
      try {
        const res = await typeList({
          limit: 6,
          page: 1
        })
        this.stairs = res.data.rows
        this.stairs.unshift({
          id: 0,
          name: 'all_service',
          remark: '全部'
        })
        this.getDetailList(this.active)
      } catch (error) {
        // on error
      }
    },
    goDetail (val) {
      this.$navigate.to('/pages/require/detail/index?id=' + val)
    },
    goSupply (val) {
      // this.getTypeList()
      this.$navigate.to('/pages/require/supply/index', {
        id: val
      })
    },
    onSidebarChange (event) {
      this.activityKey = event.mp.detail
      this.getRequirementList(this.detailList[this.activityKey].value, '', this.markerId, this.orgName)
      // 调用传这个
      // console.log(this.detailList[this.activityKey].value)
    }
  },
  onLoad (option) {
    if (option.markerId) {
      this.active = this.activityKey = 0
      this.markerId = option.markerId
      this.getTypeList()
    }
    if (option.orgName) {
      this.active = this.activityKey = 0
      this.orgName = option.orgName
      this.getTypeList()
    }
  },
  onShareAppMessage (res) {
    if (res.from !== 'button') return false
  }
}
</script>

<style lang="scss" scoped>
    ::-webkit-scrollbar {
        display: none
    }

    .list_box {
        width: 100%;
        height: 92px;
        padding: 10px 7px;
        box-sizing: border-box;
        display: flex;

        .list_right_box {

            .last_box {
                margin-top: 16px;
                font-size: 12px;
                color: #999999;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .first_box {
                width: 100%;
                display: flex;

                p {
                    width: 140px;
                    font-size: 14px;
                    line-height: 18px;
                    height: 36px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    font-weight: 500;
                    color: rgba(10, 36, 99, 1);
                }
            }
        }

        .list_image_box {
            width: 72px;
            height: 72px;
            margin-right: 10px;
            position: relative;

            .urgent_box {
                position: absolute;
                width: 32px;
                height: 18px;
                background: rgba(20, 111, 209, 1);
                border-radius: 0px 4px 0px 4px;
                left: 0;
                bottom: 0;
                font-size: 10px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 18px;
                text-align: center;
            }

            img {
                width: 72px;
                height: 72px;
            }
        }
    }

    .sidebar {
        float: left;
        width: 85px;
        height: calc(100vh - 50px);
        overflow: auto;

    }

    .sidebar .van-sidebar-item--selected {
        border-color: #E61F1C;
    }

    .require {
        height: 100vh;
        overflow: hidden;

        .container {
            float: left;
            width: calc(100% - 85px);
            height: calc(100vh - 100px);
            overflow: auto;

            .empty_box {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                margin-top: 56px;

                img {
                    width: 120px;
                    height: 92px;
                }
            }
        }
    }
</style>
