<template>
    <div>
        <el-form :model="queryForm">
            <el-row :gutter="40">
                <el-col :span="4">
                    <el-input></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input></el-input>
                </el-col>
                <el-col :span="4">
                    <el-input></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="success" round>导入</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-table ref="propertyTable" :data="tableData" border style="width: 100%" :height="tableHeight" :row-style="{'height':'34px'}" :header-row-style="{'background':'red'}">
            <el-table-column prop="AreaInsideOfficalSchool" label="区域">
            </el-table-column>
            <el-table-column prop="AreasSQ" label="建筑面积目标值">
            </el-table-column>
            <el-table-column prop="ChildrenStudyNum" label="已签订意向合同面积">
            </el-table-column>
            <el-table-column prop="ChildrenOfficalStudNum" label="签订意向合同年月">
            </el-table-column>
            <el-table-column prop="ChildrenBusinessRate" label="已签订租赁合同面积">
            </el-table-column>
            <el-table-column prop="SecondaryStudyNum" label="签订租赁合同年月">
            </el-table-column>
            <el-table-column prop="SecondaryOfficalStudyNum" label="预计开业年月">
            </el-table-column>
            <el-table-column prop="SecondaryBusinessRate" label="开业周期">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            innerHeight: window.innerHeight - 290,
            tableHeight:'',
            queryForm:{

            },
            tableData:[
                {   
                    AreaInsideOfficalSchool:"吴中区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },
                {
                    AreaInsideOfficalSchool:"姑苏区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },
                {
                    AreaInsideOfficalSchool:"园区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },
                {
                    AreaInsideOfficalSchool:"新区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"吴江区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"相城区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"常熟区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"昆山区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                },{
                    AreaInsideOfficalSchool:"张家港区",
                    AreasSQ:"3456",
                    ChildrenStudyNum:"3005",
                    ChildrenOfficalStudNum:"23184",
                    ChildrenBusinessRate:"12.96%",
                    SecondaryStudyNum:"3327",
                    SecondaryOfficalStudyNum:"22677",
                    SecondaryBusinessRate:"14.67%",
                    CoveredArea:"4626.69"
                }
            ]
        }
    },
    computed:{
        
    },
    mounted(){
        
    },
    methods:{
        
    }

}
</script>