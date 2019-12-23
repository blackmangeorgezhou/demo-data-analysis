<template>
  <div>
    <div class="pageIndex">
      <el-row :gutter="20">
        <el-col :span="6"></el-col>
      </el-row>
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
          :echarts="echarts"
          :DataList="RegisterIncomList"
          :type="type"
        ></echarts-com>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EchartsCom from "@/components/Echartscom";
import { mapState } from "vuex";
export default {
  components: {
    EchartsCom
  },
  data() {
    return {
      menuRouterData: [],
      pageListData: [
        {
          label:'客户服务部',
          IconClass:"el-icon-headset"
        },
        {
          label:'教务管理部',
          IconClass:"el-icon-collection"
        },
        {
          label:"人力资源部",
          IconClass:"el-icon-s-custom"
        },
        {
          label:'财务管理部',
          IconClass:"el-icon-money"
        },
        {
          label:'市场营销部',
          IconClass:"el-icon-s-marketing"
        },
        {
          label:'资产管理部',
          IconClass:"el-icon-office-building"
        },{
          label:'教学管理部',
          IconClass:"el-icon-reading"
        }
      ],
      temps: [],
      type: "bar",
      echarts: "indexPage",
      CanvasWidth: "900px",
      CanvasHeight: "400px",
      RegisterIncomList: {
        TitleName: "区域收入",
        XlaixName: [
          "常熟区",
          "高新区",
          "姑苏区",
          "吴江区",
          "吴中区",
          "相城区",
          "园区"
        ],
        YlaixData: [
          {
            name: "FY20",
            type: "bar",
            data: [
              1638472,
              72417996.5,
              101857484.6,
              88683369.8,
              82782951.5,
              23128091.5,
              143710603.2
            ]
          }
        ]
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.getPermissionList()
    }, 100);
  },
  computed: {
    ...mapState({ permissionList: state => state.permissionList }),
  },
  methods: {
    choseDepartment(_item) {
      this.$router.push('/demo-data-analysis/school-salary/index')
    },
    handleNodeClick(msg) {
      this.$router.push(msg.routerPath);
    },
    getPermissionList(){
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
        this.menuRouterData=this.temps;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.pageIndex {
  display: flex;
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
  margin-top: 40px;
  .el-col {
    margin: 0 5px;
  }
}
.totalMenu {
  width: 100%;
  height: 400px;
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
.charttest {
  border-bottom: none !important;
  background: #ffffff;
  border-radius: 6px;
  height: 100%;
  overflow: hidden;
}
</style>