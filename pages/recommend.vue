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
  transition(to, from) {
    if (!from) { return 'slide-left' }
    return to.query.page < from.query.page ? 'slide-right' : 'slide-left'
  },
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
    filteredData: [],
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
    },
    shopList() {
      return this.$store.state.shopList.list
    }
  },
  mounted() {
    if (this.$store.state.shopList.list.length === 0) {
      this.filteredData = morningData
    } else {
      this.filteredData = this.shopList
    }
  },
  methods: {
    nextPage() {
      switch (this.$route.query.page) {
        case 'Question2':
          if (this.answer2 === 'はい') {
            this.filteredData = this.filteredData.filter(data => data.parking !== '禁煙')
          }
          this.$router.push('?page=Question3')
          break
        case 'Question3':
          if (this.answer3 > 10) {
            this.filteredData = this.filteredData.filter(data => data.table_seat > 10)
          } else if (this.answer3 > 7) {
            this.filteredData = this.filteredData.filter(data => data.table_seat > 6)
          } else if (this.answer3 > 4) {
            this.filteredData = this.filteredData.filter(data => data.table_seat > 3)
          }
          this.$router.push('?page=Question4')
          break
        case 'Question4':
          this.$router.push('?page=Question5')
          break
        case 'Question5':
          if (this.answer5 === 'はい') {
            this.filteredData = this.filteredData.filter(data => data.counter_seat > 0)
          }
          this.$router.push('?page=Question6')
          break
        case 'Question6':
          if (this.answer6) {
            this.filteredData = this.filteredData
              .filter(data => String(data.price).match(/\d+/g).map(price => Number(price)).sort((a, b) => a < b)[0] < this.answer6)
          }
          // 近い順，開いてる日時で並び替えとフィルター
          this.$router.push('?page=Result')
          break
        default:
          if (this.answer1 === 'はい') {
            this.filteredData = this.filteredData.filter(data => data.parking === '有')
          }
          this.$router.push('?page=Question2')
      }
      this.setList(this.filteredData)
    },
    setList(list) {
      this.$store.commit('shopList/set', list)
    }
  }
}
</script>
<style scoped lang="stylus">
.main
  padding: 15px;
header
  height: 150px;
  text-align: center;
.contents
  text-align: center;
</style>
