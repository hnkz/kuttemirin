<template lang="pug">
.container
  .header
    img(src="~assets/img/shop/shop_ran_sub.jpg")
    .text
      p
      | くってみりん
      br
      | ~豊橋でモーニングを楽しもう~
    .btn
      v-btn(color="#67391C" dark flat depressed class="top-btn" to="recommend" ) お店を探す
  footer(class="b-footer")
    .footer-text
      p
      | テキスト
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="stylus">
.container
  height: 100vh!important
  margin: 0px;
  padding: 0px;
  border: 0px;
.text
  display: inline-flex;
  text-align: center;
  font-weight: bold;
  padding: 10vh;
.top-btn
  height: 10vh!important
  width: 30vh!important
  font-weight: bold;
  max-width: 100%;
  max-height 100%;
  text-align: center;
  margin-top: 10vh;
  padding-top: 15vh;
.btn
  text-align: center;
.b-footer
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: rgba(204, 167, 159, 0.3);
  font-size: 0.5em;
.footer-text
  padding-left: 3vh;;
</style>
