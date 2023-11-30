import Vue from 'vue'
import Swal from 'sweetalert2'
import * as commonMsg from '@/constants/common'

const cusSwal = Swal.mixin({
  customClass: {
    container: 'ob_sweetalert2',
  },
  confirmButtonText: '確定',
  cancelButtonText: '取消',
  preConfirm: () => {
    switch (Swal.getHtmlContainer().innerText) {
      case commonMsg.MSG_UNLOGING:
        window.$nuxt.gotoLogin()
        return false
      default:
        break
    }
  },
})
export default ({ app }, inject) => {
  /* 透過注入器，注入 context */
  inject('Swal2', cusSwal)
}
Vue.prototype.$Swal2 = cusSwal
