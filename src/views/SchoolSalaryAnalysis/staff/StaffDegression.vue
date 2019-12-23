<template>
    <div>
        <echarts-com :CanvasHeight="CanvasHeight" :CanvasWidth="CanvasWidth"
        :echarts="echarts"
        :DataList="CRMBusinessList"
        :type="type"></echarts-com>
        <el-table :data="tableData">
            <el-table-column prop="Department" label="部门"></el-table-column>
            <el-table-column prop="AverageCapacity" label="人均产能"></el-table-column>
            <el-table-column prop="ClassPaymentPoportion" label="课酬收入占比"></el-table-column>
            <el-table-column prop="LowerCpacityPoportion" label="低产能教师占比"></el-table-column>
            <el-table-column prop="UnusedTeacherPoportion" label="闲置教师占比"></el-table-column>
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
            CanvasWidth:'900px',
            echarts:"CRM",
            type:"pie",
            CRMBusinessList:{
                TitleName:'课酬成本占比',
                XlaixName:["泡泡少儿","中学班教","中学个性化","国外考试"],
                YlaixData:[
                    {
                        name:"泡泡少儿",
                        value:" 164575464.2"
                    },{
                        name:"中学班教",
                        value:"201405919"
                    },{
                        name:"中学个性化",
                        value:" 100337784"
                    },{
                        name:"国外考试",
                        value:"65815835"
                    }
                ]
            },
            tableData:[
                {
                    Department:"少儿部",
                    AverageCapacity:" 41676.38",
                    ClassPaymentPoportion:"21.16%",
                    LowerCpacityPoportion:"1.60%",
                    UnusedTeacherPoportion:"8.95%"
                },{
                    Department:"斯林姆",
                    AverageCapacity:" 41676.38",
                    ClassPaymentPoportion:"21.16%",
                    LowerCpacityPoportion:"1.60%",
                    UnusedTeacherPoportion:"8.95%"
                },{
                    Department:"中学部",
                    AverageCapacity:" 41676.38",
                    ClassPaymentPoportion:"21.16%",
                    LowerCpacityPoportion:"1.60%",
                    UnusedTeacherPoportion:"8.95%"
                },{
                    Department:"一对一",
                    AverageCapacity:" 41676.38",
                    ClassPaymentPoportion:"21.16%",
                    LowerCpacityPoportion:"1.60%",
                    UnusedTeacherPoportion:"8.95%"
                },{
                    Department:"国外部",
                    AverageCapacity:" 41676.38",
                    ClassPaymentPoportion:"21.16%",
                    LowerCpacityPoportion:"1.60%",
                    UnusedTeacherPoportion:"8.95%"
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