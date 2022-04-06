export default {
  computed: {
    // 「pages」の種別を取得
    currentPageName () {
      const path = this.$route.path
      const name = path
      return name
    }
  }
}
