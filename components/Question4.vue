<template lang="pug">
.container
  h1 お好みは和食ですか？洋食ですか？
  .answer-form
    v-btn(@click="yesAndNextPage" class="v-btn--flat") はい
    v-btn(@click="noAndNextPage" class="v-btn--flat") いいえ
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
    yesAndNextPage() {
      this.$emit('update:answer4', 'はい')
      this.$emit('nextPage')
    },
    noAndNextPage() {
      this.$emit('update:answer4', 'いいえ')
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
