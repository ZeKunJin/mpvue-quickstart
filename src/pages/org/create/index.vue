<template>
  <div class="org-create">
    <div style="margin-bottom: 128px">
      <van-cell-group :border="false">
        <van-field
          required
          readonly
          disabled
          :value="orgTypeText"
          @click="showType = true"
          input-align="right"
          :is-link="orgInfo.type ? false: true"
        >
          <div slot="label" class="org-type">
            组织类型
            <van-icon name="warning-o" @click.stop="showTypeDesc = true" style="margin-left: 4px" />
          </div>
        </van-field>

        <van-field label="联系人" required :value="orgInfo.contactPerson" placeholder="请输入联系人" input-align="right" @change="onInputChange($event, 'contactPerson')" />
        <van-field label="联系方式" required :value="orgInfo.contactInfo" placeholder="请输入联系方式" input-align="right" @change="onInputChange($event, 'contactInfo')" />

        <van-field
          label="所属区域"
          required
          disabled
          readonly
          input-align="right"
          :value="orgAreaText"
          @click="showArea = true"
          :is-link="orgInfo.area ? false: true"
        />

        <template v-if="orgInfo.type">
          <template v-for="(item, index) in orgInput[orgInfo.type]">
            <van-field
              v-if="item.type === 'text'"
              :key="index"
              :label="item.label"
              :value="orgInfo[item.name]"
              :placeholder="item.placeholder || '请输入' + item.label"
              input-align="right"
              required
              @change="onInputChange($event, item.name)"
            />

            <template v-if="item.type === 'file'">
              <van-field
                :label="item.label"
                disabled
                readonly
                :required="item.required"
                input-align="right"
                title-width="256px"
                :border="false"
              />

              <div style="padding: 10px 16px; padding-top: 0; background-color: #ffffff">
                <uploader
                    :files="orgInfo[item.name]"
                    :value="item.name"
                    :max="3"
                    @afterRead="afterRead"
                    @delete="afterDelete"
                  />
              </div>
            </template>
          </template>
        </template>
      </van-cell-group>
    </div>

    <div class="bottom">
      <van-row gutter="20">
        <van-col span="12" style="text-align: right" class="cancel-button">
          <van-button @click="cancel" round>
            <div style="width: 128px">取消</div>
          </van-button>
        </van-col>
        <van-col span="12" style="text-align: left" class="next-button">
          <van-button @click="create" round color="#E61F1C">
            <div style="width: 128px">下一步</div>
          </van-button>
        </van-col>
      </van-row>
    </div>

    <van-popup :show="showType" position="bottom" @close="showType = false">
      <van-picker :columns="orgTypeConstants" show-toolbar @confirm="confirmType" @cancel="showType = false"/>
    </van-popup>

    <van-popup :show="showArea" position="bottom" @close="showArea = false">
      <van-area :area-list="areaList" @confirm="confirmArea" @cancel="showArea = false"/>
    </van-popup>

    <van-dialog use-slot :show="showTypeDesc" @confirm="showTypeDesc = false">
      <div class="type-desc">
        社区居委会：<br />
        备注定义：社区居民委员会是居民自我管理、自我教育、自我服务的基层群众性自治组织。<br />
        注册信息：<br />
        *社区（居委）名称：/*社区（居委）地址：/*社区（居委）联系人：<br />
        /*社区（居委）联系方式：<br />
        社会组织：<br />
        备注定义：社会组织是指相对于政党、政府等传统组织形态之外的各类民进性的社会组织，主要包括社会团体、基金会、民办非企业单位、部分中介组织以及社区活动团体。<br />
        注册信息：<br />
        *组织名称：/*注册地址：/*登记证书：/*组织联系人：/*组织联系方式：<br />
        社区社会组织：<br />
        备注定义：是指由社区组织或个人在社区（镇、街道）范围内单独或联合举办的、在社区范围内开展活动的、满足社区居民不同需求的民间自发组织。<br />
        注册信息：<br />
        *组织名称：/*所属社区：/*备案证或者负责人身份证号：/组织联系人：<br />
        /组织联系方式：<br />
        社区居民：<br />
        备注定义：具有本社区房产的自然人业主或者居住在本社区的自然人。<br />
        *姓名：/*性别：/*身份证号：/*联系方式：
      </div>
    </van-dialog>
  </div>
</template>

<script>
import area from '@/utils/area'
import { create } from '@/api/org'
import { orgTypeConstants } from '@/utils/constants/org'
import Uploader from '@/components/Uploader'

export default {
  components: {
    Uploader
  },

  data () {
    return {
      orgInfo: {
        name: '',
        contactPerson: '',
        contactInfo: '',
        sqzzFiles: [],
        sqshzzFiles: [],
        sqjwhFiles: [],
        sqjmFiles: [],
        qyFiles: []
      },
      orgTypeText: '请选择',
      showType: false,
      orgTypeConstants,
      orgAreaText: '请选择',
      showArea: false,
      areaList: area,
      orgInput: {
        sqzz: [
          { label: '组织名称', name: 'name', type: 'text', required: true, placeholder: '组织名称与登记证书一致' },
          { label: '登记证书', name: 'sqzzFiles', type: 'file', required: true }
        ],
        sqshzz: [
          { label: '组织名称', name: 'name', type: 'text', required: true },
          { label: '备案证/负责人身份证', name: 'sqshzzFiles', type: 'file', required: true }
        ],
        sqjwh: [
          { label: '组织名称', name: 'name', type: 'text', required: true },
          { label: '统一社会信用代码证书', name: 'sqjwhFiles', type: 'file', required: false }
        ],
        sqjm: [
          { label: '身份证/房产证/居住证', name: 'sqjmFiles', type: 'file', required: true }
        ],
        qy: [
          { label: '企业名称', name: 'name', type: 'text', required: true },
          { label: '营业执照', name: 'qyFiles', type: 'file', required: true }
        ]
      },
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      },
      markers: [],
      showTypeDesc: false
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
  },

  methods: {
    onTap (event) {
      const data = event.mp.detail
      this.orgInfo.dimension = data.latitude
      this.orgInfo.longitude = data.longitude
      this.markers = [{
        iconPath: '/static/icon/location.png',
        latitude: data.latitude,
        longitude: data.longitude,
        width: 30,
        height: 30
      }]
    },

    confirmType (event) {
      this.orgInfo.type = event.mp.detail.value.value
      this.orgTypeText = event.mp.detail.value.text
      this.showType = false
    },

    onInputChange (event, name) {
      this.orgInfo[name] = event.mp.detail
    },

    afterRead (event) {
      this.orgInfo[event.value].push({
        url: event.url
      })
    },

    afterDelete (event) {
      this.orgInfo[event.value].splice(event.index, 1)
    },

    confirmArea (event) {
      const data = event.mp.detail.values
      this.orgInfo.area = data[2].code
      this.orgAreaText = data[2].name
      this.showArea = false
    },

    cancel () {
      this.$navigate.to('/pages/mine/index')
    },

    formValidate () {
      return new Promise((resolve, reject) => {
        let fileInput = this.orgInfo.contactPerson && this.orgInfo.contactInfo && this.orgInfo.area

        this.orgInput[this.orgInfo.type].forEach(element => {
          if (element.required) {
            if (!this.orgInfo[element.name] || this.orgInfo[element.name].length < 1) {
              fileInput = false
            }
          }
        })

        if (this.orgInfo.type && fileInput) {
          if (this.orgInfo.type !== 'sqjm' && !this.orgInfo.name) {
            reject()
          } else {
            resolve()
          }
        } else {
          reject()
        }
      })
    },

    async create () {
      try {
        await this.formValidate()
        if (this.orgInfo.type === 'sqjm') {
          this.orgInfo.name = this.orgInfo.contactPerson
        }
        try {
          await create(this.orgInfo)
          this.$navigate.to('/pages/org/audit/index')
        } catch (error) {
          // on error
        }
      } catch (error) {
        wx.showToast({
          title: '请完善组织信息',
          icon: 'none'
        })
      } 
    }
  }
}
</script>

<style>
.org-create .bottom {
  position: fixed;
  bottom: 32px;
  width: 100vw;
  z-index: 2
}

.org-create .cancel-button .van-button {
  box-shadow: 0 6px 10px 0 rgba(228, 235, 248, 0.31);
}

.org-create .next-button .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.org-create .type-desc {
  padding: 10px 16px;
  font-size: 12px;
  color: #333
}

.org-type {
  position: relative
}

.org-type .van-icon {
  position: absolute;
  top: 50%;
  transform: translate(8px, -50%);
}
</style>
