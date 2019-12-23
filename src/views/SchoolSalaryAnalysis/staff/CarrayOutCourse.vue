<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="A_typeNpsList"
        :type="type"
        :isTranslated="true"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="totalCourse"
        :DataList="TotalCourseList"
        :type="pieType"
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
            echarts:"carryOutLesson",
            totalCourse:'totalCourse',
            type:"bar",
            pieType:"pie",
            A_typeNpsList:{
                TitleName:'行课情况',
                XlaixName:["国外部","一对一","中学部","斯林姆","少儿部"],
                YlaixData:[
                    {
                        name:"班均人数",
                        type:"bar",
                        data:[3.8, 1.1, 22.3, 11.55, 16.9]
                    },{
                        name:"带班量",
                        type:"bar",
                        data:[10.0,11.4,6.9,3.0,7.1],
                    },{
                        name:"带生数",
                        type:"bar",
                        data:[33.3,12.6,156.3,35.3,121.7],
                    },{
                        name:"带课课时量",
                        type:"bar",
                        data:[42.7,60.0,45.1,15.8,48.0]
                    }

                ]
            },
            TotalCourseList:{
                TitleName:'总课时量占比',
                XlaixName:["泡泡少儿","中学班教","中学个性化","国外考试"],
                YlaixData:[
                    {
                        name:"泡泡少儿",
                        value:"16457.22"
                    },{
                        name:"中学班教",
                        value:"20140"
                    },{
                        name:"中学个性化",
                        value:"10033"
                    },{
                        name:"国外考试",
                        value:"6581"
                    },

                ]
            },
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>