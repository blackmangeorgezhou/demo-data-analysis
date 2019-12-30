<template>
  <div class="home-page">
    <nav-bar :canSelectTitle="false" :regionOptions="titleList"></nav-bar>
    <div class="display-flex-wrap">
      <circle-compare-panel v-for="(item, index) in demoProjectList"
      :key="index"
      @clickPanel="goChildern(item.path)"
      :type="'icon'"
      :bgColor="item.bgColor"
      :title="item.title"
      :panelIcon="item.icon"
      :tagIcon="true"></circle-compare-panel>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CircleComparePanel from '@/views/CicrleComparePanel'

export default {
  name: 'HomePage',

  components: {
    NavBar,
    CircleComparePanel
  },

  data () {
    return {
      demoProjectList: [
        {
          path: '/demo-data-analysis/campus-classroom',
          title: '生源率及教室产能分析',
          bgColor: '#098d91',
          icon: 'el-icon-pie-chart'
        },
        {
          path: '/demo-data-analysis/department-target',
          title: '学校绩效考核指标分析',
          icon: 'el-icon-data-analysis'
        },
        {
          path: '/demo-data-analysis/school-salary/index',
          title: '学校经营数据分析',
          bgColor: '#040f3c',
          icon: 'el-icon-s-marketing'
        }
      ],
      titleList: [
        {
          label: '苏州新东方数据分析模板预览',
          value: '苏州新东方数据分析模板预览'
        }
      ]
    }
  },

  methods: {
    goChildern (path) {
      this.$router.push(path)
    }
  }
}
</script>
