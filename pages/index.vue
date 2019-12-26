<template lang="pug">
.container
  .main
    header
      h3 くってみりん
    .contents
      v-btn(class="top-btn" to="recommend?page=Question1") お店を探す
    footer
</template>

<script>

export default {
  components: {
  }
}
</script>
<style scoped lang="stylus">
.main
  padding: 15px;
header
  height: 150px;
  text-align: center;
.contents
  text-align: center;
.top-btn
  height: 150px;
  max-height: 200px;
  max-width: 500px;
  rouneded: true;
  width: 150px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
</style>
