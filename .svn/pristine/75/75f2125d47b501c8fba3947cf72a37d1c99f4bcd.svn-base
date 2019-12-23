<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="NewStudentsList"
        :type="type"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="childrenProption"
        :DataList="YongPropotionList"
        :type="barType"
        :isTwoyaxis="true"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="areaNewStudents"
        :DataList="areaNewStudentsList"
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
            echarts:"newStudentsProtion",
            type:"pie",
            childrenProption:"childrenProption",
            barType:"bar",
            areaNewStudents:"areaNewStudents",
            NewStudentsList:{
                TitleName:'新生类型占比',
                XlaixName:["纯新生", "隔季生", "扩科生"],
                YlaixData:[
                    {
                    name:"纯新生",
                    value:"5850"
                    },{
                    name:"隔季生",
                    value:"1074"
                    },{
                    name:" 扩科生",
                    value:"1864"
                    }
                ]
            },
            YongPropotionList:{
                TitleName:'少儿低幼占比',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:"非低幼",
                        data:[ 250, 867, 932 , 1402, 1566, 847, 2327]
                    },{
                        name:"低幼",
                        data:[ 18, 119, 94, 133, 146, 63, 219]
                    },{
                        name:"FY20Q2低幼占比",
                        yAxisIndex: 1,
                        data:[ 25,23,22,20,19,17,12]
                    }
                ]
            }, 
            areaNewStudentsList:{
                TitleName:'区域新生人数',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:'纯新生',
                        data:[ 362, 1273, 1151, 1744, 1580, 746, 1720],
                    },{
                        name:" 隔季生",
                        data:[ 20, 216, 208, 310, 409, 59, 353],
                    },{
                        name:"扩科生",
                        data:[ 99, 378, 370, 663, 524, 166, 532]
                    }
                ]
            }
        }
    },
    created(){
        let typeArr=[{type:"bar",stack:"给定的值"},{type:"bar",stack:"给定的值"},{type:"line",stack:""}];
        typeArr.forEach((item,index)=>{
            this.YongPropotionList.YlaixData[index].type=item.type;
            this.YongPropotionList.YlaixData[index].stack=item.stack;
        });
        this.areaNewStudentsList.YlaixData=this.areaNewStudentsList.YlaixData.map(item=>{
            item={
                name:item.name,
                data:item.data,
                type:"bar",
                stack:"same"
            }
            return item
        })
    },
    methods:{

    }
}
</script>