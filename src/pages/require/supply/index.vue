<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          :value="username"
          label="姓名"
          placeholder="请输入"
          input-align="right"
          required
          @input="inputUsername"
        />
        <van-field
          :value="phone"
          label="联系手机号"
          placeholder="请输入"
          input-align="right"
          required
          @input="inputPhone"
        />
        <van-field
          :value="email"
          label="联系邮箱"
          placeholder="请输入邮箱"
          input-align="right"
          @input="inputEmail"
        />
        <van-field
          :value="content"
          label="对接内容"
          required
          placeholder="请输入对接内容"
          input-align="right"
          @input="inputContent"
        />
        <van-field
          :value="startText"
          label="开始时间"
          required
          disabled
          readonly
          input-align="right"
          placeholder="请选择开始时间"
          @click="showStart = true"
        />
        <van-field
          :value="endText"
          label="结束时间"
          required
          disabled
          readonly
          input-align="right"
          placeholder="请选择结束时间"
          @click="showEnd = true"
        />
        <van-field
          :value="peopleNum"
          label="参与人数"
          type="number"
          placeholder="请输入参与人数"
          input-align="right"
          @input="inputNum"
        />
        <van-field
          :value="support"
          label="需要的支持"
          placeholder="请输入需要的支持"
          input-align="right"
          @input="inputSupport"
        />
        <van-field
          :value="remark"
          label="备注"
          type="textarea"
          autosize
          placeholder="请输入备注"
          input-align="right"
          @input="inputRemark"
        />
      </van-cell-group>

      <div class="btn_box">
        <van-button
          round
          type="info"
          color="linear-gradient(90deg,rgba(241,83,80,1) 0%,rgba(248,110,110,1) 100%);"
          custom-style="width:300rpx;height:88rpx;box-shadow:0px 4px 4px 0px rgba(248,110,110,0.25);"
          @click="goCheck"
        >我要对接</van-button>
      </div>
    </div>

    <van-popup :show="showStart" position="bottom" @close="showStart = false">
      <van-datetime-picker
        type="date"
        :value="startTime"
        :min-date="today"
        @cancel="showStart = false"
        @confirm="onConfirmStart"
      />
    </van-popup>

    <van-popup :show="showEnd" position="bottom" @close="showEnd = false">
      <van-datetime-picker
        type="date"
        :value="endTime"
        :min-date="today"
        @cancel="showEnd = false"
        @confirm="onConfirmEnd"
      />
    </van-popup>
  </div>
</template>

<script>
import { requirementSupply } from "@/api/require";
import { validPhone, Toast, validEmail } from "@/utils/validate";
import { formatDate } from "@/utils/index";

export default {
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      remark: "",
      flag: false,
      id: "",
      content: '',
      startText: '',
      endText: '',
      peopleNum: '',
      support: '',
      validPhone,
      validEmail,
      showStart: false,
      showEnd: false,
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      today: new Date().getTime()
    };
  },

  onLoad(option) {
    Object.assign(this, this.$options.data());
    this.id = option.id;
    this.startText = formatDate(this.startTime)
    this.endText = formatDate(this.endTime)
  },

  methods: {
    inputPhone(event) {
      this.phone = event.mp.detail;
    },

    inputUsername(event) {
      this.username = event.mp.detail;
    },
    inputEmail(event) {
      this.email = event.mp.detail;
    },

    inputRemark(event) {
      this.remark = event.mp.detail;
    },

    inputContent (event) {
      this.content = event.mp.detail
    },

    inputNum (event) {
      this.peopleNum = event.mp.detail
    },

    inputSupport (event) {
      this.support = event.mp.detail
    },

    onConfirmStart (event) {
      this.startTime = event.mp.detail
      this.startText = formatDate(this.startTime)
      this.showStart = false
    },

    onConfirmEnd (event) {
      this.endTime = event.mp.detail
      this.endText = formatDate(this.endTime)
      this.showEnd = false
    },

    async goCheck() {
      if (this.validPhone(this.phone) === false) {
        Toast("请输入正确手机号");
        return;
      }
      if (this.email !== "") {
        if (this.validEmail(this.email) === false) {
          Toast("请输入正确邮箱");
          return;
        }
      }
      if (!this.content) {
        Toast("请完善对接信息");
        return;
      }
      try {
        await requirementSupply({
          name: this.username,
          phone: this.phone,
          requirementId: this.id,
          email: this.email,
          remark: this.remark,
          content: this.content,
          startTime: new Date(this.startTime),
          endTime: new Date(this.endTime),
          peopleNum: Number(this.peopleNum),
          support: this.support
        });
        this.$navigate.to("/pages/require/complete/index");
        this.init();
      } catch (e) {
        //
      }
    }
  }
};
</script>

<style>
.btn_box {
  position: fixed;
  bottom: 32px;
  left: 50%;
  margin-left: -75px;
}
</style>
