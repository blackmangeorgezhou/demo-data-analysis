<template>
  <div class="sz-salary w-h-100">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :bgColor="'#040f3c'"
    :rightType="'back'"></nav-bar>
    <div class="content-container">
      <slider-bar :isCollapse="$store.state.isCollapse" :style="{width:$store.state.sidebar.width+'px'}"></slider-bar>
      <div class="right-container" :style="{left:$store.state.sidebar.width+'px'}">
        <bread></bread>
        <div class="router-content">
          <router-view></router-view>
        </div>
        <div class="sz_salary_footer font-size-smaller">
          <span>{{copyrightMsg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Constants, ResultCode } from '@/common'
import NavBar from '@/components/NavBar'
import SliderBar from "./SliderBar"
import Bread from "./bread"
export default {
  name: 'SchoolSalaryAnalysis',
  components:{
    NavBar,
    SliderBar,
    Bread,
  },
  data () {
    return {
      copyrightMsg: Constants.defaultCopyRight,
      titleList: [
        {
          label: '苏州新东方经营数据中心',
          value: '苏州新东方经营数据中心'
        }
      ],
      navBarId: ''
    }
  },
  computed:{
    
  },
  methods:{
    getNavBarId (id) {
      this.navBarId = id
    },
  }
}
</script>
<style lang="less" scoped>
.sz-salary{
  background-color:#f0f2f5;
  overflow-x: hidden;
  
}
.sz-salary .g-nav-bar{
    width:100%;
    box-sizing: border-box;
    position:absolute;
    z-index:5;
    top:0;
    height: 63px;
}
.sz-salary #side-bar{
    position: absolute;
    width: 160px;
    top: 63px;
    left: 0;
    bottom: 0px;
    background-color: #ffffff;
    overflow-y: auto;
    overflow-x: hidden;
}
.sz-salary .right-container{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 160px;
    right: 0;
    bottom: 0;
    top: 63px;
    overflow-y: auto;
    >div{
      padding:20px;
    }
    .sz_salary_footer{
      flex: 1;
      position: relative;
      >span{
        color: #999999;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        line-height: 50px;
        background: #ffffff;
        width: 100%;
      }
    }
}
</style>
