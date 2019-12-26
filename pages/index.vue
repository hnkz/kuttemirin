<template lang="pug">
.container
  .main
    header
      h3 くってみりん
    .contents
      v-btn(class="top-btn" to="recommend") お店を探す
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
  max-height: 200px;
  max-width: 500px;
  height: 150px;
  rouneded: true;
  width: 150px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
</style>
