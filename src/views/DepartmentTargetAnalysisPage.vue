<template>
  <div class="w-h-100">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :bgColor="'#409EFF'"
    :rightType="'back'"></nav-bar>
    <div :id="elementId">
      <div class="display-around">
        <div v-for="(item, index) in departmentSalaryList" :key="index">
          <el-popover v-if="item.popover" placement="bottom" trigger="hover">

            <circle-compare-panel v-for="item in item.subSalaryList" :key="item.title"
            :type="'progress'"
            :title="item.title"
            :percentage="item.value"
            :target="item.target"></circle-compare-panel>

            <!-- slot reference -->
            <circle-compare-panel slot="reference"
            :type="'progress'"
            :title="item.title"
            :percentage="item.value"
            :target="item.target"></circle-compare-panel>
          </el-popover>

          <circle-compare-panel v-else
          :type="'progress'"
          :title="item.title"
          :percentage="item.value"
          :target="item.target"></circle-compare-panel>
        </div>
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
          <column-chart-compare-panel v-for="item in excellentTeacherChartData"
          :key="item.categories[0]"
          :width="550"
          :height="800"
          :xAxisDirection="'vertical'"
          :categoryList="item.categories"
          :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
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
import { API } from '@/services'
import { ResultCode } from '@/common'
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
      departmentSalaryList: [],

      textCompareList: [],

      titleList: [
        {
          label: '部门指标汇总分析',
          value: '部门指标汇总分析'
        }
      ],

      columnChartList: [],

      excellentTeacherChartData: []
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

  async created () {
    await this.loaddata()
  },

  computed: {
    elementId () {
      return `department-target-analysis-${Formate.generateUUID()}`
    }
  },

  methods: {
    getNavBarId (id) {
      this.navBarId = id
    },

    async loaddata () {
      let response = await API.getDepartmentTargetData()
      if (response && response.resultCode === ResultCode.OK) {
        this.mapPageData(response.data)
      }
    },

    async mapPageData (data) {
      console.log(data)
      // 第一行：部门收入
      this.departmentSalaryList = [
        {
          title: '泡泡收入完成情况',
          value: Number(data.PP_IcomCopletRate) || 0,
          target: '不低于95%'
        },
        {
          title: '优能收入完成情况',
          value: Number(data.YN_IcomCopletRate) || 0,
          target: '不低于95%'
        },
        {
          title: '一对一收入完成情况',
          value: Number(data.YDY_IcomCopletRate) || 0,
          target: '不低于24%'
        },
        {
          title: '国外收入完成情况',
          value: Number(data.GW_IcomIncreRate) || 0,
          target: '不低于12.1%',
          subSalaryList: [
            {
              title: 'VIP收入完成情况',
              value: Number(data.GW_IcomCopletRateVIP) || 0
            },
            {
              title: '大班收入完成情况',
              value: Number(data.GW_IcomCopletRateDB) || 0
            }
          ]
        }
      ]

      // 第二行：续报率; 招生增长率
      this.columnChartList = [
        {
          seriesDataList: [
            {
              name: '续报率',
              data: [(data.YN_SumerContinRate ? Number(data.YN_SumerContinRate) : 0), (data.YN_UNSumerContinRate ? Number(data.YN_UNSumerContinRate) : 0)]
            },

            {
              name: '目标值',
              data: [43, 75]
            }
          ],
          categories: ['中学暑假两一', '中学非暑假两一']
        },
        {
          seriesDataList: [
            {
              name: '招生增长率',
              data: [
                data.YN_RecruitPersoTimIncreRate ? Number(data.YN_RecruitPersoTimIncreRate) : 0,
                data.GW_RecruitPersoNumIncreRate ? Number(data.GW_RecruitPersoNumIncreRate) : 0,
                data.GY_RecruitPersoNumCopletRate ? Number(data.GY_RecruitPersoNumCopletRate) : 0
              ]
            },

            {
              name: '目标值',
              data: [33, 6.6, 100]
            }
          ],
          categories: ['优能', '国外', '国游']
        }
      ]

      // 第三行：左
      this.textCompareList = [
        {
          title: '泡泡初级教师占比',
          value: data.PP_PrimarTechRatio ? Number(data.PP_PrimarTechRatio) : 0,
          target: '目标：不高于38%'
        },
        {
          title: '泡泡小低春季占比',
          value: data.PP_PrimarSprNormReadingHeadRatio ? Number(data.PP_PrimarSprNormReadingHeadRatio) : 0,
          target: '目标：不低于21%'
        },
        {
          title: '国外教师功底',
          value: data.GW_TechSkilCompliaRate ? Number(data.GW_TechSkilCompliaRate) : 0,
          target: '目标：不低于80%'
        },
        {
          title: 'NPS值',
          value: data.KF_NPS ? Number(data.KF_NPS) : 0,
          target: '目标：不低于81.68%'
        },
        {
          title: '人工效益',
          value: data.RL_ArtificBnefit ? Number(data.RL_ArtificBnefit) : 0,
          target: '目标：不低于2.3'
        },
        {
          title: '司龄3到12月教师离职率',
          value: data.RL_NewTechDimisRate ? Number(data.RL_NewTechDimisRate) : 0,
          target: '目标：不高于35%'
        }
      ]

      // 第三行：右
      this.excellentTeacherChartData = [{
        seriesDataList: [
          {
            name: '优秀老师占比',
            data: [
              data.RL_GWExclletQualificRatio ? Number(data.RL_GWExclletQualificRatio) : 0,
              data.RL_YDYExclletQualificRatio ? Number(data.RL_YDYExclletQualificRatio) : 0,
              data.RL_YNExclletQualificRatio ? Number(data.RL_YNExclletQualificRatio) : 0,
              data.RL_PPExclletQualificRatio ? Number(data.RL_PPExclletQualificRatio) : 0
            ]
          },

          {
            name: '目标值',
            data: [80, 65, 70, 45]
          }
        ],
        categories: ['国外', '优能一对一', '优能', '泡泡']
      }]
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
