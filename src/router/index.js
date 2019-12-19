import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
import CampusClassRoomPage from '@/views/CampusClassRoomPage'
import DepartmentTargetAnalysisPage from '@/views/DepartmentTargetAnalysisPage'

import SchoolSalaryAnalysisPage from '@/views/SchoolSalaryAnalysisPage'

import store from '@/store'
import { storeLocalStorage } from '@/utils'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  // base: '/demo-data-analysis/',
  routes: [
    {
      path: '',
      redirect: '/demo-data-analysis/login'
    },
    {
      path: '/demo-data-analysis/login',
      name: '数据分析模板登录',
      component: LoginPage
    },
    {
      path: '/demo-data-analysis/home',
      name: '数据分析模板主页',
      component: HomePage
    },
    {
      path: '/demo-data-analysis/campus-classroom',
      name: '校区教师数据分析',
      component: CampusClassRoomPage
    },
    {
      path: '/demo-data-analysis/department-target',
      name: '部门指标汇总',
      component: DepartmentTargetAnalysisPage
    },
    {
      path: '/demo-data-analysis/school-salary',
      name: '学校经营数据',
      component: SchoolSalaryAnalysisPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 获取 LocalStorage 数据.
  const sessionStorageString = window.sessionStorage.getItem('data-analysis-demo')
  let lecturePageData = sessionStorageString ? JSON.parse(sessionStorageString) : null

  if (lecturePageData && lecturePageData.user) {
    storeLocalStorage(lecturePageData)
  }

  if (!store.state.user && lecturePageData) {
    store.replaceState(lecturePageData)
  }

  let isLogin = !!store.state.user
  if (!isLogin) {
    if (to.path.indexOf('/login') >= 0) next()
    else next('/')
  } else {
    next()
  }
})

export default router
