<template lang="pug">
.container
  h1 予算はどれくらいですか？
  .answer-form
    v-btn(@click="nextPage(600)" class="v-btn--flat") 〜６００円
    v-btn(@click="nextPage(800)" class="v-btn--flat") 〜８００円
    v-btn(@click="nextPage(1000)" class="v-btn--flat") 〜１０００円
    v-btn(@click="nextPage(10000)" class="v-btn--flat") とくになし
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
.container
  margin: 0 auto;
  min-height: 100vh;
h1
  text-align: center;
  font-size: 2em;
  margin: 100px 0;
.answer-form
  display: flex;
  flex-direction: column;
.v-btn--flat
  margin: 15px;
  min-height: 60px;
  background-color: #EF860F;
</style>
