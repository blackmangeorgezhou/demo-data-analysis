<template>
    <div>
      <el-table border :data="tableData">
            <el-table-column prop="Department" label="部门"></el-table-column>
            <el-table-column width="300" prop="RecruitSchedule" label="招聘在岗进度">
              <template slot-scope="scope">
                <p class="processon" :style="{width:scope.row.RecruitSchedule}">
                  {{ scope.row.RecruitSchedule }}
                </p>
              </template>
            </el-table-column>
            <el-table-column prop="Resumenum" label="简历数"></el-table-column>
            <el-table-column prop="IterviewPassRate" label="面试通过率"></el-table-column>
            <el-table-column prop="EnrollmentRate" label="入职率"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tableData:[
                {
                    Department:"少儿部",
                    RecruitSchedule:"77.95%",
                    Resumenum:"1537",
                    IterviewPassRate:"20.75%",
                    EnrollmentRate:"15.72%"
                },{
                    Department:"斯林姆",
                    RecruitSchedule:"74.95%",
                    Resumenum:"1537",
                    IterviewPassRate:"20.75%",
                    EnrollmentRate:"15.72%"
                },{
                    Department:"中学部",
                    RecruitSchedule:"37.95%",
                    Resumenum:"1537",
                    IterviewPassRate:"20.75%",
                    EnrollmentRate:"15.72%"
                },{
                    Department:"一对一",
                    RecruitSchedule:"57.95%",
                    Resumenum:"1537",
                    IterviewPassRate:"20.75%",
                    EnrollmentRate:"15.72%"
                },{
                    Department:"国外部",
                    RecruitSchedule:"81.95%",
                    Resumenum:"1537",
                    IterviewPassRate:"20.75%",
                    EnrollmentRate:"15.72%"
                },
            ]  
        }
    }
}
</script>
<style scoped>
.processon{
  display: inline-block;
  height: 100%;
  background: #FF852F;
  background: linear-gradient(#FF852F,60%, pink);
}
</style>