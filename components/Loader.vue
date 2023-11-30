<template>
  <div class="loader pace" v-if="serverPending">
    <div class="loading-bar-animation">
      <span class="loading-bar-line">
        <span class="line"></span>
      </span>
    </div>
    <div class="loader__bg"></div>
    <div class="loader__logo">
      <div class="loader__logo_anime">
        <div class="loader__logo_obj"></div>
      </div>
    </div>
  </div>
</template>

<script>
if (process.client) {
  require('pace-js')
}
export default {
  data() {
    return {
      serverPending: true,
      body_pacerFadeOute: 'pacerFadeOute',
      body_pacerFadeOute_duration: 1000,
      page_load_animation_delay: 0,
      loadingtext: 0,
      loadingtextEnd: false,
    }
  },
  computed: {},
  watch: {
    isLoadingDone(newValue, oldValue) {
      const self = this
      window.scrollTo(0, 0)

      // window.OB.AOS_animation()

      // 觸發loading結束動畫
      setTimeout(() => {
        _body.classList.add(self.body_finished_class)
        self.$store.commit('setloadingAnimationDone', true)
      }, self.page_load_animation_delay)
    },
    isloadingAnimationDone(newValue, oldValue) {
      const self = this
      // dom 畫面 & loading 全數結束
      _body.classList.add(self.body_loadingfinished_class)
      _body.classList.add(self.body_loadingfinished_header_class)

      setTimeout(() => {
        self.serverPending = false
      }, self.body_pacerFadeOute_duration)
    },
    async screenWidthState(newValue, oldValue) {
      const self = this
      if (oldValue === null) {
        if (await self.extraLoadListen()) {
          setTimeout(() => {
            self.$store.commit('PageLoadDone')
          }, 200)
        }
      }
    },
  },
  beforeCreate() {
    const self = this
  },
  created() {
    const self = this
    if (process.client) {
      // if (self.isSupportPace) {
      // Pace.start()
      // Pace.on('go', function (e) {
      //   // showloadingbar(Pace.bar.progress)
      // })
      // Pace.on('done', function (e) {
      //   // showloadingbar(Pace.bar.progress)
      //   // if (!self.loadingtextEnd) self.$store.commit('PageLoadDone')
      //   self.$store.commit('PageLoadDone')
      // })
      // } else {
      //   if (await self.extraLoadListen()) {
      //     setTimeout(() => {
      //       self.$store.commit('PageLoadDone')
      //     }, 200)
      //   }
      // }
    }
  },
  mounted() {
    const self = this
  },
  methods: {
    //為此活動額外添加 等待主視覺banner圖片載入完成才結束loading cover
    async extraLoadListen() {
      const self = this
      let imgs = []
      // if (!self.isMobile) {
      //   imgs = [self.getCurentImgPath(`pc/model.png`)]
      // } else {
      //   imgs = [self.getCurentImgPath(`mb/model.png`)]
      // }
      const res = await self.loadImage(imgs)
      return res
    },
  },
}
</script>
