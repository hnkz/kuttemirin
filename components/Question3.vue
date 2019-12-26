<template lang="pug">
.container
  h1 何人で行きますか？
  .answer-form
    v-btn(@click="yesAndNextPage" class="v-btn--flat") はい
    v-btn(@click="noAndNextPage" class="v-btn--flat") いいえ
</template>

<script>

export default {
  components: {
  },
  props: {
    answer3: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    yesAndNextPage() {
      this.$emit('update:answer3', 'はい')
      this.$emit('nextPage')
    },
    noAndNextPage() {
      this.$emit('update:answer3', 'いいえ')
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
