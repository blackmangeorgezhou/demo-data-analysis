import Vue from 'vue'
import Router from 'vue-router'
import CampusClassRoomPage from '@/views/CampusClassRoomPage'
import DepartmentTargetAnalysisPage from '@/views/DepartmentTargetAnalysisPage'

import store from '@/store'
import { storeLocalStorage } from '@/utils'

Vue.use(Router)

let router = new Router({
  base: '/demo-data-analysis/home',
  routes: [
    {
      path: '',
      redirect: '/demo-data-analysis/home'
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

  next()
})

export default router
