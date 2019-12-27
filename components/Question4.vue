<template lang="pug">
.container
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
</style>
