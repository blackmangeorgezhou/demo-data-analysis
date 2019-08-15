<template>
  <div :id="elementId" class="column-chart-compare-panel" :style="{width: width +'px', height: width + 'px', margin: '2rem auto'}">

  </div>
</template>

<script>
import { Formate } from '@/utils'

export default {
  name: 'ColumnChartComparePanel',

  props: {
    height: {
      type: Number,
      default: 350
    },

    width: {
      type: Number,
      default: 250
    },

    xAxisDirection: {
      type: String,
      default: 'horizontal' // horizontal & vertical
    },

    title: {
      type: Object,
      default: () => {
        return {
          text: '',
          subtext: ''
        }
      }
    },

    seriesDataList: {
      type: Array,
      default: () => {
        return [
          {
            name: '入库',
            type: 'bar',
            data: [65, 85],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 16
                  },
                  formatter: '{c}%'
                }
              }
            }
          },
          {
            name: '出库',
            type: 'bar',
            data: [55, 63],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 16
                  },
                  formatter: '{c}%'
                }
              }
            }
          }
        ]
      }
    },

    categoryList: {
      type: Array,
      default: () => {
        return ['泡泡', '中学']
      }
    }
  },

  data () {
    return {
      xAxisObj: [
        {
          type: 'value',
          boundaryGap: [0, 0.01],
          max: 100
        },
        {
          type: 'category',
          data: []
        }
      ]
    }
  },

  computed: {
    elementId () {
      return `column-chart-compare-panel-${Formate.generateUUID()}`
    }
  },

  mounted () {
    this.renderEchart()
  },

  methods: {
    renderEchart () {
      let echartArea = this.$echarts.init(document.getElementById(this.elementId))
      const echartOptions = this.generateChartOptions()
      console.log(echartOptions)
      echartArea.setOption(echartOptions)
    },

    generateChartOptions () {
      this.xAxisObj[1].data = this.categoryList

      return {
        title: this.title,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: this.seriesDataList.map(x => x.name)
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: this.xAxisDirection === 'vertical' ? this.xAxisObj[0] : this.xAxisObj[1],
        yAxis: this.xAxisDirection === 'vertical' ? this.xAxisObj[1] : this.xAxisObj[0],
        series: this.generateSeriesData()
      }
    },

    generateSeriesData () {
      if (!this.seriesDataList || !this.seriesDataList.length) {
        console.log('未传【series data】')
        return []
      }

      let newList = []
      for (let item of this.seriesDataList) {
        newList.push({
          name: item.name,
          type: 'bar',
          data: item.data,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 16
                },
                formatter: '{c}%'
              }
            }
          }
        })
      }
      return newList
    }
  }
}
</script>
