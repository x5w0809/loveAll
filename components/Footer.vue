<template>
  <footer class="ob_footer" v-html="wordingReal"></footer>
</template>

<script>
export default {
  data() {
    return {
      wordingList: [
        '客服電話代表號 (02)7722-6870轉9',
        '(週一至週五)10:00~12:00/13:30~18:00',
      ],
    }
  },
  computed: {
    wordingReal() {
      if (this.isMobile) {
        return this.wordingList.join('<br>')
      }
      return this.wordingList.join('')
    },
  },
  watch: {},
  beforeCreate() {
    const self = this
  },
  created() {
    const self = this
  },
  mounted() {
    const self = this
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.ob_footer {
  padding: 18px 10px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  background-color: #000;
  @include mob-width {
    padding: 12px 10px;
    font-size: 12px;
  }
}
</style>
