<template lang="pug">
.container
  .contents
    .text
      v-card(color="rgba(204, 167, 159, 0.3)" dark flat depressed)
        v-card-title
          p
          | くってみりん
          br
          | ~豊橋でモーニングを楽しもう~
    .btn
      v-btn(color="#67391C" dark flat depressed class="top-btn" to="recommend" ) お店を探す
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
  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ) ,url("~assets/images/bg.jpg");
  background-size: cover;
  background-blend-mode: saturation;
  background-repeat: no-repeat;
  background-position: center;
.contents
  margin-top: 10vh;
  text-align: center;
.text
  display: inline-flex;
  text-align: center;
.top-btn
  height: 10vh!important
  width: 30vh!important
  font-weight: bold;
  max-width: 100%;
  max-height 100%;
  text-align: center;
  margin-top: 15vh;
.btn
  text-align: center;
</style>
