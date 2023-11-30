<template>
  <header class="ob_header">
    <div class="wrap">
      <div class="ob_header_flex">
        <div class="left">
          <a class="ob_header_logo" href="/">
            <h1>
              <img src="@/assets/image/logo.png" :alt="headerTitle" />
            </h1>
          </a>
        </div>
        <div class="right">
          <a class="ob_header_member" @click="login">
            <i class="user"></i>
            <span class="text">
              {{ btnText }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loginText: '登入',
    }
  },
  computed: {
    btnText() {
      const result = this.isLogin
        ? `${this.$store.state.userData.UserName.charAt(0)}⭘⭘`
        : this.loginText
      return result
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
  methods: {
    login() {
      if (this.isLogin) window.location.href = '/MemberCenter.aspx'
      else this.gotoLogin()
    },
  },
}
</script>
<style lang="scss" scoped>
.ob_header {
  background-color: #000;
  padding: 15px 0;
  font-family: 'MicrosoftJhengHei';
  position: relative;
  z-index: 2;

  @include mob-width {
    padding: 7px 0;
  }
  &,
  * {
    box-sizing: border-box;
  }
  .wrap {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px;
    @include mob-width {
      padding: 0 18px;
    }
  }
  .ob_header_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ob_header_member {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 2px;
    @include mob-width {
      font-size: 18px;
    }
    i {
      &.user {
        margin-right: 6px;
        position: relative;
        width: 30px;
        background: url(@/assets/image/icon/pc-behavior-ic-login@2x.webp)
          no-repeat center;
        background-size: contain;
        max-width: 100%;
        @include mob-width {
          background: url(@/assets/image/icon/mb-behavior-ic-login@2x.webp)
            no-repeat center;
          background-size: contain;
          width: 26px;
        }

        &:after {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
      }
    }
  }
  .ob_header_logo {
    img {
      max-width: 100%;
      @include mob-width {
        width: 54px;
      }
    }
  }
}
</style>
