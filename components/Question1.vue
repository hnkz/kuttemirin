<template lang="pug">
.container
  h1 車でいきますか？
  p {{answer1}}
  v-btn(@click="nextPage") つぎ
</template>

<script>

export default {
  components: {
  },
  props: {
    answer1: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage() {
      console.log('aue')
      this.$emit('nextPage')
    }
  }
}
</script>
<style scoped lang="stylus">
.container
  margin: 0 auto;
  min-height: 100vh;
.main
  padding: 15px;
header
  height: 150px;
  text-align: center;
.contents
  text-align: center;
</style>
