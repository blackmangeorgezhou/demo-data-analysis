<template>
  <div class="w-h-100">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :bgColor="'#409EFF'"
    :rightType="'back'"></nav-bar>
    <div :id="elementId">
      <div style="width: 1100px; margin: 0 auto">
        <div class="display-around">
        <div v-for="(item, index) in departmentSalaryList" :key="index">
          <el-popover v-if="item.popover" placement="bottom" trigger="hover">

            <circle-compare-panel v-for="subItem in item.subSalaryList" :key="subItem.title"
            :type="'progress'"
            :title="subItem.title"
            :percentage="subItem.value + ''"
            :target="subItem.target"
            :textColor="subItem.textColor"></circle-compare-panel>

            <!-- slot reference -->
            <circle-compare-panel slot="reference"
            :type="'progress'"
            :title="item.title"
            :percentage="item.value + ''"
            :target="item.target"
            :textColor="item.textColor"
            :endWithTarget="item.endWithTarget"></circle-compare-panel>
          </el-popover>

          <circle-compare-panel v-else
          :type="'progress'"
          :title="item.title"
          :percentage="item.value + ''"
          :target="item.target"
          :textColor="item.textColor"
          :endWithTarget="item.endWithTarget"></circle-compare-panel>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="display-flex-wrap">
        <column-chart-compare-panel v-for="item in columnChartList"
        :key="item.categories[0]"
        :categoryList="item.categories"
        :width="item.seriesDataList[0].name === '招生人数' ? 300 : 350"
        :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
      </div>
      <el-divider></el-divider>
      <div class="display-flex padding-b-48">
        <div id="department-target-bottom-left" class="display-flex-wrap" style="width: 70%">
          <circle-compare-panel v-for="item in textCompareList"
          :height="120"
          :key="item.title"
          :title="item.title"
          :percentage="item.title === '人工效益' ? item.value + '' : item.value"
          :target="item.target"
          :textColor="item.textColor"></circle-compare-panel>
        </div>
        <div id="department-target-bottom-right" style="width: 30%; border-left: 1px solid #ccc">
          <column-chart-compare-panel v-for="item in excellentTeacherChartData"
          :key="item.categories[0]"
          :width="350"
          :height="450"
          :xAxisDirection="'vertical'"
          :categoryList="item.categories"
          :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
        </div>
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
    centerContentEle.style.overflow = 'auto'

    // const limitWidth = 1400
    // window.onresize = () => {
    //   let departmentTargetBottomLeftEle = document.getElementById('department-target-bottom-left')
    //   let departmentTargetBottomRightEle = document.getElementById('department-target-bottom-right')
    //   if (document.documentElement.clientWidth > limitWidth) {
    //     departmentTargetBottomLeftEle.style.width = '50%'
    //     departmentTargetBottomRightEle.style.width = '50%'
    //   } else {
    //     departmentTargetBottomLeftEle.style.width = '65%'
    //     departmentTargetBottomRightEle.style.width = '35%'
    //   }
    // }
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
        console.log('======> calculate')
        console.log(this.calculatePageData(response.data))
        console.log('======> calculate')
        this.mapPageData(this.calculatePageData(response.data))
      }
    },

    async mapPageData (data) {
      // 第一行：部门收入
      this.departmentSalaryList = [
        {
          title: '泡泡收入完成情况',
          value: data.PP_IcomCopletRate || 0,
          target: '不低于95%',
          textColor: this.mapTextColor(data.PP_IcomCopletRate, 95)
        },
        {
          title: '优能收入完成情况',
          value: data.YN_IcomCopletRate || 0,
          target: '不低于95%'
        },
        {
          title: '一对一收入完成情况',
          value: data.YDY_IcomCopletRate || 0,
          target: '不低于24%',
          endWithTarget: '苏 州'
        },
        {
          title: '国外收入完成情况',
          value: data.GW_IcomCopletRate || 0,
          target: '不低于12.1%',
          endWithTarget: '苏 州',
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
              data: [
                data.YN_SumerContinRate ? Number(data.YN_SumerContinRate) : 0,
                data.YN_UNSumerContinRate ? Number(data.YN_UNSumerContinRate) : 0
              ]
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
                data.YN_RecruitPersoTimIncreRate ? Number(data.YN_RecruitPersoTimIncreRate) - 100 : 0,
                data.GW_RecruitPersoNumIncreRate ? Number(data.GW_RecruitPersoNumIncreRate) - 100 : 0,
                data.GW_IcomIncreRate ? Number(data.GW_IcomIncreRate) - 100 : 0
              ]
            },

            {
              name: '目标值',
              data: [33, 4, 12.1]
            }
          ],
          categories: ['优能人次', '国外人数', '国外收入']
        },
        {
          seriesDataList: [
            {
              name: '招生人数',
              data: [
                data.GY_RecruitPersoNumCopletRate ? data.GY_RecruitPersoNumCopletRate : 0
              ]
            },

            {
              name: '目标值',
              data: [100]
            }
          ],
          categories: ['国际游学']
        }
      ]

      // 第三行：左
      this.textCompareList = [
        {
          title: '泡泡初级教师占比',
          // value: data.PP_PrimarTechRatio ? Number(data.PP_PrimarTechRatio) : 0,
          value: this.formateDisplayText(data.PP_PrimarTechRatio),
          target: '目标：不高于38%',
          textColor: this.mapTextColor('Greater', data.PP_PrimarTechRatio, 38)
        },
        {
          title: '泡泡小低春季占比',
          // value: data.PP_PrimarSprNormReadingHeadRatio ? Number(data.PP_PrimarSprNormReadingHeadRatio) : 0,
          value: '— —',
          target: '目标：不低于24%'
        },
        {
          title: '国外教师功底',
          // value: data.GW_TechSkilCompliaRate ? Number(data.GW_TechSkilCompliaRate) : 0,
          value: this.formateDisplayText(data.GW_TechSkilCompliaRate),
          target: '目标：不低于80%',
          textColor: this.mapTextColor('less', data.GW_TechSkilCompliaRate, 80)
        },
        {
          title: 'NPS值',
          // value: data.KF_NPS ? Number(data.KF_NPS) : 0,
          value: this.formateDisplayText(data.KF_NPS / 100),
          target: '目标：不低于81.68%',
          textColor: this.mapTextColor('less', data.KF_NPS, 81.68)
        },
        {
          title: '人工效益',
          // value: data.RL_ArtificBnefit ? Number(data.RL_ArtificBnefit) : 0,
          value: data.RL_ArtificBnefit / 100 || 0,
          target: '目标：不低于2.3',
          textColor: this.mapTextColor('less', data.RL_ArtificBnefit, 2.3)
        },
        {
          title: '司龄3到12月教师离职率',
          // value: data.RL_NewTechDimisRate ? Number(data.RL_NewTechDimisRate) : 0,
          value: this.formateDisplayText(data.RL_NewTechDimisRate),
          target: '目标：不高于35%',
          textColor: this.mapTextColor('Greater', data.RL_NewTechDimisRate, 35)
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
    },

    calculatePageData (data) {
      let newData = {}

      const keys = Object.keys(data)
      let keySet = new Set()
      for (let key of keys) {
        keySet.add(key.substring(0, key.lastIndexOf('_')))
      }

      const finalKeys = Array.from(keySet)
      for (let fK of finalKeys) {
        newData[fK] = data[fK + '_FM'] ? Formate.fixedDecimalBits(data[fK + '_FZ'] / data[fK + '_FM'], 4) : 0
      }

      return newData
    },

    formateDisplayText (value) {
      return `${value || 0}%`
    },

    mapTextColor (type, value, target, displayColor = '#67c23a') {
      value = value ? Number(value) : 0
      if (type === 'Greater') {
        return value > target ? '#ff4949' : displayColor
      } else {
        return value < target ? '#ff4949' : displayColor
      }
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
