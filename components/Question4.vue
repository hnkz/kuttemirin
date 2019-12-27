<template lang="pug">
.container
  .layer
    .bg
    h1(class="recommend-title") お好みは和食ですか？洋食ですか？
  .answer-form
    v-btn(@click="nextPage('洋食')" class="v-btn--flat answer-btn") 洋食
    v-btn(@click="nextPage('和食')" class="v-btn--flat answer-btn") 和食
</template>

<script>

export default {
  components: {
  },
  props: {
    answer4: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage(value) {
      this.$emit('update:answer4', value)
      this.$emit('nextPage')
    }
  }
}
</script>
<style scoped lang="stylus">
.layer
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
h1.recommend-title
  z-index: 100;
  margin-top: 30%;
.bg
  padding: 50%;
  width: 100%;
  background-image: url("~assets/blur_img/blur4.jpg");
  background-size: cover;
  background-color: #464646;
  position: fixed;
  z-index: 0;
</style>
