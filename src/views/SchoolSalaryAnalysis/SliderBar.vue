<template>
  <div id="side-bar">
    <el-menu
      :default-active="$route.path"
      :collapse="$store.state.isCollapse"
      background-color="#FFFFFF"
      text-color="#666666"
      active-text-color="#27c2c1"
      class="el-menu-vertical-demo">
      <template v-for="(item, index) in permissionList">
        <el-submenu v-if="item.Children && item.Children.length > 0" :key="index" :index="item.UrlAddress">
          <template slot="title">
            <i :class="item.IconClass"></i>
            <span :style="{opacity:$store.state.sidebar.opacity}">{{item.RouterName}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(child, childIndex) in item.Children" :index="child.UrlAddress" :key="childIndex" @click="goRouter(child)">
              <template>
                <i :class="child.IconClass"></i>
                <span slot="title">{{child.RouterName}}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item v-else-if="item.IsMenu || (!item.IsMenu && !item.Children)" :key="index" :index="item.UrlAddress" @click="goRouter(item)">
          <template>
            <i :class="item.IconClass"></i>
            <span :style="{opacity:$store.state.sidebar.opacity}" slot="title">{{item.RouterName}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: 'SideBar',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: String,
      default: '0'
    },
  },
  data(){
     return {
         a:[
             {
                RouterName: "首页",
                UrlAddress: "/demo-data-analysis/school-salary/index",
                IsMenu: true,
                IconClass:'el-icon-house',
             },{  
                RouterName: "财务管理部",
                UrlAddress: "/demo-data-analysis/school-salary/finance",
                IsMenu: true,
                IconClass:'el-icon-money',
                Children:[
                    {
                        RouterName: "报名收入",
                        UrlAddress: "/demo-data-analysis/school-salary/finance/registerIncome",
                    },{
                        RouterName: "结转收入",
                        UrlAddress: "/demo-data-analysis/school-salary/finance/carry-overIncome",
                    }
                ]
             },{
                RouterName: "客户服务部",
                UrlAddress: "/demo-data-analysis/school-salary/customer",
                IsMenu: true,
                IconClass:'el-icon-headset',
                Children:[
                    {
                        RouterName: "NPS",
                        UrlAddress: "/demo-data-analysis/school-salary/customer/nps",
                    },{
                        RouterName: "CRM",
                        UrlAddress: "/demo-data-analysis/school-salary/customer/crm",
                    },{
                        RouterName: "新生报班",
                        UrlAddress: "/demo-data-analysis/school-salary/customer/newStudents",
                    },{
                        RouterName: "退费",
                        UrlAddress: "/demo-data-analysis/school-salary/customer/returnPremium",
                    }
                ]
             },{
                RouterName: "市场营销部",
                UrlAddress: "/demo-data-analysis/school-salary/market",
                IsMenu: true,
                IconClass:'el-icon-s-marketing',
                Children:[
                    {
                        RouterName: "市场调研",
                        UrlAddress: "/demo-data-analysis/school-salary/market/survey",
                    }
                ]
             },{
                RouterName: "教务管理部",
                UrlAddress: "/demo-data-analysis/school-salary/EDUadministration",
                IsMenu: true,
                IconClass:'el-icon-collection',
                Children:[
                    {
                        RouterName: "班级",
                        UrlAddress: "/demo-data-analysis/school-salary/EDUadministration/class",
                    },{
                        RouterName: "教室",
                        UrlAddress: "/demo-data-analysis/school-salary/EDUadministration/classRoom",
                    },{
                        RouterName: "续班",
                        UrlAddress: "/demo-data-analysis/school-salary/EDUadministration/ContinueClass",
                    },
                ]
             },{
                RouterName: "人力资源部",
                UrlAddress: "/demo-data-analysis/school-salary/staff",
                IsMenu: true,
                IconClass:'el-icon-s-custom',
                Children:[
                    {
                        RouterName: "人力成本",
                        UrlAddress: "/demo-data-analysis/school-salary/staff/degression",
                    },{
                        RouterName: "招聘",
                        UrlAddress: "/demo-data-analysis/school-salary/staff/recruit",
                    },{
                        RouterName: "行课(人效管理)",
                        UrlAddress: "/demo-data-analysis/school-salary/staff/carrayOutLesson",
                    }
                ]
             },{
                RouterName: "教学管理部",
                UrlAddress: "/demo-data-analysis/school-salary/teaching",
                IsMenu: true,
                IconClass:'el-icon-reading',
             },{
                RouterName: "资产管理部",
                UrlAddress: "/demo-data-analysis/school-salary/property",
                IsMenu: true,
                IconClass:'el-icon-office-building',
             }
         ]
     } 
  },
  computed:{
    ...mapState({permissionList: state => state.permissionList}),
  },
  methods: {
    goRouter (item) {
      this.$router.push(item.UrlAddress);
    }
  }
}
</script>

<style scoped>
#side-bar .el-menu .el-menu-item {
  min-width: 0;
}

.el-submenu__title{
  padding-left: 0px!important;
}
span {
  font-size: 0.875rem;
  padding: 0;
}
i {
  font-size: 1rem;
  color: #27c2c1;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 10rem /* 160/16 */;
  }
</style>
