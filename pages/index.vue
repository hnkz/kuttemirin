<template lang="pug">
.container
  .main
    header
      h3 くってみりん
    .contents
      v-btn(color="#B86513" dark flat depressed class="top-btn" to="recommend" ) お店を探す
    footer
</template>

<script>

export default {
  components: {
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
.top-btn
  height: 10vh!important
  width: 30vh!important
  max-width: 100%;
  max-height 100%;
  props: color;
</style>
