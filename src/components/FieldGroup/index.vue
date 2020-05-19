<template>
  <van-cell-group :border="border">
    <field
      v-for="(item, index) in values"
      :key="index"
      :value="item.value"
      :required="item.required"
      :label="item.label"
      :border="item.border"
      :inputAlign="item.inputAlign"
      :rule="item.rule"
      @change="onChange($event, index)"
    />
  </van-cell-group>
</template>

<script>
import Field from '@/components/Field'

export default {
  props: {
    values: {
      type: Array,
      default: () => {
        return []
      }
    },

    border: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Field
  },

  methods: {
    onChange (event, index) {
      this.$emit('change', {
        ...event,
        index
      })
    }
  }
}
</script>