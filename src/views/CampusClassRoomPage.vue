<template>
  <div id="index-page">
    <nav-bar :canSelectTitle="false" :regionOptions="titleList"></nav-bar>
    <div class="central-content">
      <el-tabs>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-data-analysis"></i>
            <span>招生指示</span>
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
      ]
    }
  }
}
</script>

<style>
#index-page .central-content {
  padding-top: 1%;
  width: 95%;
  margin: 0 auto;
  overflow: auto;
}

#index-page .central-content .el-tabs__item {
  font-size: 1.375rem;
  padding: 0 3.5rem;
}
</style>
