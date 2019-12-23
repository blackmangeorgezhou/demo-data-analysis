<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="AreaCRM"
        :DataList="CRMBusinessList"
        :type="type"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="AreaCRMBusinessList"
        :type="barType"
        ></echarts-com>

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
            echarts:"CRM",
            AreaCRM:"AreaCRM",
            type:"pie",
            barType:'bar',
            CRMBusinessList:{
                TitleName:'渠道商机数量占比',
                XlaixName:["直访", "直电", "社群","市场","其他"],
                YlaixData:[
                    {
                        name:"直访",
                        value:"8191"
                    },{
                        name:"直电",
                        value:"1821"
                    },{
                        name:"社群",
                        value:"3389"
                    },{
                        name:"市场",
                        value:"1704"
                    },{
                        name:"其他",
                        value:"471"
                    }
                ]
            },
            AreaCRMBusinessList:{
                TitleName:'区域渠道商机量',
                XlaixName:["常熟区", "高新区", "姑苏区","呼叫","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:"直访商机",
                        data:[ 250, 867, 932, 1402, 1566, 847, 2327]
                    },{
                        name:"直电商机",
                        data:[ 18, 119, 94, 1029, 133, 146, 63, 219]
                    },{
                        name:"社群商机",
                        data:[ 46, 710, 428, 80, 597, 563, 154, 811]
                    },{
                        name:"市场商机",
                        data:[ 9, 295, 245, 234, 148, 223, 133, 417]
                    },{
                        name:"其他商机",	
                        data:[ 19, 205, 66, 28, 137, 66, 241, 113]
                    }

                ]
            }       
        }

    },
    created(){
       this.AreaCRMBusinessList.YlaixData=this.AreaCRMBusinessList.YlaixData.map((item,index)=>{
           item={
               name:item.name,
               data:item.data,
               type:"bar",
               stack:'相同的值'
           }

           return item
       })
    },
    methods:{

    }
}
</script>