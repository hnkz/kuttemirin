<template lang="pug">
.container
  .main
    header
      h1 {title}
    .contents
      component(
        :is="subPage"
        :answer1.sync="answer1"
        :answer2.sync="answer2"
      )
    footer
</template>

<script>
import Question1 from '~/components/Question1.vue'
import Question2 from '~/components/Question2.vue'

export default {
  components: {
    Question1,
    Question2
  },
  data: () => ({
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
  methods: {
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
