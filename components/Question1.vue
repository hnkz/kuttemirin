<template lang="pug">
.container
  h1 車でいきますか？
  p {{answer1}}
  v-btn(:to="to") つぎ
</template>

<script>

export default {
  components: {
  },
  props: [
    'answer1'
  ],
  data: () => ({
    to: { hash: '#Question2' }
  }),
  methods: {

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
