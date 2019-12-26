<template lang="pug">
.container
  h1 タバコは吸いますか？
  p {{answer2}}
</template>

<script>

export default {
  components: {
  },
  props: {
    answer2: {
      type: String,
      default: ''
    }
  },
  methods: {
    nextPage() {
      this.emit('nextPage')
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
