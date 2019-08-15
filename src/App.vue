<template>
  <div id="app">
    <the-loading v-if="isLoading"></the-loading>
    <nav-bar v-if="isShowAppNavBar" :canSelectTitle="false" :regionOptions="titleList"></nav-bar>
    <div v-if="isShowAppNavBar" class="display-flex-wrap">
      <circle-compare-panel v-for="(item, index) in demoProjectList"
      :key="index"
      @clickPanel="goChildern(item.path)"
      :bgColor="item.bgColor"
      :title="item.title"></circle-compare-panel>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import NavBar from '@/components/NavBar'
import TheLoading from '@/components/Loading'
import CircleComparePanel from '@/views/CicrleComparePanel'

export default {
  name: 'App',
  components: {
    NavBar,
    TheLoading,
    CircleComparePanel
  },

  created () {
    Vue.http.interceptors.push((request, next) => {
      let timeout = setTimeout(() => {
        next(request.respondWith(request.body, {
          status: 408,
          statusText: '请求超时'
        }))
      }, 30000)

      next((response) => {
        clearTimeout(timeout)
        this.handleResponse(response)
        return response
      })
    })

    this.setUser({
      name: '苏小新',
      age: 11
    })
  },

  computed: {
    ...mapState(['isLoading', 'isShowAppNavBar'])
  },

  data () {
    return {
      titleList: [
        {
          label: '苏州新东方数据分析模板预览',
          value: '苏州新东方数据分析模板预览'
        }
      ],

      demoProjectList: [
        {
          path: '/demo-data-analysis/campus-classroom',
          title: '生源率及教室产能分析',
          bgColor: '#098d91'
        },
        {
          path: '/demo-data-analysis/department-target',
          title: '部门指标汇总分析'
        }
      ]
    }
  },

  methods: {
    ...mapActions(['setUser', 'setLoading', 'setIsShowAppNavBar']),
    handleResponse (response) {
      this.setLoading(false)
      if (response.status !== 200) {
        if (response.status === 408 || !response.ok) {
          this.showError('请检查网络连接或联系IT人员')
        } else {
          this.showError('加载错误，请稍后重试！')
        }
      }
    },

    goChildern (path) {
      this.$router.push(path)
    }
  },

  watch: {
    $route () {
      if (this.$route.matched.length) {
        this.setIsShowAppNavBar(false)
      } else {
        this.setIsShowAppNavBar(true)
      }
    }
  }
}
</script>

<style>
/* 引入公共颜色样式 */
@import './assets/css/color.css';
@import './assets/css/index.css';

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
