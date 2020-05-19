<template>
  <div>
    <van-field
      :value="value"
      :required="required"
      :label="label"
      :placeholder="placeholder"
      :border="border"
      :input-align="inputAlign"
      :error-message="errorMessage"
      :error-message-align="errorMessageAlign"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: '请输入'
    },

    border: {
      type: Boolean,
      default: true
    },

    inputAlign: {
      type: String,
      default: 'right'
    },

    errorMessageAlign: {
      type: String,
      default: 'right'
    },

    rule: {
      type: Object,
      default: () => {
        return {
          type: '',
          message: ''
        }
      }
    }
  },

  created () {
    Object.assign(this, this.$options.data())
  },

  data () {
    return {
      errorMessage: ''
    }
  },

  methods: {
    async onChange (event) {
      const value = event.mp.detail
      const { rule, required } = this
      const rules = [
        { value, ...rule, required }
      ]

      try {
        await this.$validate(rules)
        this.errorMessage = ''
      } catch (err) {
        this.errorMessage = err
      }

      this.$emit('change', {
        value,
        result: this.errorMessage ? false : true
      })
    }
  }
}
</script>
