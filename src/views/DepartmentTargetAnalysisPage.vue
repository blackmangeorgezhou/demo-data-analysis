<template>
  <div class="w-h-100">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :bgColor="'#409EFF'"
    :rightType="'back'"></nav-bar>
    <div :id="elementId">
      <div class="display-around">
        <circle-compare-panel v-for="(item, index) in departmentSalaryList"
        :key="index"
        :type="'progress'"
        :title="item.title"
        :percentage="item.value"></circle-compare-panel>
      </div>
      <el-divider></el-divider>
      <div class="display-flex-wrap">
        <column-chart-compare-panel v-for="item in columnChartList"
        :key="item.categories[0]"
        :categoryList="item.categories"
        :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
      </div>
      <el-divider></el-divider>
      <div class="display-flex padding-b-48" style="width: 80%; margin: 0 auto">
        <div class="display-flex-wrap" style="width: 50%">
          <circle-compare-panel v-for="item in textCompareList"
          :key="item.title"
          :title="item.title"
          :percentage="item.value"
          :target="item.target"></circle-compare-panel>
        </div>
        <div style="width: 50%; border-left: 1px solid #ccc">
          <column-chart-compare-panel
          :width="550"
          :height="800"
          :xAxisDirection="'vertical'"
          :categoryList="excellentTeacherChartData.categories"
          :seriesDataList="excellentTeacherChartData.seriesDataList"></column-chart-compare-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CircleComparePanel from './CicrleComparePanel'
import ColumnChartComparePanel from './ColumnChartComparePanel'

import { Formate } from '@/utils'
export default {
  name: 'DepartmentTargetAnalysisPage',

  components: {
    NavBar,
    CircleComparePanel,
    ColumnChartComparePanel
  },

  data () {
    return {
      navBarId: '',
      departmentSalaryList: [
        {
          title: '泡泡收入完成情况',
          value: 30
        },
        {
          title: '优能收入完成情况',
          value: 67
        },
        {
          title: '国游招生人数完成率',
          value: 85
        }
      ],

      textCompareList: [
        {
          title: '泡泡初级教师占比',
          value: 29,
          target: '目标：不高于38%'
        },
        {
          title: '泡泡小低春季占比',
          value: 5,
          target: '目标：同比提升至少2%'
        },
        {
          title: '国外教师功底',
          value: 88,
          target: '目标：不低于80%'
        },
        {
          title: 'NPS值',
          value: 79.8,
          target: '目标：超C类均值80%'
        },
        {
          title: '人工效益',
          value: 2.43,
          target: '目标：不低于2.3'
        },
        {
          title: '司龄3到12月教师离职率',
          value: 3,
          target: '目标：不高于35%'
        }
      ],

      titleList: [
        {
          label: '部门指标汇总分析',
          value: '部门指标汇总分析'
        }
      ],

      columnChartList: [
        {
          seriesDataList: [
            {
              name: '续报率',
              data: [61, 63]
            },

            {
              name: '目标值',
              data: [46, 68]
            }
          ],
          categories: ['暑假两一', '非暑假两一']
        },
        {
          seriesDataList: [
            {
              name: '招生增长率',
              data: [16, 56, 49]
            },

            {
              name: '目标值',
              data: [25, 6.6, 19.9]
            }
          ],
          categories: ['优能人次', '国外人次', '国外收入']
        }
      ],

      excellentTeacherChartData: {
        seriesDataList: [
          {
            name: '优秀老师占比',
            data: [85, 63, 60, 42]
          },

          {
            name: '目标值',
            data: [80, 60, 70, 40]
          }
        ],
        categories: ['国外', '优能一对一', '优能', '泡泡']
      }
    }
  },

  mounted () {
    const wH = window.innerHeight
    let navBarEle = document.getElementById(this.navBarId)
    const navHeight = navBarEle.clientHeight
    let centerContentEle = document.getElementById(this.elementId)
    centerContentEle.style.height = `${wH - navHeight}px`
    // centerContentEle.style.width = '1100px'
    // centerContentEle.style.margin = '0 auto'
    centerContentEle.style.overflow = 'auto'
  },

  computed: {
    elementId () {
      return `department-target-analysis-${Formate.generateUUID()}`
    }
  },

  methods: {
    getNavBarId (id) {
      this.navBarId = id
    }
  }
}
</script>

<style>
.fixed-width {
  width: 1100px;
  margin: 0 atuo
}
</style>
