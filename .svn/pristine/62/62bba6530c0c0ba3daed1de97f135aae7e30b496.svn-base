<template>
  <div id="index-page">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :rightType="'back'"></nav-bar>
    <div :id="elementId" class="central-content">
      <el-tabs>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-data-analysis"></i>
            <span>招生数据</span>
          </span>
          <admission-instruction></admission-instruction>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-bangzhu"></i>
            <span>扩科人数</span>
          </span>
          <expand-subject></expand-subject>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-data-line"></i>
            <span>续报率</span>
          </span>
          <rate-for-continue-class></rate-for-continue-class>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-school"></i>
            <span>教室产能</span>
          </span>
          <class-room-capcity></class-room-capcity>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-finished"></i>
            <span>联报人数</span>
          </span>
          <union-sign-up></union-sign-up>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import UnionSignUp from './UnionSignUp'
import ExpandSubject from './ExpandSubject'
import ClassRoomCapcity from './ClassRoomCapcity'
import AdmissionInstruction from './AdmissionInstruction'
import RateForContinueClass from './RateForContinueClass'
import OrganizationTree from '@/components/OrganizationTree'

import { Formate } from '@/utils'
export default {
  name: 'IndexPage',

  components: {
    NavBar,
    UnionSignUp,
    ExpandSubject,
    ClassRoomCapcity,
    OrganizationTree,
    RateForContinueClass,
    AdmissionInstruction
  },

  data () {
    return {
      titleList: [
        {
          label: '生源率及教室产能分析',
          value: '生源率及教室产能分析'
        }
      ],
      navBarId: ''
    }
  },

  computed: {
    elementId () {
      return `campus-class-room-${Formate.generateUUID()}`
    }
  },

  mounted () {
    const wH = window.innerHeight
    let navBarEle = document.getElementById(this.navBarId)
    const navHeight = navBarEle.clientHeight
    let centerContentEle = document.getElementById(this.elementId)
    centerContentEle.style.height = `${wH - navHeight}px`
    centerContentEle.style.overflow = 'auto'
  },

  methods: {
    getNavBarId (id) {
      this.navBarId = id
    }
  }
}
</script>

<style>
#index-page .central-content {
  padding: 1rem 0 0 1rem;
}

#index-page .central-content .el-tabs__item {
  font-size: 1.375rem;
  padding: 0 3.5rem;
}
</style>
