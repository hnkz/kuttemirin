<template lang="pug">
.container
  h1 車でいきますか？
  .answer-form
    v-btn(@click="nextPage('はい')" class="v-btn--flat") はい
    v-btn(@click="nextPage('いいえ')" class="v-btn--flat") いいえ
</template>

<script>

export default {
  components: {
  },
  props: {
    answer1: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage(value) {
      this.$emit('update:answer1', value)
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
  min-height: 100px;
  background-color: #EF860F;
</style>
