<template>
    <div class="sz_salary_bread">
        <span> 
          <i :class="$store.state.isCollapse? 'el-icon-s-fold' : 'el-icon-s-unfold'" :title="$store.state.isCollapse? '展开' : '收起'" @click="handleLefeMenu"
            class="cursor-pointer color-27C2C1 padding-8 font-size-20">
          </i>
        </span>
        <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item 
                v-for='(name,index) in matchedArr'
				:key='index'
				>
                {{name}}
			</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
		matchedArr(){
			let temp = [],temps = [];
			this.$route.matched.filter((item,index,self) => {
				if(item.name){
					const name = item.name;
				    temp.push(name);
				}
			});
			temp.filter((item,index,self) => {
				if(!temps.includes(item)){
					temps.push(item);
				}
            })
                return temps;
		}
	},
    methods:{
        handleLefeMenu(){
            this.$store.dispatch('setLeftMenu');  // 改变菜单宽度 160->64/64-160
            this.$store.dispatch('setLeftCollapse');
        }
    }
}
</script>
<style lang="less" scoped>
.sz_salary_bread{
    padding: 0px!important;
    background:#eaebec;
    line-height: 35px;
    i{
      display:inline-block;
      padding: 0 10px;
    }
}
.breadcrumb{
    display:inline-block;
    color: #606266;
}
</style>