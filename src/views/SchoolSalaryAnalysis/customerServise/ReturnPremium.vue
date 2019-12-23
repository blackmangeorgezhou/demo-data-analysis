<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="CRMBusinessList"
        :type="type"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="returnCatchNum"
        :DataList="areaCarrayOverList"
        :type="barType"></echarts-com>
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
            echarts:"returnPremium",
            returnCatchNum:"returnCatchNum",
            type:"pie",
            barType:"bar",
            CRMBusinessList:{
                TitleName:'退费占比',
                XlaixName:["泡泡少儿","中学班教","中学个性化","国外考试"],
                YlaixData:[
                    {
                        name:"泡泡少儿",
                        value:"59564"
                    },{
                        name:"中学班教",
                        value:"132264"
                    },{
                        name:"中学个性化",
                        value:"138514"
                    },{
                        name:"国外考试",
                        value:"104709"
                    }
                ]
            },
            areaCarrayOverList:{
                TitleName:'退费金额分布',
                XlaixName:["常熟区","高新区","姑苏区","吴江区","吴中区","相城区","园区"],
                YlaixData:[
                    {
                        name:"区域退费金额",
                        type:'bar',
                        data:[11111,2222,3333,4444,5555,6666,7777]
                    }
                ]
            }       
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>