<template>
    <div class="pagination">
        <el-pagination
            background
            :layout="pagination.layout"
            :total="totalNum"
            :current-page="pagination.pageIndex"
            :page-size="pagination.pageSize"
            :page-sizes="pagination.pageSizes"
            @size-change="handelSizeChange"
            @current-change="handelPageChange">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props:{
       totalNum:{
           default:200,
           type:Number
       } 
    },
    data(){
        return{
            pagination:{
                pageSize:10,
                pageIndex:1,
                pageSizes:[5,10,15,20],
                layout:"total, sizes, prev, pager, next, jumper"
            }
        }
    },
    methods:{
       handelSizeChange(page_size){
           this.$emit('handelSizeChange',page_size)
       },
       handelPageChange(page){
           this.$emit('handelPageChange',page)
       }
    }
}
</script>
<style lang="less" scoped>
.pagination{
    text-align: right!important;
    padding: 10px 18px;
    .el-select{
       width: 10rem!important;
    }
}
</style>