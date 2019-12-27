<template lang="pug">
.container
  .layer
    .bg
    h1(class="recommend-title") カウンターで食事を取りたいですか？
  .answer-form
    v-btn(@click="nextPage('はい')" class="v-btn--flat answer-btn") はい
    v-btn(@click="nextPage('いいえ')" class="v-btn--flat answer-btn") いいえ
</template>

<script>

export default {
  components: {
  },
  props: {
    answer5: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage(value) {
      this.$emit('update:answer5', value)
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
  background-image: url("~assets/blur_img/blur1.jpg");
  background-size: cover;
  background-color: #464646;
  position: fixed;
  z-index: 0;
</style>
