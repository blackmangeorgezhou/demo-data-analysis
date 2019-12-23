<template>
    <div>
        <div class="query-section">
            <el-select  v-model="departmentVal">
                <el-option v-for="item in departmentList" :key="item" :label="item" :value="item"></el-option>
            </el-select>
        </div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="A_typeNpsList"
        :type="type"></echarts-com>

        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="classRoomUseful"
        :DataList="everyLevelList"
        :type="type"></echarts-com>
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
            departmentList:["少儿","中学","一对一","国外","英学"],
            departmentVal:"少儿",
            CanvasHeight:"400px",
            CanvasWidth:'900px',
            echarts:"classRoomUse",
            classRoomUseful:"classRoomUseful",
            type:"bar",
            A_typeNpsList:{
                TitleName:'各区域教室利用率',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:"FY19",
                        data:[67,54,68,54,68,57,60],
                        type:"bar"
                    },{
                        name:"FY20",
                        data:[82,85,86,87,87,87,89],
                        type:"bar"
                    }

                ]
            },
            everyLevelList:{
                TitleName:'各档期使用情况',
                XlaixName:["第一档", "第二档", "第三档","第四档", "第五档"],
                YlaixData:[
                    {
                        name:"利用率",
                        data:[67,54,68,54,68,57,60],
                        type:"line"
                    },{
                        name:"满座率",
                        data:[82,85,86,87,87,87,89],
                        type:"line"
                    }

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