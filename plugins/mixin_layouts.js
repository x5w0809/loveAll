export default {
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    const self = this
    // 寫入瀏覽器
    self.$store.dispatch('getDeviceBrowser')
    // 檢查登入狀態
    if (process.client) self.$store.dispatch('CHECKLOGIN')
  },
  mounted() {
    const self = this
    var resizeTimer
    self.$store.commit('detectScreenWidth', window.OB_STATIC.GetWindowWidth())
    self.setVH()
    self.setScale()
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer)
      self.setVH()
      self.setScale()
      // 監聽視窗width
      self.$store.commit('detectScreenWidth', window.OB_STATIC.GetWindowWidth())
      // 監聽視窗resize
      self.$store.commit('detectScreenResize')
      resizeTimer = setTimeout(() => {
        // 監聽視窗after resize
        self.$store.commit('detectAfterScreenResize')

        self.setScale()
      }, 300)
    })

    // 監聽滾輪
    let W_position_pagescroll = document.documentElement.scrollTop
    window.addEventListener('scroll', function () {
      let scroll = document.documentElement.scrollTop
      self.$store.commit('detectScreenScroll', scroll)

      if (scroll <= 0) {
        // scrollUp
        self.$store.commit('detectscreenScrollUp', scroll)
      } else {
        if (scroll > W_position_pagescroll) {
          // scrollDown
          self.$store.commit('detectscreenScrollDown', scroll)
        } else {
          // scrollUp
          self.$store.commit('detectscreenScrollUp', scroll)
        }
      }
      W_position_pagescroll = scroll
    })

    // 監聽是否正在瀏覽網頁
    window.onpagehide = window.onblur = () => {
      self.$store.commit('isPageFocus', false)
    }
    window.onpageshow = window.onfocus = () => {
      self.$store.commit('isPageFocus', true)
    }
  },
}
