<template lang="pug">
.index-container
  RecommendHeader
  .contents
    h1 店情報を追加
    .form
      v-form(ref="form" lazy-validation)
        v-text-field(
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="店名"
          required
        )
      v-text-field(
        label="住所"
        required
      )
      v-select(
        label="駐車場"
        required
      )
      v-text-field(
        label="定休日"
        required
      )
      v-select(
        label="開店時間"
        required
      )
      v-select(
        label="閉店時間"
        required
      )
      v-select(
        label="モーニング開始時間"
        required
      )
      v-select(
        label="モーニング終了時間"
        required
      )
      v-select(
        label="たばこ"
        required
      )
      v-select(
        label="モーニングの種類"
        required
      )
      v-text-field(
        label="参考価格"
        required
      )
      v-text-field(
        label="コンセプト"
        required
      )
      v-select(
        label="店の雰囲気"
        required
      )
      v-text-field(
        label="テーブルの数"
        required
      )
      v-text-field(
        label="カウンターの数"
        required
      )
      v-file-input(label="店の画像1")
      v-file-input(label="店の画像2")
      v-checkbox(
        v-model="checkbox"
        label="利用規約に同意します"
        required
      )
      v-btn(
        @click="submit"
      ) 送信
</template>

<script>
import RecommendHeader from '~/components/RecommendHeader.vue'

import morningData from '~/assets/data/morning.json'

export default {
  components: {
    RecommendHeader
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
    // データ
    this.$store.commit('shopList/set', morningData)
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
h1
  color: #fff;

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
.form
  background-color: rgba(255,255,255,0.5);
  margin: 15px;
  padding: 10px;
</style>
