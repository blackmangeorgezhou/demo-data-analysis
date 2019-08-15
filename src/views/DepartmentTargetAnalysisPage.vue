<template>
  <div id="department-target-analysis" class="w-h-100">
    <nav-bar :canSelectTitle="false" :regionOptions="titleList" :bgColor="'#409EFF'"></nav-bar>
    <div class="display-flex-wrap">
       <circle-compare-panel v-for="(item, index) in departmentSalaryList"
        :key="index"
        :type="'progress'"
        :title="item.title"
        :percentage="item.value"></circle-compare-panel>

        <circle-compare-panel v-for="item in textCompareList"
        :key="item.title"
        :title="item.title"
        :percentage="item.value"
        :target="item.target"></circle-compare-panel>
    </div>

    <div class="display-flex-wrap">
      <column-chart-compare-panel v-for="item in columnChartList"
      :key="item.categories[0]"
      :categoryList="item.categories"
      :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CircleComparePanel from './CicrleComparePanel'
import ColumnChartComparePanel from './ColumnChartComparePanel'

export default {
  name: 'DepartmentTargetAnalysisPage',

  components: {
    NavBar,
    CircleComparePanel,
    ColumnChartComparePanel
  },

  data () {
    return {
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
          value: 20,
          target: '目标：不高于38%'
        },
        {
          title: '国外教师功底',
          value: 88,
          target: '目标：不低于80%'
        },
        {
          title: '人工效益',
          value: 2.43,
          target: '目标：不低于2.3'
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
              name: '续班率',
              data: [61, 63]
            },

            {
              name: '目标值',
              data: [46, 68]
            }
          ],
          categories: ['暑假两一', '非暑假两一']
        }
      ]
    }
  }
}
</script>
