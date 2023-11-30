<template>
  <div id="main-flex">
    <Loader></Loader>
    <Header></Header>
    <nuxt v-cloak></nuxt>
    <Footer></Footer>
    <!-- loading -->
    <div class="loading" v-if="pageLoading">
      <div class="loading__bg"></div>
      <img class="loading__img" :src="getCurentImgPath('loading.svg')" />
    </div>
  </div>
</template>
<script>
import mixinLayouts from '@/plugins/mixin_layouts'
if (process.client) {
  window._body = document.getElementsByTagName('body')[0]
}

export default {
  mixins: [mixinLayouts],
  data() {
    return {
      titleFocus: this.headerTitle,
      titleBlur: '快回來',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return this.isPageFocus
        ? this.titleFocus
        : `${process.env.headerTitle} ${this.titleBlur}`
    },
  },
  watch: {},
  created() {},
  mounted() {
    const self = this
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.mainflex {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  #main {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
}
</style>
