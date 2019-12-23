<template>
  <div class="header">
    <span class="departmentLabel">{{departmentLabel}}数据看板</span>
    苏州新东方经营数据看板
    <a href="javascript:;" class="a-access">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-office-building"></i> 苏州新东方
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" :split-button="true">
          <el-dropdown-item
            v-for="(item,index) in pageList"
            :key="index"
            @click.native="chooseDepartData(item)"
          >{{item.routerName}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <button class="button type1" @click="goBack">返回</button>
    </a>
  </div>
</template>
<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      departmentLabel: "首页",
      pageList: []
    };
  },
  mounted(){
    setTimeout(() => {
      this.getPermissionList()
    }, 100);

  },
  computed: {
    ...mapState({ permissionList: state => state.permissionList }),
  },
  methods: {
    goBack() {
      this.$router.push("/demo-data-analysis/school-salary/homePage");
    },
    chooseDepartData(_item) {
      this.departmentLabel = _item.routerName;
      this.$emit("getDepartmentLabel", _item);
    },
    getPermissionList(){
      this.permissionList.forEach(item => {
        let itemObj = { routerName: item.RouterName };
        if (item.RouterName == "首页") {
          itemObj.routerName = "首页数据";
          itemObj.componentName = "DataIndex";
        }
        if (item.RouterName == "财务管理部") itemObj.componentName = "finance";
        if (item.RouterName == "客户服务部")
          itemObj.componentName = "customerServise";
        if (item.RouterName == "市场营销部") itemObj.componentName = "market";
        if (item.RouterName == "教务管理部")
          itemObj.componentName = "eduadministration";
        if (item.RouterName == "人力资源部") itemObj.componentName = "staff";
        if (item.RouterName == "教学管理部") itemObj.componentName = "teaching";
        if (item.RouterName == "资产管理部") itemObj.componentName = "property";
        this.pageList.push(itemObj);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 80px;
  position: relative;
  padding-top: 13px;
  font-size: 36px;
  color: #00ffff;
  text-align: center;
  background: url("../../../assets/images/Databg.png") top center no-repeat;
}
.header a.a-access {
  position: absolute;
  right: 3%;
  top: -18%;
}
.header span.departmentLabel {
  min-width: 80px;
  border: 1px solid #00ffff;
  position: absolute;
  left: 40px;
  top: 13%;
  font-size: 14px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.2);
}
.button {
  position: relative;
  padding: 0.5em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
}
.button.type1 {
  color: #00ffff;
}
.button.type1.type1::after,
.button.type1.type1::before {
  content: "";
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all 0.6s ease;
  border-radius: 2px;
}
.button.type1.type1::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #566473;
  border-right-color: #566473;
}
.button.type1.type1::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #566473;
  border-left-color: #566473;
}
.button.type1.type1:hover:after,
.button.type1.type1:hover:before {
  width: 100%;
  height: 100%;
}
.el-dropdown {
  border: 1px solid #00ffff;
  border-radius: 10px;
  padding: 5px;
  .el-dropdown-link {
    color: #00ffff !important;
  }
}
</style>