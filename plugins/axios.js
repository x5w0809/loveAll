import https from 'https'

export default function (
    { $axios, store, error: nuxtError, redirect, req },
    inject
) {
    const agent = new https.Agent({
        rejectUnauthorized: false,
    })

    //create 兩個api instance 不同domain
    const webApi = $axios.create()
    const serverApi = $axios.create()

    const onRequest = (config) => {
        if (store.state.userData.AccessToken)
            config.headers.common.Authorization = `Bearer ${store.state.userData.AccessToken}`

        if (process.env.NODE_ENV !== 'production')
            console.log(
                `%c Making request to ${config.url}`,
                'background: #222; color: #bada55; padding:2px'
            )

        if (process.env.NODE_ENV === 'development') {
            // 开发环境，取消https证书校验
            config.httpsAgent = agent
        }
    }
    const onResponse = (config) => {}

    const onError = (error) => {
        console.error('axios onError', error)
        // nuxtError({
        //   statusCode: 500,
        //   message: error.message,
        // })

        const code = parseInt(error.response && error.response.status)
        // if (code === 401) {
        //   //未登入
        //   store.dispatch('isUnLogin', true)
        // }
        return Promise.resolve(false)
    }

    webApi.onRequest(onRequest)
    serverApi.onRequest(onRequest)
    webApi.onResponse(onResponse)
    serverApi.onResponse(onResponse)
    webApi.onError(onError)
    serverApi.onError(onError)

    // Set baseURL
    webApi.setBaseURL(process.env.VUE_APP_LOCOALHOST_API_URL)
    serverApi.setBaseURL(process.env.VUE_APP_API_URL)

    inject('webApi', webApi)
    inject('serverApi', serverApi)
}
