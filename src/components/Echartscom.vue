<template>
  <div :id="echarts" :style="{height:CanvasHeight}" ref="echarts">
  </div>
</template>
 
<script>
  import echarts from 'echarts'
  import theme from '@/assets/js/theme2'
  export default {
    name:'echartscom',
    props:{
        isShow:{
          default:false
        },
        echarts:{
          default:'echarts',
          type:String
        },
        DataList:{
          default:()=>{
            return {}
          },
          type:Object,
        },
        CanvasHeight:{
          default:"400px"
        },
        CanvasWidth:{
          default:"500px"
        },
        type:{
          default:'bar',
          type:String
        },
        isTranslated:{
          default:false,
          type:Boolean
        },
        isSetDataZoom:{
          default:false,
          type:Boolean
        },
        isTwoyaxis:{
          default:false,
          type:Boolean
        }
    },
    data() {
        return {
          isPieType:false,
          xAxis:[
            {
              type: 'category',
              data: this.DataList.XlaixName,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis:[
            {
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          twoYaxis:{
              type: "value",
              axisLabel: {
                  formatter: '{value} %'
              }
          },
          dataZoom: [{
            type: 'slider',
            xAxisIndex:0,    
            filterMode: 'empty',
            start: 0,
            x:'0',
            end: 30,
            handleStyle:{
                color:"#519cff",
                backgroundColor:'#519cff'
            },
            textStyle:{
                color:"#000"},
            borderColor:"#519cff"
          }],
        };
    },
    watch:{
      isShow(val){
        if(val){
          this.drawCharts();
        }
      }
    },
    mounted() {
      if (this.isTwoyaxis) {
        this.yAxis.push(this.twoYaxis);
      }
      if (this.type == "pie") {
        this.isPieType = true;
      }
    },
    methods: {
      drawCharts() {
        this.xAxis[0].data=this.DataList.XlaixName;
        var myChart = echarts.init(document.getElementById(this.echarts),theme);
        var option = {
            title: {
              text: this.DataList.TitleName,
              x:this.isPieType?'center':''
            },
            tooltip: {
                trigger: this.isPieType?"item":"axis",
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend:this.isPieType? { orient: 'vertical',left: 'left'}:{},
            xAxis:this.isPieType?"":this.isTranslated?this.yAxis:this.xAxis,
            yAxis:this.isPieType?"":this.isTranslated?this.xAxis:this.yAxis,
            series:this.isPieType?[{type: 'pie',data:this.DataList.YlaixData,radius:'50%'}]:this.DataList.YlaixData,
            dataZoom:this.isSetDataZoom?this.dataZoom:""
        };
        myChart.setOption(option);
      }
    },
  };
 </script>
