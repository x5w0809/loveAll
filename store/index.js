const state = () => ({
    isLoadingDone: null,
    screenWidth: null, // 偵測螢幕寬
    screenScroll: 0, // 偵測螢幕滾輪事件
    screenScroll_Down: 0, // 偵測螢幕滾輪向下事件
    screenScroll_Up: 0, // 偵測螢幕滾輪向上事件
    ScreenResize: 0, // 偵測視窗Resizing
    afterScreenResize: 0, // 偵測視窗afterResize
    loadingAnimationDone: false,
    imgFolder_pc: 'pc/',
    imgFolder_mb: 'mb/',
    deviceBrowser: null,
    isNotLogin: null,
    isPageFocus: true,
    pageLoading: false,
    userData: {},
})
const getters = {
    getStateS(state) {
        return state
    },
}
const mutations = {
    PageLoadDone(state) {
        // 第一次載入網站 for 開場動畫
        state.isLoadingDone = true
    },
    setloadingAnimationDone(state, value) {
        state.loadingAnimationDone = value
    },
    detectScreenWidth(state, value) {
        state.screenWidth = value
    },
    detectScreenScroll(state, value) {
        state.screenScroll = value
    },
    detectscreenScrollDown(state, value) {
        const self = this
        state.screenScroll_Down = value
    },
    detectscreenScrollUp(state, value) {
        const self = this
        state.screenScroll_Up = value
    },
    detectScreenResize(state) {
        state.ScreenResize++
    },
    detectAfterScreenResize(state) {
        state.afterScreenResize++
    },
    isPageFocus(state, value) {
        state.isPageFocus = value
    },
    SET_DEVICE_BROWSER(state, value) {
        state.deviceBrowser = value
    },
    SET_CHECKLOGIN(state, value) {
        state.userData = { ...value }
    },
    SET_ISUNLOGIN(state, value) {
        state.isNotLogin = value
    },
    SET_PAGELOADING(state, value) {
        state.pageLoading = value
    },
}

const actions = {
    nuxtServerInit({ commit, dispatch }, { req }) {
        //寫入瀏覽器 generate 模式無效
        // dispatch('getDeviceBrowser')
        //取得登入狀態 generate 模式無效
        //await dispatch('CHECKLOGIN')
    },
    getDeviceBrowser({ commit }) {
        const deviceBrowser = this.$ua.browser()
        commit('SET_DEVICE_BROWSER', deviceBrowser)
    },
    isUnLogin({ commit }, payload) {
        commit('SET_ISUNLOGIN', response)
    },
    async CHECKLOGIN({ commit }, payload) {
        //this.$axios.setBaseURL(process.env.VUE_APP_LOCOALHOST_API_URL)
        const response = await this.$webApi.$post(`/Account/CheckLogin`)

        if (response) {
            commit('SET_CHECKLOGIN', response)
            if (response.IsLogin) {
                return true
            }
        } else {
            commit('SET_CHECKLOGIN', { IsLogin: false })
        }
        return false
    },
}

export default { state, getters, mutations, actions }
