<template lang="pug">
.container
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
</style>
