<template lang="pug">
.container
  .layer
    .bg
    h1(class="recommend-title") 予算はどれくらいですか？
  .answer-form
    v-btn(@click="nextPage(500)" class="v-btn--flat answer-btn") 〜５００円
    v-btn(@click="nextPage(700)" class="v-btn--flat answer-btn") 〜７００円
    v-btn(@click="nextPage(1000)" class="v-btn--flat answer-btn") 〜１０００円
    v-btn(@click="nextPage(10000)" class="v-btn--flat answer-btn") とくになし
</template>

<script>

export default {
  components: {
  },
  props: {
    answer6: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage(value) {
      this.$emit('update:answer6', value)
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
  background-image: url("~assets/blur_img/blur2.jpg");
  background-size: cover;
  background-color: #464646;
  position: fixed;
  z-index: 0;
</style>
