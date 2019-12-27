<template lang="pug">
.index-container
  .contents
    .text
      v-img(src="/img/logo.png" width="400px" height="400px")
    .btn
      v-btn(color="rgb(255, 154, 39)" dark depressed class="top-btn" to="recommend?page=Question1") お店を探す
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
  height:100%;
  background-image: url("~assets/images/bg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  z-index: 0;
.index-container:before
  content: '';
  background: inherit;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
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
