<template lang="pug">
.index-container
  .contents
    .text
      v-card(color="rgba(204, 167, 159, 0.4)" dark flat depressed)
        v-card-title
          p
          | くってみりん
          br
          | ~豊橋でモーニングを楽しもう~
    .btn
      v-btn(color="#67391C" dark depressed class="top-btn" to="recommend?page=Question1") お店を探す
  footer
</template>

<script>

export default {
  components: {
  },
  mounted() {
    // 位置情報
    if (this.$store.state.userInformation.latitude === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setGeoLocation, (error) => {
          console.log(error)
        }, { timeout: 10000 })
      } else {
        console.log('位置情報が取得できない')
      }
    }
  },
  methods: {
    setGeoLocation(position) {
      this.$store.commit('userInformation/setLatitude', position.coords.latitude)
      this.$store.commit('userInformation/setLongitude', position.coords.longitude)
    }
  }
}
</script>

<style scoped lang="stylus">
.index-container
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
  height: 60px!important
  width: 30vh!important
  font-weight: bold;
  max-width: 100%;
  max-height 100%;
  text-align: center;
  margin-top: 15vh;
  border-radius: 30px
.btn
  text-align: center;
</style>
