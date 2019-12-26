<template lang="pug">
.container
  .main
    RecommendHeader
    component(
      :is="subPage"
      :answer1.sync="answer1"
      :answer2.sync="answer2"
      @nextPage="nextPage"
    )
</template>

<script>
import RecommendHeader from '~/components/RecommendHeader.vue'
import Question1 from '~/components/Question1.vue'
import Question2 from '~/components/Question2.vue'
import morningData from '~/assets/data/morning.json'

export default {
  components: {
    RecommendHeader,
    Question1,
    Question2
  },
  data: () => ({
    shopData: [],
    answer1: 'test1',
    answer2: 'test2'
  }),
  computed: {
    subPage() {
      switch (this.$route.hash) {
        case '#Question1':
          return Question1
        case '#Question2':
          return Question2
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
      switch (this.$route.hash) {
        case '#Question1':
          this.$router.push({ hash: '#Question2' })
          break
        case '#Question2':
          this.$router.push({ hash: '#Question1' })
          break
        default:
          this.$router.push({ hash: '#Question2' })
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
