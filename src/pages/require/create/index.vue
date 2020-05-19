<template>
  <div class="create-require">
    <div class="container">
      <van-cell-group :border="false" >
        <van-cell use-label-slot>
          <div slot="title">
            需求封面
          </div>

          <div style="margin-top: 9px">
            <uploader :max='1' :files="files" value="cover" @afterRead="afterRead" @delete="afterDelete" />
          </div>
        </van-cell>

        <van-field
          label="需求标题"
          required
          :value="requirement.title"
          placeholder="请输入需求标题"
          input-align="right"
          @change="onChange($event, 'title')"
        />

        <van-field
          label="需求方"
          required
          :value="requirement.requirementOrgName"
          placeholder="请输入需求方"
          input-align="right"
          @change="onChange($event, 'requirementOrgName')"
        />

        <van-field
          label="联系人"
          required
          :value="requirement.contactPerson"
          placeholder="请输入联系人"
          input-align="right"
          @change="onChange($event, 'contactPerson')"
        />

        <van-field
          label="联系方式"
          required
          :value="requirement.contactInfo"
          placeholder="请输入联系方式"
          input-align="right"
          @change="onChange($event, 'contactInfo')"
        />

        <van-field
          label="发布方"
          readonly
          disabled
          required
          :value="orgText"
          input-align="right"
          @click="showOrg = true"
          :is-link="requirement.orgId ? false : true"
        />

        <van-field
          label="发布有效期"
          readonly
          disabled
          required
          :value="levelText"
          input-align="right"
          @click="showLevel = true"
          :is-link="requirement.level ? false : true"
        />

        <van-field
          label="需求类型"
          readonly
          disabled
          required
          input-align="right"
          :value="typeText"
          @click="showType = true"
          :is-link="requirement.type ? false : true"
        />

        <van-field
          v-if="requirement.type"
          readonly
          disabled
          required
          input-align="right"
          :label="typeChildrenTitle + '类型'"
          :value="typeChildrenText"
          @click="showTypeChildren = true"
          :is-link="requirement.demandType ? false : true"
        />

        <van-field
          label="现状描述"
          required
          :value="requirement.presentDescription"
          placeholder="请输入现状描述"
          input-align="right"
          @change="onChange($event, 'presentDescription')"
        />

        <van-field
          label="需求目标"
          :value="requirement.demandTarget"
          placeholder="请输入需求目标"
          input-align="right"
          @change="onChange($event, 'demandTarget')"
        />

        <van-field
          label="需求人数"
          :value="requirement.demandPeople"
          type="number"
          placeholder="请输入需求人数"
          input-align="right"
          @change="onChange($event, 'demandPeople')"
        />

        <van-field
          label="人员资质/条件"
          title-width="128px"
          :value="requirement.personResources"
          placeholder="请输入人员资质/条件"
          input-align="right"
          @change="onChange($event, 'personResources')"
        />

        <van-field
          label="可提供资源"
          :value="requirement.adviceResources"
          placeholder="请输入可提供资源"
          input-align="right"
          @change="onChange($event, 'adviceResources')"
        />

        <van-field
          label="需求内容"
          required
          disabled
          readonly
          :border="false"
        />

        <div style="padding: 10px 16px; padding-top: 0">
          <editor @input="onTextInput" ref="editor" />
        </div>

        <div style="width: 100vw; height: 128px; background-color: #fff"></div>
      </van-cell-group>

      <van-popup :show="showOrg" position="bottom" @close="showOrg = false">
        <van-picker :columns="orgList" show-toolbar @confirm="confirmOrg" @cancel="showOrg = false"/>
      </van-popup>

      <van-popup :show="showLevel" position="bottom" @close="showLevel = false">
        <van-picker :columns="levelList" :default-index="29" show-toolbar @confirm="confirmLevel" @cancel="showLevel = false"/>
      </van-popup>

      <van-popup :show="showType" position="bottom" @close="showType = false">
        <van-picker :columns="typeList" show-toolbar @confirm="confirmType" @cancel="showType = false"/>
      </van-popup>

      <van-popup :show="showTypeChildren" position="bottom" @close="showTypeChildren = false">
        <!-- <van-picker :columns="typeChildrenList" show-toolbar @confirm="confirmTypeChildren" @cancel="showTypeChildren = false"/> -->
        <van-checkbox-group :value="typeChildrenResult" @change="onTypeChildrenChange">
          <van-cell-group>
            <van-cell v-for="(item, index) in typeChildrenList" :key="item.value" :title="item.text" clickable @click="onCheck($event, index)" >
              <van-checkbox @tap.stop="noop" slot="right-icon" :class="'checkboxes-' + index" :name="item.value + '/' + item.text" checked-color="#E61F1C" />
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-popup>
    </div>

    <div class="bottom">
      <van-row gutter="20">
        <van-col span="12" style="text-align: right" class="cancel-button">
          <van-button @click="back" round>
            <div style="width: 128px">取消</div>
          </van-button>
        </van-col>
        <van-col span="12" style="text-align: left" class="next-button">
          <van-button v-if="!disabled" @click="next" round color="#E61F1C">
            <div style="width: 128px">下一步</div>
          </van-button>
          <van-button v-else @click="toOrg" round color="#E61F1C">
            <div style="width: 128px">加入/创建主体</div>
          </van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Uploader from '@/components/Uploader'
import Editor from '@/components/Editor'
import { userOrgList } from '@/api/org'
import { typeList, detailList } from '@/api/require'

export default {
  components: {
    Uploader,
    Editor
  },

  data () {
    return {
      requirement: {},
      typeChildrenResult: [],
      files: [],
      orgList: [],
      orgText: '请选择组织',
      levelList: [],
      levelText: '请选择时效',
      typeList: [],
      typeText: '请选择需求类型',
      typeChildrenList: [],
      typeChildrenTitle: '',
      typeChildrenText: '请选择需求类型',
      showOrg: false,
      showLevel: false,
      showType: false,
      showTypeChildren: false,
      disabled: false
    }
  },

  mounted () {
    Object.assign(this, this.$options.data())
    this.initRequirement()
    this.initEditor()
    this.initLevel()
    this.fetch()
  },

  methods: {
    initRequirement () {
      this.requirement.title = this.$store.state.requirement.title
      this.requirement.presentDescription = this.$store.state.requirement.desc
    },

    initEditor () {
      this.$refs.editor.init()
    },

    initLevel () {
      for (let i = 1; i < 31; i++) {
        this.levelList.push({
          value: String(i),
          text: String(i) + '天'
        })
      }
    },

    async fetch () {
      try {
        const [orgRes, typeRes] = await Promise.all([
          userOrgList({
            page: 1,
            limit: 100,
            userId: this.$store.getters.id
          }),
          typeList({
            page: 1,
            limit: 100
          })
        ])

        this.initOrgColumns(orgRes.data.rows)
        this.initType(typeRes.data.rows)
      } catch (error) {
        // on error
      }
    },

    initOrgColumns (value) {
      this.orgList = []
      value.forEach(element => {
        if (Number(element.status) === 2)
        this.orgList.push({
          value: element.orgId,
          text: element.orgName
        })
      })
      if (this.orgList.length < 1) {
        this.disabled = true
        wx.showToast({
          title: '请先创建或加入组织',
          icon: 'none'
        })
      }
    },

    initType (value) {
      this.typeList = []
      value.forEach(async element => {
        this.typeList.push({
          value: element.id,
          text: element.remark
        })
      })
    },

    onChange (event, value) {
      this.requirement[value] = event.mp.detail
      this.$store.dispatch('requirement/setRequirement', this.requirement)
    },

    afterRead (event) {
      this.requirement.cover = event.url
      this.files.push({
        url: event.url
      })
    },

    afterDelete (event) {
      this.requirement.cover = ''
      this.files.splice(event.index, 1)
    },

    confirmOrg (event) {
      this.requirement.orgId = event.mp.detail.value.value
      this.orgText = event.mp.detail.value.text
      this.showOrg = false
    },

    confirmLevel (event) {
      this.requirement.level = event.mp.detail.value.value
      this.levelText = event.mp.detail.value.text
      this.showLevel = false
    },

    confirmType (event) {
      this.requirement.type = event.mp.detail.value.value
      this.typeText = event.mp.detail.value.text
      this.typeChildrenTitle = this.typeText
      this.initTypeChildren()
      this.getTypeChildrenList(this.requirement.type)
      this.showType = false
    },

    initTypeChildren () {
      this.typeChildrenList = []
      this.requirement.demandType = ''
      this.typeChildrenText = '请选择需求类型'
    },

    confirmTypeChildren (event) {
      this.requirement.demandType = event.mp.detail.value.value
      this.typeChildrenText = event.mp.detail.value.text
      this.showTypeChildren = false
    },

    onTypeChildrenChange (event) {
      const arr = []
      const text = []
      this.typeChildrenResult = event.mp.detail
      event.mp.detail.forEach(element => {
        arr.push(element.split('/')[0])
        text.push(element.split('/')[1])
      })
      this.requirement.demandType = arr.join(',')
      this.typeChildrenText = text.length > 0 ? text.join(',') : '请选择需求类型'
    },

    async getTypeChildrenList (dictId) {
      const res = await detailList({
        page: 1,
        limit: 100,
        dictId
      })
      res.data.rows.forEach(element => {
        this.typeChildrenList.push({
          value: element.value,
          text: element.label
        })
      })
    },

    onTextInput (event) {
      this.requirement.description = event
    },

    onCheck (event, index) {
      const checkbox = this.$mp.page.selectComponent(`.checkboxes-${index}`)
      checkbox.toggle()
    },

    noop () {},

    validate () {
      return new Promise((resolve, reject) => {
        const data = this.requirement
        debugger
        if ( data.demandType &&
          data.description &&
          data.level &&
          data.orgId &&
          data.title &&
          data.requirementOrgName &&
          data.type &&
          data.contactPerson &&
          data.contactInfo &&
          data.presentDescription
        ) {
          resolve()
        } else {
          reject()
        }
      })
    },

    async next () {
      try {
        await this.validate()
        try {
          this.requirement.demandPeople = Number(this.requirement.demandPeople)
          this.$navigate.to('/pages/require/region/index', {
            requirement: encodeURIComponent(JSON.stringify(this.requirement))
          })
        } catch (err) {
          // on error
        }
      } catch (error) {
        wx.showToast({
          title: '请完善需求信息',
          icon: 'none'
        })
      } 
    },

    back () {
      this.$navigate.back()
    },

    toOrg () {
      this.$navigate.to('/pages/org/index')
    }
  }
}
</script>

<style>
page {
  background-color: #ffffff
}

.create-require .bottom {
  position: fixed;
  bottom: 32px;
  width: 100vw;
  z-index: 1
}

.create-require .bottom .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}

.create-require .cancel-button .van-button {
  box-shadow: 0 6px 10px 0 rgba(228, 235, 248, 0.31);
}

.create-require .next-button .van-button {
  box-shadow: 0 4px 8px 0 rgba(248, 110, 110, 0.25);
}
</style>
