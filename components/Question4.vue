<template lang="pug">
.container
  h1 お好みは和食ですか？洋食ですか？
  .answer-form
    v-btn(@click="nextPage('洋食')" class="v-btn--flat") 洋食
    v-btn(@click="nextPage('和食')" class="v-btn--flat") 和食
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
