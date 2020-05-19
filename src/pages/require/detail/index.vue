<template>
  <div>
    <div class="top_box">
      <template v-for="(item, index) in infoList">
        <p v-if="detailVal[item.name]" :key="index" class="kind_box">
          {{ item.title }}{{ detailVal[item.name] }}
        </p>
      </template>
      <van-divider custom-style="margin:12px 0 0 0" />
      <div class="address_box">
        <span>需求方: {{ detailVal.requirementOrgName || '' }}</span>
        <span>浏览量: {{ detailVal.browseTimes || 0 }}</span>
      </div>

      <div class="address_box">
        <span>发布方: {{detailVal.orgName}}</span>
        <span>{{detailVal.createTime}}发布</span>
      </div>
    </div>

    <div class="bottom_box">
      <div class="main_box">
        <p class="produce_box">需求内容</p>
        <scroll-view class="scrollView" :style="!loadMore ? 'max-height: 256px' : ''">
          <wx-parse :content="detailVal.description" noData="" />
        </scroll-view>
      </div>

      <div v-if="!loadMore" class="load-more" @click="loadMore = true">
        <div>加载更多</div>
        <div>
          <van-icon name="arrow-down" />
        </div>
      </div>

      <div style="width: 100vw; height: 10px; background-color:  #F7F8FA"/>

      <div class="comment-box">
        <div>
          <p class="title">
            互动留言
          </p>
        </div>
        <template v-if="!loading">
          <template v-if="comments.length > 0">
            <template v-for="(comment, index) in comments">
              <div :key="comment.id" class="comment-container">
                <van-image round width="35px" height="35px" style="float: left" :src="comment.avatar" />
                <div style="width: calc(100vw - 87px); margin-left: 45px">
                  <div class="name">{{ comment.userName }}</div>
                  <div class="content" @click="repay(comment, 'comment')">
                    {{ comment.content }}

                    <div style="margin-top: 10px">
                      <img v-for="(img, _index) in comment.contentFiles" :key="_index" :src="img.url" class="content-img" />
                    </div>
                  </div>
                  <div class="desc-block">
                    {{ comment.createTime }}

                    <div class="like-container" @click="like(comment, index)">
                      <span class="like-text" v-if="comment.like">{{ comment.zanNum + 1 }}</span>
                      <van-icon
                        size="20"
                        :name="comment.like ? 'good-job' : 'good-job-o'"
                        :color="comment.like ? '#E61F1C' : '#999999'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div v-for="(item, __index) in comment.repayList" :key="item.id" class="repay-container">
                <van-image round width="35px" height="35px" style="float: left" :src="item.fromAvatar" />
                <div style="width: calc(100vw - 122px); margin-left: 45px">
                  <div class="name">
                    {{ item.fromUserName }} 回复 {{ item.toUserName }}
                  </div>
                  <div class="content" @click="repay(item, 'repay')">
                    {{ item.content }}

                    <div style="margin-top: 10px">
                      <img v-for="(img, ___index) in item.contentFiles" :key="___index" :src="img.url" class="content-img" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>

          <div v-else style="margin: 64px 0" @click="toAddComment">
            <empty text="立即留言" />
          </div>
        </template>
      </div>
      
      <div class="footer_box">
        <div class="one_btn" @click="goBack">更多需求</div>
        <button
          open-type="share"
          class="two_btn"
          :data-a="detailVal"
          style="list-style: none;background: #fff;"
        >分享</button>
        <div class="one_btn" @click="makePoster">生成海报</div>
        <div class="three_btn">
          <van-button
            color="#E61F1C"
            custom-style="width:100%;height:100%;"
            @click="goSupply(detailVal.id)"
          >我要对接</van-button>
        </div>
      </div>
    </div>

    <div style="width: 100vw; height: 50px; background-color: #F7F8FA" />

    <div class="comment-tools">
      <van-icon name="comment" @click="toAddComment" color="#E61F1C" size="24"/>
    </div>

    <van-overlay :show="showPoster" @click="showPoster = false">
      <canvas
        canvas-id="canvas"
        style="width: 335px; height: 504px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"
        @longtap="saveImg"
      />
    </van-overlay>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse';
import { requirementDetail } from "@/api/require";
import { commentList, commentRepay, commentLike } from '@/api/comment'
import { formatDate } from "@/utils/index";
import { qrcode } from '@/api/common';
import Empty from '@/components/Empty'

export default {
  components: {
    wxParse,
    Empty
  },

  data() {
    return {
      detailVal: {},
      qrInfo: {},
      comments: [],
      requirementId: '',
      showPoster: false,
      loadMore: false,
      loading: true,
      infoList: [
        { name: 'title', title: '' },
        { name: 'demandTypeName', title: '类型: ' },
        { name: 'demandTarget', title: '需求目标: ' },
        { name: 'demandPeople', title: '需求人数: ' },
        { name: 'personResources', title: '人员资质或条件: ' },
        { name: 'adviceResources', title: '可提供资源: ' },
        { name: 'presentDescription', title: '现状描述: ' }
      ]
    };
  },

  onLoad(option) {
    Object.assign(this, this.$options.data())
    this.getRequirementId(option)
    this.showDetail(this.requirementId)
  },

  onShow() {
    this.getCommentList(this.requirementId)
  },

  methods: {
    getRequirementId (option) {
      if (option.id) {
        this.requirementId = option.id
      } else {
        const url = decodeURIComponent(option.q)
        const id = url.split('?')[1]
        this.requirementId = id.split('=')[1]
      }
    },

    goBack() {
      this.$navigate.to("/pages/require/index");
    },

    async getCommentList (id) {
      const res = await commentList({
        page: 1,
        limit: 10,
        requirementId: id
      })
      this.formatComments(res.data.rows)
      this.loading = false
    },

    formatComments (arr) {
      arr.forEach(element => {
        element.createTime = formatDate(element.createTime)
      })
      this.comments = arr
    },

    async showDetail(val) {
      try {
        const res = await requirementDetail({
          requirementId: val
        });
        this.detailVal = res.data;
        this.detailVal.createTime = formatDate(this.detailVal.createTime);
      } catch (e) {
        // on error
      }
    },

    async getQrcode () {
      return new Promise(async resolve => {
        const res = await qrcode({
          url: 'https://api.fy.zhengdaoyixing.com/miniapp/requirement?id=' + this.requirementId
        })
        resolve(res.data)
      })
    },

    async makePoster () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      try {
        const [imgInfo, bgInfo, qrInfo] = await Promise.all([
          this.downloadCover(),
          this.downloadBackground(),
          this.downloadQrcode()
        ])
        this.showPoster = true
        this.createCavans(imgInfo, bgInfo, qrInfo)
        wx.hideLoading()
      } catch (err) {
        wx.hideLoading()
      }
    },

    downloadCover () {
      const vm = this
      return new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: this.detailVal.cover,
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject(err)
          }
        })
      })
    },

    async downloadQrcode () {
      const vm = this
      const url = await this.getQrcode()
      return new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: url,
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject(err)
          }
        })
      })
    },

    downloadBackground () {
      const vm = this
      return new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: 'https://npi-website.oss-cn-shanghai.aliyuncs.com/fangyi/template.png',
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject(err)
          }
        })
      })
    },

    createCavans (imgInfo, bgInfo, qrInfo) {
      const data = this.detailVal

      const ctx = wx.createCanvasContext('canvas')

      ctx.drawImage(bgInfo.path, 0, 0, 335, 504)

      ctx.drawImage(imgInfo.path, 116.5, 117, 102, 102)

      ctx.drawImage(qrInfo.path, 54, 362, 86, 86)

      ctx.setFontSize(14)
      ctx.setFillStyle('#333')
      ctx.fillText(data.title, 44, 247, 247)

      ctx.setFontSize(12)
      ctx.setFillStyle('#333')
      ctx.fillText(`类型: ${data.demandTypeName}`, 44, 273, 247)

      ctx.setFontSize(12)
      ctx.setFillStyle('#999')
      ctx.fillText(`${formatDate(data.createTime)}发布`, 44, 292, 247)

      ctx.setFontSize(12)
      ctx.setFillStyle('#333')
      ctx.fillText(`需求方: ${data.requirementOrgName}`, 44, 311, 247)

      ctx.stroke()
      ctx.draw()
    },

    async saveImg () {
      try {
        const res = await this.canvasToImg()
        this.saveImgToAlbum(res.tempFilePath)
      } catch (err) {
        // on error
      }
    },

    canvasToImg () {
      return new Promise((resolve, reject) => {
        wx.canvasToTempFilePath({
          canvasId: 'canvas',
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject()
          }
        })
      })
    },

    saveImgToAlbum (path) {
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success (res) {
          wx.showToast({
            title: '保存成功',
            icon: 'none'
          })
        }
      })
    },

    async like (comment, index) {
      const res = await commentLike({
        requirementId: this.detailVal.id,
        type: 1,
        typeId: comment.id
      })
      const backup = this.comments
      this.comments = []
      backup[index].like = res.data.zanFlag === 'add' ? true : false
      this.comments = backup
    },

    goSupply(val) {
      this.$navigate.to("/pages/require/supply/index", {
        id: val
      });
    },

    toAddComment () {
      this.$navigate.to("/pages/require/comment/create/index", {
        requirementId: this.detailVal.id
      });
    },

    repay (comment, type) {
      const qurey = {
        requirementId: this.detailVal.id,
        commentId: type === 'comment' ? comment.id : comment.commentId,
        repayId: comment.id,
        repayType: type
      }
      this.$navigate.to("/pages/require/comment/create/index", qurey);
    }
  },

  onShareAppMessage(event) {
    if (event.from !== "button") return false;
    return {
      title: event.target.dataset.a.title,
      path: "/pages/require/detail/index?id=" + event.target.dataset.a.id,
      imageUrl: event.target.dataset.a.cover
    };
  },

  phoneCall () {
    const rules = [
      { value: detailVal.contactInfo, type: 'phone', required: true }
    ]
    this.$validate(rules).then(() => {
      wx.makePhoneCall({
        phoneNumber: detailVal.contactInfo
      })
    })
  }
};
</script>

<style lang="scss">
.bottom_box {
  .load-more {
    text-align: center;
    font-size: 14px;
    color: #333333;
  }

  .main_box {
    padding: 10px 16px;

    .image_box {
      width: 72px;
      height: 72px;
    }
  }

  .footer_box {
    border-top: 1px solid #f1f1f1;

    .one_btn,
    .two_btn {
      width: 80px;
      line-height: 50px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);

      &:after {
        border: none;
      }
    }

    .three_btn {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    text-align: center;
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
  }

  .example_box {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-top: 4px;
  }

  .produce_box {
    font-size: 14px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  box-sizing: border-box;
  background: #fff;
  margin-top: 10px;
}

.comment-box {
  padding: 10px 16px;

  .title {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
  }

  .repay-container {
    margin-top: 10px;
    margin-left: 35px;
    
    .name {
      font-size: 14px;
      color: #333333;
      font-weight: 500;
    }

    .content {
      font-size: 14px;
      color: #494949;
      margin-top: 3px;
    }

    .content-img {
      width: 54px;
      height: 54px;
      margin-right: 10px;
      border-radius: 6px
    }
  }

  .comment-container {
    padding-top: 10px;

    .name {
      font-size: 14px;
      color: #333333;
      font-weight: 500;
    }

    .content {
      font-size: 14px;
      color: #494949;
      margin-top: 3px;
    }

    .desc-block {
      margin-top: 3px;
      font-size: 12px;
      color: #999999;

      .like-container {
        float: right;
        display: flex;
        align-items: center
      }

      .like-text {
        margin-right: 4px;
        color: #E61F1C;
        font-size: 14px;
      }
    }

    .content-img {
      width: 54px;
      height: 54px;
      margin-right: 10px;
      border-radius: 6px
    }
  }
}

.top_box {
  .address_box {
    :nth-child(1) {
      font-size: 12px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }

    :nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .num_box {
    margin: 10px 0px 0px 0px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(246, 135, 37, 1);

    > div {
      width: 150px;
    }
  }

  .kind_box {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin: 6px 0;
  }

  .title_box {
    font-size: 14px;
    font-weight: 500;
    color: rgba(10, 36, 99, 1);
  }

  background: #fff;
  box-sizing: border-box;
  padding: 15px;
}

.comment-tools {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: fixed;
  right: 16px;
  bottom: 90px;

  .van-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
}
</style>
