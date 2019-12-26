<template lang="pug">
.container
  h1(class="recommend-title") 車でいきますか？
  .answer-form
    v-btn(@click="nextPage('はい')" class="v-btn--flat answer-btn") はい
    v-btn(@click="nextPage('いいえ')" class="v-btn--flat answer-btn") いいえ
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
</style>
