<template>
  <div>
    <div class="pageIndex">
      <div
        class="page_item"
        v-for="(item,index) in pageListData"
        :key="index"
        @click="choseDepartment(item)"
      >
        {{item.label}}
        <i :class="item.IconClass"></i>
      </div>
    </div>
    <el-row class="mew" :gutter="20">
      <el-col :span="7">
        <div class="totalMenu">
          <div>
            <el-tree :data="menuRouterData" accordion @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <echarts-com
          :CanvasHeight="CanvasHeight"
          :CanvasWidth="CanvasWidth"
          :echarts="'homePageIndex'"
          :DataList="RegisterIncomList"
          :type="type"
          :isTranslated="true"
          :isShow="isShow"
        ></echarts-com>
      </el-col>
    </el-row>
    <el-row class="mew" :gutter="20">
      <el-col :span="7">
        <echarts-com
          :CanvasHeight="'300px'"
          :CanvasWidth="CanvasWidth"
          :echarts="'zhaoshengrenshu'"
          :DataList="recruitNum"
          :type="'pie'"
          :isShow="isShow"
        ></echarts-com>
      </el-col>
      <el-col :span="10">
        <echarts-com
          :CanvasHeight="'300px'"
          :CanvasWidth="CanvasWidth"
          :echarts="'shengyuanjiegou'"
          :DataList="StudentStructureList"
          :type="type"
          :isShow="isShow"
        ></echarts-com>
      </el-col>
      <el-col :span="7">
        <echarts-com
          :CanvasHeight="'300px'"
          :CanvasWidth="CanvasWidth"
          :echarts="'zhaoshengrenci'"
          :DataList="recruitpersontime"
          :type="'pie'"
          :isShow="isShow"
        ></echarts-com>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EchartsCom from "@/components/Echartscom";
import { mapState } from "vuex";
import { API } from "@/services";
import { Convertor } from "@/utils";
export default {
  components: {
    EchartsCom
  },
  data() {
    return {
      isShow:false,
      menuRouterData: [],
      pageListData: [
        {
          label: "客户服务部",
          IconClass: "el-icon-headset"
        },
        {
          label: "教务管理部",
          IconClass: "el-icon-collection"
        },
        {
          label: "人力资源部",
          IconClass: "el-icon-s-custom"
        },
        {
          label: "财务管理部",
          IconClass: "el-icon-money"
        },
        {
          label: "市场营销部",
          IconClass: "el-icon-s-marketing"
        },
        {
          label: "资产管理部",
          IconClass: "el-icon-office-building"
        },
        {
          label: "教学管理部",
          IconClass: "el-icon-reading"
        }
      ],
      temps: [],
      type: "bar",
      CanvasWidth: "900px",
      CanvasHeight: "370px",
      RegisterIncomList: {},
      StudentStructureList:{},
      recruitNum:{},
      recruitpersontime:{}
    };
  },
  mounted() {
    this.getAreaIncomeReg();
    this.getStudentStructure();
    this.getZTZSRS();
    this.getBackIncomeReg();
    setTimeout(() => {
      this.getPermissionList();
    }, 100);
  },
  computed: {
    ...mapState({ permissionList: state => state.permissionList })
  },
  methods: {
    choseDepartment(_item) {
      this.$router.push("/demo-data-analysis/school-salary/index");
    },
    handleNodeClick(msg) {
      this.$router.push(msg.routerPath);
    },
    getPermissionList() {
      this.temps = [];
      this.permissionList.forEach((item, index) => {
        this.temps[index] = {};
        if (item.Children) {
          this.temps[index].label = item.RouterName;
          this.temps[index].routerPath = item.UrlAddress;
          this.temps[index].IconClass = item.IconClass;
          this.temps[index].children = item.Children.map((_item, _index) => {
            item = {
              label: _item.RouterName,
              routerPath: _item.UrlAddress
            };
            return item;
          });
        } else {
          (this.temps[index].label = item.RouterName),
            (this.temps[index].routerPath = item.UrlAddress);
          this.temps[index].IconClass = item.IconClass;
        }
        this.menuRouterData = this.temps;
      });
    },
    async getAreaIncomeReg() {
      let res = await API.getAreaIncomeReg(); //区域收入
      function formatNumberRgx(num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
      const resData = Convertor.getIndexPageData(res.data.RIncome);
      this.RegisterIncomList.TitleName = "区域收入";
      this.RegisterIncomList.XlaixName = Convertor.getXEchartsData(resData);
      this.RegisterIncomList.YlaixData = resData.map(item => {
        let itemData = [];
        item.RDIncome.map(_item => {
          itemData.push(_item.ManageTotal);
        });
        item = {
          name: item.ManageDept,
          data: itemData,
          type: "bar",
          stack: "区域收入"
        };
        return item;
      });
    },
    async getStudentStructure(){
      let res =await API.getStudentStructure(); //生源结构
      const resData=Convertor.getIndexPageData(res.data.GradeInfo);
      this.StudentStructureList.TitleName='生源结构'+"("+res.data.Time+')';
      this.StudentStructureList.XlaixName = Convertor.getXEchartsData(resData);
      this.StudentStructureList.YlaixData = resData.map(item => {
        let itemData = [];
        item.RDIncome.map(_item => {
          itemData.push(_item.ManageTotal);
        });
        item = {
          name: item.ManageDept,
          data: itemData,
          type: "bar",
          stack: "生源结构"
        };
        return item;
      });
    },
    async getZTZSRS(){ 
      let res =await API.GetZTZSRS(); //招生人数
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.recruitNum.TitleName="招生人数";
      this.recruitNum.XlaixName=[];
      this.recruitNum.YlaixData=resData.map(item=>{
        return item={
          name:item.Management_dept_name,
          value:item.stuNum
        }
      })
    },
    async getBackIncomeReg(){
      let res =await API.getBackIncomeReg(); //退费金额、报名人次
      this.recruitpersontime.TitleName='招生人次'+'('+res.data.Time+')';
      this.recruitpersontime.XlaixName=[];
      this.recruitpersontime.YlaixData=res.data.DIncome.map(item=>{
        return item={
          name:item.ManageDept,
          value:item.BaoMingNum
        }
      });
      this.isShow=true;
    },
  }
};
</script>
<style lang="less" scoped>
.pageIndex {
  display: flex;
  justify-content: space-between;
}
.pageIndex {
  .page_item {
    width: 200px;
    height: 100px;
    margin-right: 15px;
    background: #27c2c1;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 50px;
    }
  }
}
.mew {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-col {
    margin: 0 5px;
    padding: 0!important;
  }
}
.totalMenu {
  width: 100%;
  height: 370px;
  background: #ffffff;
  padding: 10px;
  border-radius: 6px;
  > div {
    height: 100%;
    width: 100%;
    background: #ffffff;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #333333;
  }
}
.el-col{
  div{
    background: #ffffff;
    padding: 10px;
    border-radius: 6px;
  }
}
#homePageIndex{
  background: #ffffff;
  padding: 10px;
  border-radius: 6px;
}

</style>