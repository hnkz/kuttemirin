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
      div 駅から{{item.distance}} / 駐車場: {{item.parking}}
      div 営業時間: {{item.business_hours}}
      div モーニング: {{item.morning_hours}}
      div 定休日: {{item.holiday}}
      div 参考価格: {{item.price}}
      div 席数: {{item.table_seat}} / カウンター数: {{item.counter_seat}}
      div {{item.smoking}}
</template>

<script>

export default {
  components: {
  },
  props: {
    shopList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
  }),
  mounted() {
    console.log(this.shopList)
  },
  methods: {
    shopImgPath(imgName) {
      return '/img/shop/' + imgName
    }
  }
}
</script>
<style scoped lang="stylus">
.shop-card
  margin: 10px;
.shop-card .v-card__title
  background-color: rgba(0,0,0,0.3);
</style>
