<template>
  <div class="w-h-100">
    <nav-bar @transferElementId="getNavBarId"
    :canSelectTitle="false"
    :regionOptions="titleList"
    :bgColor="'#409EFF'"
    :rightType="'back'"></nav-bar>
    <div :id="elementId" ref="snapshot-canvas-area">
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
        :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
      </div>
      <el-divider></el-divider>
      <div class="display-flex padding-b-48">
        <div id="department-target-bottom-left" class="display-flex-wrap" style="width: 70%">
          <circle-compare-panel v-for="item in textCompareList"
          :height="120"
          :key="item.title"
          :title="item.title"
          :percentage="(item.title === '人工效益' || item.title === 'NPS值') ? item.value + '' : item.value"
          :target="item.target"
          :textColor="item.textColor"></circle-compare-panel>
        </div>
        <div id="department-target-bottom-right" style="width: 30%; border-left: 1px solid #ccc">
          <column-chart-compare-panel v-for="item in excellentTeacherChartData"
          :key="item.categories[0]"
          :width="320"
          :height="450"
          :xAxisDirection="'vertical'"
          :categoryList="item.categories"
          :seriesDataList="item.seriesDataList"></column-chart-compare-panel>
        </div>
      </div>
      </div>
    </div>
    <el-button @click="generateSnapShot" class="btn_snapShot" icon="el-icon-picture-outline" type="warning" circle title="生成快照"></el-button>
   </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CircleComparePanel from './CicrleComparePanel'
import ColumnChartComparePanel from './ColumnChartComparePanel'

import { Formate } from '@/utils'
import { API } from '@/services'
import { ResultCode } from '@/common'
import html2canvas from 'html2canvas'
import canvg from 'canvg'

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
          value: data.PP_IcomCopletRate ? Number(data.PP_IcomCopletRate).toFixed(0).toString() : 0,
          target: '不低于95%',
          textColor: this.mapTextColor(data.PP_IcomCopletRate, 95)
        },
        {
          title: '优能收入完成情况',
          value: data.YN_IcomCopletRate ? Number(data.YN_IcomCopletRate).toFixed(0).toString() : 0,
          target: '不低于95%'
        },
        {
          title: '一对一收入完成情况',
          value: data.YDY_IcomCopletRate ? Number(data.YDY_IcomCopletRate).toFixed(0).toString() : 0,
          target: '不低于24%',
          endWithTarget: '苏 州'
        },
        {
          title: '国外收入完成情况',
          value: data.GW_IcomCopletRate ? Number(data.GW_IcomCopletRate).toFixed(0).toString() : 0,
          target: '不低于12.1%',
          endWithTarget: '苏 州',
          subSalaryList: [
            {
              title: 'VIP收入完成情况',
              value: Number(data.GW_IcomCopletRateVIP) ? Number(data.GW_IcomCopletRateVIP).toFixed(0).toString() : 0
            },
            {
              title: '大班收入完成情况',
              value: Number(data.GW_IcomCopletRateDB) ? Number(data.GW_IcomCopletRateDB).toFixed(0).toString() : 0
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
                data.YN_SumerContinRate ? Number(data.YN_SumerContinRate).toFixed(0).toString() : 0,
                data.YN_UNSumerContinRate ? Number(data.YN_UNSumerContinRate).toFixed(0).toString() : 0
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
                data.YN_RecruitPersoTimIncreRate ? (Number(data.YN_RecruitPersoTimIncreRate) - 100).toFixed(0) : 0,
                data.GW_RecruitPersoNumIncreRate ? (Number(data.GW_RecruitPersoNumIncreRate) - 100).toFixed(0) : 0,
                data.GW_IcomIncreRate ? (Number(data.GW_IcomIncreRate) - 100).toFixed(0) : 0
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
                data.GY_RecruitPersoNumCopletRate ? Number(data.GY_RecruitPersoNumCopletRate).toFixed(0) : 0
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
          value: this.formateDisplayText(data.PP_PrimarTechRatio ? Number(data.PP_PrimarTechRatio).toFixed(0) : 0),
          target: '目标：不高于38%',
          textColor: this.mapTextColor('Greater', data.PP_PrimarTechRatio, 38)
        },
        {
          title: '泡泡小低春季占比',
          value: '— —',
          target: '目标：不低于24%'
        },
        {
          title: '国外教师功底',
          value: this.formateDisplayText(data.GW_TechSkilCompliaRate ? Number(data.GW_TechSkilCompliaRate).toFixed(0) : 0),
          target: '目标：不低于80%',
          textColor: this.mapTextColor('less', data.GW_TechSkilCompliaRate, 80)
        },
        {
          title: 'NPS值',
          value: data.KF_NPS.toString(),
          target: '目标：不低于81.68%',
          textColor: this.mapTextColor('less', data.KF_NPS, 81.68)
        },
        {
          title: '人工效益',
          value: (data.RL_ArtificBnefit / 100).toFixed(2).toString() || '0',
          target: '目标：不低于2.3',
          textColor: this.mapTextColor('less', data.RL_ArtificBnefit / 100, 2.3)
        },
        {
          title: '司龄3到12月教师离职率',
          value: this.formateDisplayText(data.RL_NewTechDimisRate ? Number(data.RL_NewTechDimisRate).toFixed(0) : 0),
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
              data.RL_GWExclletQualificRatio ? Number(data.RL_GWExclletQualificRatio).toFixed(0) : 0,
              data.RL_YDYExclletQualificRatio ? Number(data.RL_YDYExclletQualificRatio).toFixed(0) : 0,
              data.RL_YNExclletQualificRatio ? Number(data.RL_YNExclletQualificRatio).toFixed(0) : 0,
              data.RL_PPExclletQualificRatio ? Number(data.RL_PPExclletQualificRatio).toFixed(0) : 0
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
    },

    // 生成快照图片并下载.
    generateSnapShot () {
      const scale = 2

      let snapShotCanvas = this.$refs['snapshot-canvas-area']
      const originalHeight = snapShotCanvas.clientHeight
      snapShotCanvas.style.height = 'auto'
      snapShotCanvas.style.overflow = 'visible'
      const width = snapShotCanvas.clientWidth
      const height = snapShotCanvas.clientHeight

      const options = {
        scale,
        canvas: snapShotCanvas,
        width,
        height,
        useCORS: true
      }

      // 对svg的处理
      let nodesToRecover = []
      let nodesToRemove = []
      let svgEles = document.querySelectorAll(`#${this.elementId} svg`)

      svgEles.forEach((node, index) => {
        let parentNode = node.parentNode
        let svg = node.outerHTML
        let childCanvas = document.createElement('canvas')
        canvg(childCanvas, svg)
        if (node.style.position) {
          childCanvas.style.position += node.style.position
          childCanvas.style.left += node.style.left
          childCanvas.style.top += node.style.top
          childCanvas.style.width = node.clientWidth
          childCanvas.style.height = node.clientHeight
        }

        nodesToRecover.push({
          parent: parentNode,
          child: node
        })

        parentNode.removeChild(node)

        nodesToRemove.push({
          parent: parentNode,
          child: node
        })

        parentNode.appendChild(childCanvas)
      })

      const self = this
      setTimeout(() => {
        html2canvas(snapShotCanvas, options).then((canvas) => {
          const imgURL = canvas.toDataURL('image/jpeg')
          self.downloadImg(imgURL)
          snapShotCanvas.style.height = `${originalHeight}px`
          snapShotCanvas.style.overflow = 'auto'
        })
      }, 0)
    },

    downloadImg (imgURL) {
      let aLink = document.createElement('a')
      aLink.href = imgURL
      aLink.download = '校长看板.png'
      aLink.style.display = 'none'

      document.body.appendChild(aLink)
      aLink.click()
      document.body.removeChild(aLink)
    }
  }
}
</script>

<style>
.fixed-width {
  width: 1100px;
  margin: 0 atuo
}

.btn_snapShot {
  position: absolute;
  top: 5rem;
  right: 2rem
}
</style>
