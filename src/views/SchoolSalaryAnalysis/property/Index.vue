<template>
    <div>
        <el-form class="query-form" :model="listQuery">
            <el-row :gutter="40">
                <el-col :span="4">
                    <el-input v-model="listQuery.AreaName" placeholder="区域"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button>查询</el-button>
                    <el-button type="primary" @click="handelAdd">新增</el-button>
                    <el-button type="success" round @click="dialogConfig.dialogVisiable=true">导入</el-button>
                </el-col>
            </el-row>
        </el-form>
        <div class="table-temp">
            <el-table :data="tableData" border style="width: 100%" :height="screenHeight" align='center'>
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
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="editRow(scope.$index, tableData)" type="warning">编辑</el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <pagination :totalNum="totalNum" @handelSizeChange="handelSizeChange" @handelPageChange="handelPageChange"></pagination>
        </div>

        <upload-dialog :dialogVisiable='dialogConfig.dialogVisiable' :title="dialogConfig.title" :excelFieldsMapper="excelTitleFields" :uploadRequestUrl="dialogConfig.requestUrl"
        @closeUploadFun="setDialogVisiable" @transferImportData="setImportData">
        </upload-dialog>

        <edit-dialog :dialogStatus="dialogStatus" ref="editDialog"></edit-dialog>
    </div>
</template>
<script>
import {API} from '@/services'
import UploadDialog from "@/components/UploadDialog"
import {Constants} from "@/common";
import EditDialog from "./editDialog";
export default {
    components:{
        UploadDialog,
        EditDialog
    },
    data(){
        return {
            dialogStatus:0,
            excelTitleFields: Constants.excelTitleFields.Property,
            isShowUploadDialog:false,
            screenHeight:window.innerHeight - 320,
            queryForm:{

            },
            listQuery:{
                AreaName:"",
                pageIndex:"",
                pageSize:""
            },
            tableData:[],
            totalNum:0,
            dialogConfig:{
                title:"",
                dialogVisiable:false,
                requestUrl: 'https://jsonplaceholder.typicode.com/posts/'
            }
        }
    },
    mounted(){
        this.getPropertyDataList();
        window.onresize = () => {
            return (() => {
                this.screenHeight = document.body.clientHeight-320;
            })();
        }
    },
    methods:{
        handelAdd(){
            this.dialogStatus=0;
            this.$refs.editDialog.showDialog();
        },
        editRow(){
            this.dialogStatus=1;
            this.$refs.editDialog.showDialog();
        },
        deleteRow(){
            
        },
        async getPropertyDataList(){
            let res= await API.GetPropertyData(this.listQuery);
            this.tableData=res.data.prpertyDatalist;
            this.totalNum=res.data.total;
        },
        handelSizeChange(val){
            this.listQuery.pageSize=val;
            this.getPropertyDataList(this.listQuery);
        },
        handelPageChange(val){
            this.listQuery.pageIndex=val;
            this.getPropertyDataList(this.listQuery);
        },
        //转化导入数据
        convertBathImportData(dataList) {
            console.log('----- start convert ----------')
            if (!dataList || !dataList.length) return []

            console.log('----- end convert ----------')
        },
        setDialogVisiable(val){
            this.dialogConfig.dialogVisiable=val;
        },
        async setImportData(importData) {
            console.log('----- User ------')
            this.convertBathImportData(importData)
            let response = await API.tpsImport(importData)
            console.log(response)
            if (response && response.code === ResultCode.OK && response.data && response.data.IsSuccess) {
            this.NotifySuccess(`导入成功【共导入${importData.length}】条数据`)
            } else {
            this.NotifyError(`导入失败【${response.data.Message}】`)
            }
        },
    }

}
</script>
<style lang="less" scoped>

</style>