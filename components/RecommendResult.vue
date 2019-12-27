<template lang="pug">
.container
  h1 結果ページ
  v-card(class="shop-card" v-for="(item, i) in shopList" :key="i")
    v-img(
      class="white--text align-end"
      height="200px"
      :src="shopImgPath(item.image1)"
    )
      v-card-title {{item.name}}
    v-card-subtitle(class="pb-0") {{item.concept}}
    v-card-text(class="text--primary")
      div {{item.address}}
      div 現在地から{{item.hereDistance}} m / 駐車場: {{item.parking}}
      div 営業時間: {{item.business_hours}}
      div モーニング: {{item.morning_hours}}
      div 定休日: {{item.holiday}}
      div 参考価格: {{item.price}}
      div 席数: {{item.table_seat}} / カウンター数: {{item.counter_seat}}
      div {{item.smoking}}
      nuxt-link(to="/" class="modify-request")
        p お店情報の修正
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data: () => ({
    shopList: []
  }),
  mounted() {
    if (this.shopList.length === 0) {
      const shopList = JSON.parse(JSON.stringify(this.$store.state.shopList.list))
      const lat = this.$store.state.userInformation.latitude
      const lon = this.$store.state.userInformation.longitude
      for (let i = 0; i < shopList.length; i++) {
        const distance = this.calculateDistance(lat, lon, shopList[i].lat, shopList[i].lon)
        shopList[i].hereDistance = Math.round(distance * 1000)
      }
      shopList.sort((a, b) => a.hereDistance > b.hereDistance)
      this.$store.commit('shopList/set', shopList)
      this.shopList = shopList
    }
  },
  methods: {
    shopImgPath(imgName) {
      return '/img/shop/' + imgName
    },
    calculateDistance(lat1, lng1, lat2, lng2) {
      lat1 *= Math.PI / 180
      lng1 *= Math.PI / 180
      lat2 *= Math.PI / 180
      lng2 *= Math.PI / 180
      return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2))
    }
  }
}
</script>
<style scoped lang="stylus">
h1
  margin-top: 70px;
.shop-card
  margin: 10px;
.shop-card .v-card__title
  background-color: rgba(0,0,0,0.3);
.modify-request
  text-align: center;
</style>
