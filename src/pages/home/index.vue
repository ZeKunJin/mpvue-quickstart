<template>
  <div>home page</div>
</template>

<script>
import { login } from '@/api/auth'

export default {
  data() {
    return {}
  },

  mounted() {
    login({ username: 'USERNAME' })
  }
}
</script>