<template lang="pug">
.container
  .main
    RecommendHeader
    component(
      :is="subPage"
      :answer1.sync="answer1"
      :answer2.sync="answer2"
      :answer3.sync="answer3"
      :answer4.sync="answer4"
      :answer5.sync="answer5"
      :answer6.sync="answer6"
      @nextPage="nextPage"
    )
</template>

<script>
import RecommendHeader from '~/components/RecommendHeader.vue'
import Question1 from '~/components/Question1.vue'
import Question2 from '~/components/Question2.vue'
import Question3 from '~/components/Question3.vue'
import Question4 from '~/components/Question4.vue'
import Question5 from '~/components/Question5.vue'
import Question6 from '~/components/Question6.vue'
import RecommendResult from '~/components/RecommendResult.vue'

import morningData from '~/assets/data/morning.json'

export default {
  watchQuery: ['page'],
  key: to => to.fullPath,
  transition: 'page',
  components: {
    RecommendHeader,
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    RecommendResult
  },
  data: () => ({
    shopData: [],
    answer1: '',
    answer2: '',
    answer3: 0,
    answer4: '',
    answer5: '',
    answer6: 0
  }),
  computed: {
    subPage() {
      switch (this.$route.query.page) {
        case 'Question1':
          return Question1
        case 'Question2':
          return Question2
        case 'Question3':
          return Question3
        case 'Question4':
          return Question4
        case 'Question5':
          return Question5
        case 'Question6':
          return Question6
        case 'Result':
          return RecommendResult
        default:
          return Question1
      }
    }
  },
  mounted() {
    this.shopData = morningData
  },
  methods: {
    nextPage() {
      switch (this.$route.query.page) {
        case 'Question1':
          this.$router.push('?page=Question2')
          break
        case 'Question2':
          this.$router.push('?page=Question3')
          break
        case 'Question3':
          this.$router.push('?page=Question4')
          break
        case 'Question4':
          this.$router.push('?page=Question5')
          break
        case 'Question5':
          this.$router.push('?page=Question6')
          break
        case 'Question6':
          this.$router.push('?page=Result')
          break
        default:
          this.$router.push('?page=Question2')
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.container
  margin: 0 auto;
  min-height: 100vh;
.main
  padding: 15px;
header
  height: 150px;
  text-align: center;
.contents
  text-align: center;
</style>
