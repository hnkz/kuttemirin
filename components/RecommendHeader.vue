<template lang="pug">
.header
  .position-left(@click="back")
    v-icon(@click="back") mdi-chevron-left
</template>

<script>
export default {
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  mounted() {
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="stylus">

</style>
