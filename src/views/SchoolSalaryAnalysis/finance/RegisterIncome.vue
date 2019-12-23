<template>
    <div>
        <div style="width:900px;">
            <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
            :echarts="echarts"
            :DataList="RegisterIncomList"
            :type="type"></echarts-com>
        </div>
        
        <div style="width:900px;">
            <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
            :echarts="areaRegisterIncome"
            :DataList="AreaRegisterIncomList"
            :type="areaType"></echarts-com>
        </div>
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
            echarts:"registerIncome",
            areaRegisterIncome:'areaRegisterIncome',
            type:"pie",
            areaType:"bar",
            RegisterIncomList:{
                TitleName:'条线收入占比',
                XlaixName:["泡泡少儿","中学班教","中学个性化","国外考试"],
                YlaixData:[
                    {
                        name:" 泡泡少儿",
                        value:" 201405919"
                    },{
                        name:" 中学班教",
                        value:" 201405919"
                    },{
                        name:" 中学个性化",
                        value:" 100337784"
                    },{
                        name:" 国外考试",
                        value:" 100337784"
                    }

                ]
            },
            AreaRegisterIncomList:{
                TitleName:'区域收入',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:"FY20",
                        type:"bar",
                        data:[1638472,72417996.5,101857484.6,88683369.8,82782951.5,23128091.5,143710603.2]
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