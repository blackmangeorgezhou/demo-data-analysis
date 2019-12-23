<template>
    <div>
        <div style="display:flex;">
            <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
            :echarts="echarts"
            :DataList="CRMBusinessList"
            :type="type"></echarts-com>

            <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
            :echarts="averageClassNum"
            :DataList="AreaClassNum"
            :type="averType"
            :isTwoyaxis="true"></echarts-com>
        </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="Department" label="部门">
        </el-table-column>
        <el-table-column prop="EstablishClassNum" label="设班量">
        </el-table-column>
        <el-table-column prop="StartClassNum" label="开班量">
        </el-table-column>
        <el-table-column prop="CancelClassNuM" label="取消班量">
        </el-table-column>
        <el-table-column prop="AverageClassMates" label="班均人数">
        </el-table-column>
        <el-table-column prop="FullClassProportion" label="满班率">
        </el-table-column>
    </el-table>

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
            CanvasWidth:'500px',
            echarts:"settingClassNum",
            averageClassNum:"averageClassNum",
            type:"pie",
            averType:"bar",
            CRMBusinessList:{
                TitleName:'设班量',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                    {
                        name:" 常熟区",
                        value:" 201405919"
                    },{
                        name:" 高新区",
                        value:" 201405919"
                    },{
                        name:" 姑苏区",
                        value:" 100337784"
                    },{
                        name:" 吴江区",
                        value:" 100337784"
                    },{
                        name:" 吴中区",
                        value:" 100337784"
                    },{
                        name:" 相城区",
                        value:" 100337784"
                    },{
                        name:" 园区",
                        value:" 100337784"
                    }
                ]
            },
            AreaClassNum:{
                TitleName:'纯满班占比/班均',
                XlaixName:["常熟区", "高新区", "姑苏区","吴江区", "吴中区","相城区", "园区"],
                YlaixData:[
                   {
                        name:"纯满班占比",
                        type:"bar",
                        yAxisIndex: 1,
                        data:[69,61,72,57,67,48,58]
                    },{
                        name:"班均",
                        type:"line",
                        data:[17.6,17.1,18.3,16.4,17.7,16.4,17.1]
                    }
	            ]
            },
            tableData:[
                {
                    Department:"少儿部",
                    EstablishClassNum:"3005",
                    StartClassNum:"23184",
                    CancelClassNuM:"12.96%",
                    AverageClassMates:"3327",
                    FullClassProportion:"22677",
                },{
                    Department:"斯林姆",
                    EstablishClassNum:"3005",
                    StartClassNum:"23184",
                    CancelClassNuM:"12.96%",
                    AverageClassMates:"3327",
                    FullClassProportion:"22677",
                },{
                    Department:"中学部",
                    EstablishClassNum:"3005",
                    StartClassNum:"23184",
                    CancelClassNuM:"12.96%",
                    AverageClassMates:"3327",
                    FullClassProportion:"22677",
                },{
                    Department:"一对一",
                    EstablishClassNum:"3005",
                    StartClassNum:"23184",
                    CancelClassNuM:"12.96%",
                    AverageClassMates:"3327",
                    FullClassProportion:"22677",
                },{
                    Department:"国外部",
                    EstablishClassNum:"3005",
                    StartClassNum:"23184",
                    CancelClassNuM:"12.96%",
                    AverageClassMates:"3327",
                    FullClassProportion:"22677",
                },
                
            ]    
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>