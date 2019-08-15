import Vue from 'vue'
import store from '@/store'
import { ResultCode, ResultMsg } from '@/common'

let request = {
  post: async function (url, data) {
    store.state.isLoading = true
    const response = await Vue.http.post(url, data)
    console.log(response)
    store.state.isLoading = false

    if (!response || !response.data) {
      return { resultCode: ResultCode.REQUEST_ERROR, resultMsg: ResultMsg.REQUEST_ERROR }
    } else {
      return { resultCode: ResultCode.OK, data: response.data }
    }
  },

  get: async function (url, params) {
    store.state.isLoading = true
    if (url && params) {
      url += '?'
      for (let key in params) {
        url += key + '=' + (params[key]) + '&'
      }

      url = url.substring(0, url.lastIndexOf('&'))
    }
    const response = await Vue.http.get(url, null)
    store.state.isLoading = false
    if (!response) {
      return { resultCode: ResultCode.REQUEST_ERROR, resultMsg: ResultMsg.REQUEST_ERROR }
    } else {
      return { resultCode: ResultCode.OK, data: response.data }
    }
  }
}

export default request
