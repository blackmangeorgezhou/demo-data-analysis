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
        :type="type"
        :isTranslated="true"></echarts-com>

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
            echarts:"continueClass",
            type:"bar",
            departmentList:["少儿","中学","一对一","国外","英学"],
            departmentVal:"少儿",
            A_typeNpsList:{
                TitleName:'各区域续班率',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区","园区"],
                YlaixData:[
                    {
                        name:"FY20",
                        type:"bar",
                        data:[89,87,87,87,86,82,67]
                    },{
                        name:"FY19",
                        type:"bar",
                        data:[60,57,68,54,68,54,67]
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