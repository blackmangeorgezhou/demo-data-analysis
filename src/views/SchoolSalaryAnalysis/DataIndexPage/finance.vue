<template>
    <div>
        <div class="main clearfix">
            <div class="main-left">
                <border-container :titleName="'条线收入占比'">
                </border-container>
                <border-container :titleName="'结转收入占比'">
                </border-container>
                    
            </div>
            <div class="main-leave">
                <border-container :titleName="'区域收入'">
                </border-container>

                <border-container :titleName="'区域收入结转'">
                </border-container>
            </div>
        </div>
    </div>
</template>
<script>
import NewEcharts from "@/components/NewEcharts";
import BorderContainer from "@/components/BorderContainer";
import EchartsCom from "@/components/Echartscom";
export default {
    components:{
        EchartsCom,
        BorderContainer,
        NewEcharts
    },
    data(){
        return {
            CanvasHeight:"275px",
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
    methods:{

    }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/bootstrap.css";
@import"../../../assets/css/DataIndex.css";
#radar{
    height: 275px;
}
</style>