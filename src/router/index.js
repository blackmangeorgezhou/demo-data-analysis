import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
import CampusClassRoomPage from '@/views/CampusClassRoomPage'
import DepartmentTargetAnalysisPage from '@/views/DepartmentTargetAnalysisPage'
// ===》 school-salary
import SchoolSalaryIndexPage from '@/views/SchoolSalaryAnalysis/Index'
import SchoolSalaryIndexPageData from '@/views/SchoolSalaryAnalysis/DataIndexPage/Index'
import simpleIndexPage from '@/views/SchoolSalaryAnalysis/homePage/Index'
// 客服部
import CustomerServise from '@/views/SchoolSalaryAnalysis/customerServise/Index'
import CRM from '@/views/SchoolSalaryAnalysis/customerServise/CRM'
import NPS from '@/views/SchoolSalaryAnalysis/customerServise/NPS'
import NewStudents from '@/views/SchoolSalaryAnalysis/customerServise/NewStudents'
import ReturnPremium from '@/views/SchoolSalaryAnalysis/CustomerServise/ReturnPremium'
// 教务管理
import EDUadministration from '@/views/SchoolSalaryAnalysis/EDUadministration/Index'
import Class from '@/views/SchoolSalaryAnalysis/EDUadministration/Class'
import ClassRoom from '@/views/SchoolSalaryAnalysis/EDUadministration/ClassRoom'
import ContinueClass from '@/views/SchoolSalaryAnalysis/EDUadministration/ContinueClass'
// 财管部
import Finance from '@/views/SchoolSalaryAnalysis/Finance/Index'
import CarrayOverIncome from '@/views/SchoolSalaryAnalysis/Finance/CarrayOverIncome'
import RegisterIncome from '@/views/SchoolSalaryAnalysis/Finance/RegisterIncome'
// 教务管理部
import Staff from '@/views/SchoolSalaryAnalysis/staff/Index'
import StaffDegression from '@/views/SchoolSalaryAnalysis/staff/StaffDegression'
import Recruit from '@/views/SchoolSalaryAnalysis/staff/Recruit'
import CarrayOutCourseLesson from '@/views/SchoolSalaryAnalysis/Staff/CarrayOutCourse'
// 人力资源部
import MarketData from '@/views/SchoolSalaryAnalysis/market/MarketData'
// 教学管理部
import TeachingData from '@/views/SchoolSalaryAnalysis/teaching/Index'
// 资产部
import PropertyData from '@/views/SchoolSalaryAnalysis/property/Index'

import store from '@/store'
import {storeLocalStorage} from '@/utils'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 错误
const ErrorPage = () =>
  import('@/views/ErrorPage/Index')
const NotFind404Page = () =>
  import('@/views/ErrorPage/404')
const NoPermissionPage = () =>
  import('@/views/ErrorPage/NoPermission')
const NetworkErrorPage = () =>
  import('@/views/ErrorPage/NetworkError')
Vue.use(Router)

let router = new Router({
  // mode:'history',
  base: '/demo-data-analysis/',
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
      path: '/demo-data-analysis/school-salary/index',
      name: '数据首页',
      component: SchoolSalaryIndexPageData
    }, {
      path: '/demo-data-analysis/school-salary',
      name: '学校经营数据',
      component: SchoolSalaryIndexPage,
      children: [{
        path: '',
        redirect: 'homePage'
      },
      {
        path: 'homePage',
        component: simpleIndexPage,
        name: '首页'
      },
      {
        path: 'finance',
        name: '财务管理部',
        component: Finance,
        children: [{
          path: 'registerIncome',
          name: '报名收入',
          component: RegisterIncome
        }, {
          path: 'carry-overIncome',
          name: '结转收入',
          component: CarrayOverIncome
        }]
      }, {
        path: 'customer',
        name: '客户服务部',
        component: CustomerServise,
        children: [{
          path: 'nps',
          name: 'NPS',
          component: NPS
        }, {
          path: 'crm',
          name: 'CRM',
          component: CRM
        }, {
          path: 'newStudents',
          name: '新生报班',
          component: NewStudents
        }, {
          path: 'returnPremium',
          name: '退费',
          component: ReturnPremium
        }]
      }, {
        path: 'market',
        name: '市场营销部',
        component: MarketData,
        children: [{
          path: 'survey',
          name: '市场调研',
          component: MarketData
        }]
      }, {
        path: 'EDUadministration',
        name: '教务管理部',
        component: EDUadministration,
        children: [{
          path: 'class',
          name: '班级',
          component: Class
        }, {
          path: 'classRoom',
          name: '教室',
          component: ClassRoom
        }, {
          path: 'ContinueClass',
          name: '续班',
          component: ContinueClass
        }]
      }, {
        path: 'staff',
        name: '人力资源部',
        component: Staff,
        children: [{
          path: 'degression',
          name: '人力成本',
          component: StaffDegression
        }, {
          path: 'recruit',
          name: '招聘',
          component: Recruit
        }, {
          path: 'carrayOutLesson',
          name: '行课(人效管理)',
          component: CarrayOutCourseLesson
        }]
      }, {
        path: 'teaching',
        name: '教学管理部',
        component: TeachingData
      }, {
        path: 'property',
        name: '资产管理部',
        component: PropertyData
      }
      ]
    },
    {
      path: '/error',
      name: '错误',
      component: ErrorPage,
      children: [{
        path: 'no-permissions',
        name: '无权限',
        component: NoPermissionPage
      },
      {
        path: '404',
        name: '页面错误',
        component: NotFind404Page
      },
      {
        path: 'network-error',
        name: '网络错误',
        component: NetworkErrorPage
      },
      {
        path: '',
        redirect: '404'
      }
      ]
    },
    {
      path: '*',
      redirect: '/error',
      hidden: true
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // 获取 LocalStorage 数据.
  const sessionStorageString = window.sessionStorage.getItem('data-analysis-demo')
  let lecturePageData = sessionStorageString ? JSON.parse(sessionStorageString) : null

  if (lecturePageData && lecturePageData.user) {
    storeLocalStorage(lecturePageData)
  }

  if (!store.state.user && lecturePageData) {
    store.replaceState(lecturePageData)
  }

  // let isLogin = !!store.state.user
  // if (isLogin) {
  //   console.log(store.state)
  //   console.log(store.state.user)

  //   let userPermissions = store.state.UserRouterList
  //   // 获取 permissonList

  //   if (!userPermissions || !userPermissions.length) {
  //       const roleLevel = store.state.user.UserRouterList.F_Level
  //       console.log(userPermissions)
  //       console.log(roleLevel)
  //       const name = "运营中心"
  //       const level = roleLevel
  //       let permissionResult = await API.getRole(name, level)
  //       if (permissionResult.data) {
  //         userPermissions = Convertor.convertRouterList(permissionResult.data)
  //         store.state.permissionList = userPermissions
  //       }
  //   }
  //   console.log(userPermissions)
  //   if (userPermissions) {
  //     // log out
  //     if (to.path === '/login') {
  //       clearStoreCache()
  //       isLogin = false
  //       // printInfo('isLogin: ' + isLogin)
  //     }

  //     next()
  //   } else {
  //     if (to.path === '/no-permission') {
  //       // 按未登录用户处理
  //       clearStoreCache()
  //       next()
  //     }

  //     // printInfo('User has no permission, Please contact to IT Employee！！！')
  //     next('/no-permission')
  //   }
  // } else {
  //   // 登录和修改密码
  //   if (to.path.indexOf('/login') >= 0) next()
  //   else next('/login')
  // }
  next()
})

export default router
