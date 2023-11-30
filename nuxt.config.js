const webpack = require('webpack')
const path = require('path')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const isDevelopment = process.env.NODE_ENV === 'development'

const domain =
    process.env.BASE === 'localhost'
        ? ''
        : process.env.BASE === 'sandbox'
        ? 'https://sandbox.obdesign.com.tw'
        : 'https://www.obdesign.com.tw'
//瀏覽器頁籤標題
const headerTitle = 'OB X 伊甸基金會 大手牽小手，讓愛飛起來'
//(活動ID/資料夾名稱)
const eventId = 'fe22072201'
//設定 nuxt 預設讀取網站路徑
const baseUrl = isDevelopment ? '/' : `/ld/events/${eventId}/`
//圖片讀取路徑
//內部CDN:\\imgupload\Picture\OB_Images\html\events\
const strImgCdnPath =
    process.env.BASE === 'localhost'
        ? `/image/`
        : `https://obcdn4.obdesign.com.tw/OB_Images/html/events/${eventId}/`
//meta tag og:image
const ogImage = `${strImgCdnPath}pc/ogImg.jpg`
const _eventExpiredDate = '2023-09-01 00:00:00'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: headerTitle,
        htmlAttrs: {
            lang: 'zh-Hant-TW',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '為愛益起接力 集氣接力賽',
            },
            { hid: 'og:title', property: 'og:title', content: headerTitle },
            {
                hid: 'og:image',
                property: 'og:image',
                content: ogImage,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/common.scss',
        '@/assets/css/index.scss',
        '@/assets/css/customPlugin/_paceCircle.scss',
        '@/assets/css/customPlugin/_sidebar.scss',
        '@/assets/css/customPlugin/_sweetalert2Custom.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/mixin' },
        { src: '~/plugins/mixin_link' },
        { src: '~/plugins/global', mode: 'client' },
        { src: '~/plugins/obStatic', mode: 'client' },
        { src: '~/plugins/gsap/global', mode: 'client' },
        { src: '~/plugins/index/bannerAnime', mode: 'client' },
        { src: '~/plugins/sweetalert2', mode: 'client' }, // https://sweetalert2.github.io/#usage
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        [
            '@nuxtjs/dotenv',
            {
                filename: process.env.BASE
                    ? `.env.${process.env.BASE}`
                    : '.env.localhost',
            },
        ],
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/gtm',
        '@nuxtjs/google-fonts',
        'nuxt-user-agent',
        'cookie-universal-nuxt',
        'vue-social-sharing/nuxt',
    ],
    googleFonts: {
        families: {
            // Roboto: {
            //   wght: [100, 300, 400, 500, 700, 900],
            // },
            'Noto+Sans+TC': {
                wght: [400, 500],
            },
            'Noto+Sans+SC': {
                wght: [300, 400, 500, 700],
            },
            'Noto+Serif+TC': {
                wght: [600, 700],
            },
            'Noto+Serif+SC': {
                wght: [600, 700],
            },
            'Playfair+Display': {
                wght: [400, 600],
            },
            // 'El+Messiri': {
            //   wght: [400, 500, 600, 700],
            // },
        },
        display: 'swap',
        prefetch: true,
    },
    gtm: {
        id: 'GTM-5SZNG5',
    },
    styleResources: {
        scss: ['~/assets/css/settings.scss'],
    },

    server: {
        port: 8080, // default: 3000
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        parallel: true,
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ],
        loaders: {
            vue: {
                prettify: false,
            },
            scss: {
                additionalData: `
          $imgCdnPath:'${strImgCdnPath}';
        `,
            },
        },
        extend(config, { isDev }) {
            if (isDev) {
                return smp.wrap(config)
            }
        },
        transpile: ['gsap'],
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                minifyURLs: true,
                removeComments: true,
            },
        },
    },
    router: {
        base: baseUrl,
    },
    env: {
        eventExpiredDate: _eventExpiredDate,
        imgCdnPath: strImgCdnPath,
        headerTitle: headerTitle,
        domain: domain,
        baseUrl: baseUrl,
    },
}
