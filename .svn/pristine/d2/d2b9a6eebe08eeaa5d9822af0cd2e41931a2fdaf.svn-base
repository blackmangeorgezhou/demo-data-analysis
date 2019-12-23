<template>
  <div id="index-page">
    <div :id="elementId">
      <el-tabs class="school_salary_tabs">
        <el-tab-pane>
          <span slot="label">
            <span>少儿教师功底</span>
          </span>
          <Children></Children>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <span>中学教师功底</span>
          </span>
          <MiddleSchool></MiddleSchool>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <span>一对一教师功底</span>
          </span>
          <oneByone></oneByone>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label">
            <span>国外教师功底</span>
          </span>
          <english></english>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Children from "./children"
import MiddleSchool from "./middleSchool"
import oneByone from "./oneByone"
import english from "./english"

import { Formate } from '@/utils'
export default {
  name: 'teachingIndex',
  components: {
      Children,
      MiddleSchool,
      oneByone,
      english
  },

  data () {
    return {
      navBarId: ''
    }
  },

  computed: {
    elementId () {
      return `campus-class-room-${Formate.generateUUID()}`
    }
  },

  mounted () {},

  methods: {
    getNavBarId (id) {
      this.navBarId = id
    }
  }
}
</script>

<style>
#index-page {
  padding: 1rem 0 0 1rem;
}

.school_salary_tabs .el-tabs__item  {
  font-size: 14px;
  padding: 0 3.5rem;
}
.school_salary_tabs .is-active  {
  color:#27C2C1;
}
.school_salary_tabs .el-tabs__item:hover  {
  color:#27C2C1;
}

.school_salary_tabs .el-tabs__active-bar {
  background-color:#27C2C1;
}
</style>
