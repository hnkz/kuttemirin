<template lang="pug">
.container
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
</style>
