<template>
    <div>
        <el-dialog :title="titleMap[dialogStatus]" :visible.sync="dialogVisible" :close-on-click-modal='false'>
            <el-form :model="editForm" ref="properTyForm" label-width="180px">
                <el-form-item label="区域：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
                <el-form-item label="建筑面积目标值：">
                    <el-input v-model="editForm.AreasSQ"></el-input>
                </el-form-item>
                <el-form-item label="已签订意向合同面积：">
                    <el-input v-model="editForm.ChildrenStudyNum"></el-input>
                </el-form-item>
                <el-form-item label="签订意向合同年月：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
                <el-form-item label="已签订租赁合同面积：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
                <el-form-item label="签订租赁合同年月：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
                <el-form-item label="预计开业年月：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
                <el-form-item label="开业周期：">
                    <el-input v-model="editForm.AreaInsideOfficalSchool"></el-input>
                </el-form-item>
            </el-form>
            <div style="text-align:center;">
                <el-button type="primary" @click="confirmSubmit">确认</el-button>
                <el-button @click="closeDialog">取消</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
export default {
    props:{
        dialogStatus:{
            default:0,
            type:Number
        }
    },
    data(){
        return {
            titleMap:['新增','编辑'],
            dialogVisible:false,
            editForm:{
                AreaInsideOfficalSchool:"",
                AreasSQ:"",
                ChildrenStudyNum:"",
                ChildrenOfficalStudNum:"",
                ChildrenBusinessRate:'',
                SecondaryStudyNum:"",
                SecondaryOfficalStudyNum:"",
                SecondaryBusinessRate:""
            }
        }
    },
    methods:{
        showDialog(){
            this.dialogVisible=true
        },
        closeDialog(){
            this.dialogVisible=false
        },
        confirmSubmit(){
            this.$refs['properTyForm'].resetFields();
            this.dialogVisible=false;
        }
    }
}
</script>
<style lang="less" scoped>

</style>