<template lang="pug">
.header
  .position-left
    v-icon(@click="back" size="2em") mdi-chevron-left
  .position-center
    nuxt-link(to="/")
      v-img(src="/img/sublogo.png" height="60px" width="230px")
</template>

<script>
export default {
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  mounted() {
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="stylus">
.header
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
.position-left
  margin-left: 0px;
.position-center
  margin: 0 18%;
</style>
