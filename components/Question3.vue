<template lang="pug">
.container
  h1(class="recommend-title") 何人で行きますか？
  .answer-form
    v-btn(@click="nextPage(1)" class="v-btn--flat answer-btn") １人
    v-btn(@click="nextPage(2)" class="v-btn--flat answer-btn") ２人
    v-btn(@click="nextPage(4)" class="v-btn--flat answer-btn") ３〜４人
    v-btn(@click="nextPage(7)" class="v-btn--flat answer-btn") ５〜７人
    v-btn(@click="nextPage(12)" class="v-btn--flat answer-btn") それ以上

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
</style>
