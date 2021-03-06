// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import VueResource from 'vue-resource'
import '@/theme/index.css'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import Vue2OrgTree from 'vue2-org-tree'
import PortalUI from "@/packages"
import {
  API
} from '@/services'
import {
  DialogAlert,
  Constants
} from '@/common'
import VueCookies from 'vue-cookies'
// mock：登录
import '@/mock'
import 'babel-polyfill'
import theme2 from "./assets/js/theme2"

Vue.use(VueCookies)
Vue.use(VueResource)
Vue.use(Vue2OrgTree)
Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(DialogAlert)
Vue.use(PortalUI)

// Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts
// echarts.registerTheme('theme', theme2) // 注册主题

// const U2ATValue = VueCookies.get('U2AT')
// const U2Email = VueCookies.get('U2Email')
// const E2Email = VueCookies.get('E2Email')
// if (!U2ATValue) {
//   window.location.href = Constants.sysLoginHref
// } else {
//   store.state.U2AT = U2ATValue
//   const userEmail = VueCookies.get('E2Email')

//   console.log(store.state)

//   Vue.http.interceptors.push((request, next) => {
//     console.log(VueCookies.get('U2AT'))
//     request.headers.set('token', VueCookies.get('U2AT'))
//     console.log(request.headers)
//     let timeout = setTimeout(() => {
//       next(request.respondWith(request.body, {
//         status: 408,
//         statusText: '请求超时'
//       }))
//     }, 3000)

//     next((response) => {
//       clearTimeout(timeout)
//       return response
//     })
//   })
//   const data = {
//     "F_Email": userEmail,
//     "Systeam": "运营中心"
//   }

//   /* eslint-disable no-new */
//   API.getUserByEmail(data).then((response) => {
//     if (response  && response.data) {
//       store.state.user = response.data
//       /* eslint-disable no-new */
//       new Vue({
//         el: '#app',
//         router,
//         store,
//         echarts,
//         components: {
//           App
//         },
//         template: '<App/>'
//       })
//     }
//   })
// }
const data = {
  "F_Email": "xiewenyu@xdf.cn",
  "Systeam": "运营中心"
}
API.getUserByEmail(data).then((response) => {
  if (response  && response.data) {
    store.state.user = response.data
    console.log(store.state.user,'user')
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      echarts,
      components: { App },
      template: '<App/>'
    })

  }
})