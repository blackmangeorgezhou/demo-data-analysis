<template>
    <div class="border-container">
        <slot>这里放的是 -- Echarts表格</slot>
        <span class="top-left border-span"></span>
        <span class="top-right border-span"></span>
        <span class="bottom-left border-span"></span>
        <span class="bottom-right border-span"></span>
    </div>
</template>
<script>
export default {
    props:{
        titleName:{
            default:'区域收入'
        },
        width:{
            default:'300px',
            type:String
        }
    },
    data(){
        return{

        }
    },
}
</script>
<style lang="less" scoped>
.border-container {
    position: relative;
    margin-top: 15px;
    padding: 10px;
    border: 1px solid #54dcf2;
}

.border-container span.border-span {
    display: block;
    position: absolute;
    width:35px;
    height: 35px;
}

.border-container span.top-left {
    top: -4px;
    left:-4px;
    border-top: 3px solid #54dcf2;
    border-left: 3px solid #54dcf2;
}

.border-container span.top-right {
    top:-4px;
    right:-4px;
    border-top: 3px solid #54dcf2;
    border-right: 3px solid #54dcf2;
}

.border-container span.bottom-left {
    bottom: -4px;
    left: -4px;
    border-bottom: 3px solid #54dcf2;
    border-left: 3px solid #54dcf2;
}

.border-container span.bottom-right {
    bottom: -4px;
    right: -4px;
    border-bottom: 3px solid #54dcf2;
    border-right: 3px solid #54dcf2;
}
</style>