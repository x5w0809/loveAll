import Vue from 'vue'
import { MSG_UNLOGING } from '@/constants/common'
import * as apiAccount from '~/api/account.api'

//網站共用連結設定
Vue.mixin({
    data() {
        return {
            popupWindow: undefined,
            lineSharing: {
                width: 650,
                height: 500,
            },
        }
    },
    computed: {},
    watch: {},
    methods: {
        gotoLogin() {
            window.location.href = `${
                process.env.VUE_APP_OB_LOGIN_URL
            }?ReturnURL=${window.encodeURIComponent(window.location.href)}`
        },
        gotoRegister() {
            window.location.href = `${
                process.env.VUE_APP_OB_REGISTER_URL
            }?ReturnURL=${window.encodeURIComponent(window.location.href)}`
        },
        async toBindLine() {
            const self = this
            const data = await apiAccount.logout(null, self)
            self.gotoLogin()
        },
        toLineShare(obj) {
            const self = this
            const _isWebview = window.OB_STATIC.isWebview()
            const deviceType = self.$ua.deviceType()
            const isFromIos = self.$ua.isFromIos()
            const browserVendor = self.$ua.browserVendor()
            const openHref = `http://line.me/R/msg/text/?${encodeURIComponent(
                obj.title
            )}%0D%0A${encodeURIComponent(obj.url)}%0D%0A${obj.description}`

            if (deviceType === 'smartphone') {
                //行動版
                if ((obj.isAsync && isFromIos) || _isWebview) {
                    window.location.href = openHref
                } else {
                    window.open(openHref, '_blank')
                }
            } else {
                //電腦版
                self.popupWindow = window.open(
                    openHref,
                    'sharer-line',
                    ',height=' +
                        self.lineSharing.height +
                        ',width=' +
                        self.lineSharing.width
                )
                if (!self.popupWindow) return
                self.popupWindow.focus()
            }
        },
        gotoSecretPage() {
            window.location.href = `/inpage.aspx?no=183381`
        },
    },
})
