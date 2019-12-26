<template lang="pug">
.container
  h1 何人で行きますか？
  .answer-form
    v-btn(@click="nextPage(1)" class="v-btn--flat") １人
    v-btn(@click="nextPage(2)" class="v-btn--flat") ２人
    v-btn(@click="nextPage(4)" class="v-btn--flat") ３〜４人
    v-btn(@click="nextPage(7)" class="v-btn--flat") ５〜７人
    v-btn(@click="nextPage(12)" class="v-btn--flat") それ以上

</template>

<script>

export default {
  components: {
  },
  props: {
    answer3: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
  }),
  methods: {
    nextPage(value) {
      this.$emit('update:answer3', value)
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
