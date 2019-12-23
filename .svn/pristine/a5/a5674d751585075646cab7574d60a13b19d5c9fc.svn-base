<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="A_typeNpsList"
        :type="type"></echarts-com>

        <div class="query-section">
            <el-select  v-model="departmentVal">
                <el-option v-for="item in departmentList" :key="item" :label="item" :value="item"></el-option>
            </el-select>
        </div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="CampusNPS"
        :DataList="CampusNpsList"
        :type="type"
        :isSetDataZoom="true"></echarts-com>
    </div>
</template>
<script>
import EchartsCom from "@/components/Echartscom";
export default {
    components:{
        EchartsCom
    },
    data(){
        return {
            CanvasHeight:"400px",
            CanvasWidth:'900px',
            echarts:"NPS",
            CampusNPS:"NewNps",
            type:"bar",
            departmentList:["少儿","中学","一对一","国外","英学"],
            departmentVal:"少儿",
            A_typeNpsList:{
                TitleName:'A类学校NPS',
                XlaixName:["济南", "西安", "苏州", "合肥", "厦门", "武汉", "杭州", "南京", "重庆", "上海", "广州","北京"],
                YlaixData:[
                    {
                        name:"学校NPS",
                        data:[ "85.72","81.31","80.88","80.54","80.5","80.13","78.33","77.15","76.25","74.78","72.9","72.69",]
                    },
                    {
                        name:"少儿NPS",
                        data:[ "87.86","81.66",'81.71','80.69','80.44','79.26','76.97','76.82','72.84','72.82','73.69','73.79']
                    },
                    {
                        name:"中学NPS",
                        data:[ '85.63','82.5','80.29','81.65','81.32','82.87','79.31','79.71','80.39','77.28','75.37','77.07',]
                    },
                    {
                        name:"国外NPS",
                        data:[ '76.06','76.06','72.96','64.59','65.43','66.89','73.22','74.23','65.75','65.75','59.34','55.01',]
                    }
                ]
            },
            CampusNpsList:{
                TitleName:'校区NPS最新值 ',
                XlaixName:["常熟-崇文","常熟-东南邻里","姑苏-乐桥","姑苏-平江新城","姑苏-太阳广场","姑苏-星光耀","吴江-财智","吴江-三角井","吴江-永康","吴江-仲英大道","吴中-汇邻广场","吴中-世茂","吴中-双湖","吴中-吴中大厦","吴中-吴中商城","吴中-越溪","相城-宝燕商城","相城-陆慕","相城-御窑","新区-滨河路","新区-金河大厦","新区-木渎","新区-熙金广场","园区-方洲","园区-乐活城","园区-旺墩路","园区-星海","园区-中央景城"],
                YlaixData:[{
                    name:"初期值",
                    data:[ 65.72,81.31,70.88,80.54,80.5,80.5,95.13,78.33,77.15,76.25,74.78,72.9,72.69,65.72,81.31,70.88,80.54,80.5,95.13,78.33,77.15,76.25,74.78,72.9,72.69,,65.72,81.31,70.88,80.54]
                },
                {
                    name:"期末值",
                    data:[ 65.72,98.31,80.88,80.54,80.5,80.5,80.13,78.33,77.15,76.25,74.78,72.9,72.69,65.72,81.31,70.88,80.54,80.5,95.13,78.33,77.15,76.25,74.78,72.9,72.69,,65.72,81.31,70.88,80.54]
                },
                {
                    name:"目标值",
                    data:[ 85.72,81.31,80.88,80.54,80.5,80.5,80.13,78.33,77.15,76.25,74.78,72.9,72.69,65.72,81.31,70.88,80.54,80.5,95.13,78.33,77.15,76.25,74.78,72.9,72.69,,65.72,81.31,70.88,80.54]
                }
                ]
            }
        }
    },
    created(){
        this.type="bar";
        if(this.type!="pie"){
            this.A_typeNpsList.YlaixData=this.A_typeNpsList.YlaixData.map((item,index)=>{
                item={
                    name:item.name,
                    type:"bar",
                    data:item.data,
                }
                return item
            });
        };
        if(this.type!="pie"){
            let typeArr=["bar","line","line"]
            typeArr.forEach((item,index)=>{
                this.CampusNpsList.YlaixData[index].type=item;
            })
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.query-section{
    width: 240px;
    padding: .5rem;
    border-radius: 5px;
    background-color: #00C158;
    margin-top: 20px;
}
.el-select{
    width: 100%!important;
}
</style>