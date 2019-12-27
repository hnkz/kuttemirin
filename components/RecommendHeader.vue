<template lang="pug">
.header
  .position-left
    v-icon(@click="back" size="2em") mdi-chevron-left
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
.header
  display: flex;
  justify-content: space-between;
</style>
