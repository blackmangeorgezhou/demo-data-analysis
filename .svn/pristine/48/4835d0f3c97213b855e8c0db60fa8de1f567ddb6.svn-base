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
import { DialogAlert } from '@/common'
// mock：登录
import '@/mock'
import 'babel-polyfill'

Vue.use(VueResource)
Vue.use(Vue2OrgTree)
Vue.use(ElementUI, { size: 'small' })
Vue.use(DialogAlert)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  echarts,
  components: { App },
  template: '<App/>'
})
