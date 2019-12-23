<template>
  <div class="Eduadministration">
    <div class="main clearfix">
      <div class="main-left">
        <border-container>
            <new-echarts :isShow='isShow' :titleName="'教室利用率'" :echarts="'EDU_classRoomRate'" :isPercent="true" :DataList="EDU_classRoomRateList">
            </new-echarts>
        </border-container>
        <border-container>
            <new-echarts :isShow='isShow' :titleName="'设班量'" :echarts="'EDU_EstablishClass'" :type="'pie'" :DataList="EDU_TotalClassList">
            </new-echarts>
        </border-container>
        <border-container>
            <new-echarts :isShow='isShow' :titleName="'取消班量'" :echarts="'EDU_CancelClass'" :type="'pie'" :DataList="EDU_CancelClassList">
            </new-echarts>
        </border-container>
      </div>
      <div class="main-middle">
        <border-container>
             <new-echarts :isShow='isShow'  :titleName="'教室数量'" :echarts="'EDU_classRoomNum'" :isTranslated='true' :DataList="EDU_classRoomNumList">
            </new-echarts>
        </border-container>
        <border-container>
            <ul class="teacher-pie clearfix">
                <li>
                    <new-echarts :isShow='isShow' :titleName="'续班率(少儿)'" :echarts="'EDU_continuClassRate_Children'" :DataList="EDU_continuClassRateList">
                    </new-echarts> 
                </li>
                <li>
                    <new-echarts :isShow='isShow' :titleName="'续班率(中学)'" :echarts="'EDU_continuClassRate_Middle'" :DataList="EDU_continuClassRateList">
                    </new-echarts> 
                </li>
          </ul>
        </border-container>
        <border-container>
            <ul class="teacher-pie clearfix">
                <li>
                    <new-echarts :isShow='isShow' :titleName="'满班率(少儿)'" :echarts="'EDU_FullClassRate_Children'" :DataList="EDU_continuClassRateList">
                    </new-echarts> 
                </li>
                <li>
                    <new-echarts :isShow='isShow' :titleName="'满班率(中学)'" :echarts="'EDU_FullClassRate_Middle'" :DataList="EDU_continuClassRateList">
                    </new-echarts> 
                </li>
          </ul>
        </border-container>
      </div>
      <div class="main-right">
        <border-container>
          <div class="name-title">闲置教室数</div>
          <div class="ClassRoomLeftNum">
              <div>
                <div>部门</div>
                <div v-for="(item,index) in ClassRoomLeftCountArr" :key="index">
                    {{item.ManageDept}}
                </div>
              </div>
              <div :class="{color_e9aa00:index==0,color_53bf18:index==1,color_f9504a:index==2,color_12f0e9:index==3}" v-for="(item,index) in ClassRoomLeftCount_AreaArr" :key="index">
                  <div>{{item.RegionName}}</div>
                  <div v-for="(it,i) in item.RDIncome" :key="i">{{it}}</div>
              </div>
          </div>
        </border-container>
        <border-container>
            <div class="name-title">
                特批班量
            </div>
            <table class="table table-kingdargen">
                <thead>
                <tr>
                    <th>部门</th>
                    <th>特批班量</th>
                    <th>纯满班率</th>
                    <th>低满班率</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in 5" :key="index">
                    <td>887</td>
                    <td>887</td>
                    <td>887</td>
                    <td>887</td>
                </tr>
                </tbody>
            </table>
        </border-container>
      </div>
    </div>
  </div>
</template>
<script>
import NewEcharts from "@/components/NewEcharts";
import BorderContainer from "@/components/BorderContainer";
import { API } from '@/services';
import {Convertor} from "@/utils";
export default {
  components: {
    BorderContainer,
    NewEcharts
  },
  data() {
    return {
        isShow:false,
        isShowEcharts:0,
        ClassRoomCount:{
            status:0
        },
        continusClassRateParams:{
            p_yb_startime_tq:"2019-09-01",
            p_yb_endtime_tq:"2019-12-31",
            p_yb_Quarter_tq:'\'3\',\'6\'',
            p_xb_startime_tq:"2019-12-01",
            p_xb_endtime_tq:"2020-2-29",
            p_xb_Quarter_tq:"\'4\'",
            p_yb_startime_qn:"2018-09-01",
            p_yb_endtime_qn:"2018-12-31",
            p_yb_Quarter_qn:'\'3\',\'6\'',
            p_xb_startime_qn:"2018-12-01",
            p_xb_endtime_qn:"2019-2-29",
            p_xb_Quarter_qn:"\'4\'"
        },
        ClassRoomLeftCount:{status:1},
        ClassRoomLeftCountArr:[
            {
                ManageDept:"",
                RDIncome:[
                    {
                        RegionName:"",
                        ManageTotal:""
                    }
                ]
            }
        ],
        ClassRoomLeftCount_AreaArr:[],
        EDU_classRoomRateList:{},
        EDU_classRoomNumList:{},
        EDU_continuClassRateList:{
            TitleName:'续班率（少儿）',
            XlaixName:["常熟", "相城", "吴江", "新区", "园区", "姑苏", "吴中"],
            YlaixData:[
                    {
                        name:"FY19",
                        data:[ "85.72","81.31","80.88","80.54","80.5","80.13","78.33","77.15","76.25","74.78","72.9","72.69",]
                    },
                    {
                        name:"FY20",
                        data:[ "87.86","81.66",'81.71','80.69','80.44','79.26','76.97','76.82','72.84','72.82','73.69','73.79']
                    },
            ]
            
        },
        EDU_CancelClassList:{},
        EDU_TotalClassList:{},
    };
  },
  created(){
      this.EDU_continuClassRateList.YlaixData=this.EDU_continuClassRateList.YlaixData.map((item,index)=>{
          item={
            name:item.name,
            type:"bar",
            data:item.data,
          }
        return item
      });
      
  },
  mounted(){
      this._getClassRoomCount();
      this._getClassRoomLeftCount();
      this.getRegionClassRoomInfo();
      this.getZTClassNum();
    //   this.getZTXBL_Depart(); //续班率（FY19/FY20教务）
    this.getZTCMBZB();
    this.getZTDMBZB();
  },
  watch:{
      isShowEcharts(value){
          if(value==3){
              this.isShow=true;
          }
      }
  },
  methods: {
    async _getClassRoomCount(){
        let res=await API.getClassRoomCount(this.ClassRoomCount);
        const resData=Convertor.getIndexPageData(res.data.RIncome);
        this.EDU_classRoomNumList.XlaixName=Convertor.getXEchartsData(resData)
        this.EDU_classRoomNumList.YlaixData=resData.map(item=>{
            let itemData=[];
            item.RDIncome.map(_item=>{
                itemData.push(_item.ManageTotal)
            })
            item={
                name:item.ManageDept,
                data:itemData,
                type:"bar",
                stack:"教室数量",
            }
            return item;
        })
        this.isShowEcharts+=1;
    },
    async _getClassRoomLeftCount(){
        let res=await API.getClassRoomCount(this.ClassRoomLeftCount);
        this.ClassRoomLeftCountArr=Convertor.getIndexPageData(res.data.RIncome);
        res.data.RIncome.forEach((item,index) => {
            this.ClassRoomLeftCount_AreaArr.push({
                RegionName:item.RegionName,
                RDIncome:[]
            })
            let item2=[]
            item.RDIncome.map((_item,_index)=>{
                item2.push(_item.ManageTotal)
            });
            this.ClassRoomLeftCount_AreaArr[index].RDIncome=item2
        });
    },
    async getRegionClassRoomInfo(){
        let res=await API.GetRegionClassRoomInfo();
        const resData=Convertor.getClassRoomInfoData(res.data.QDetail);
        this.EDU_classRoomRateList.XlaixName=Convertor.getXEchartsData(resData);
        this.EDU_classRoomRateList.YlaixData=resData.map(item=>{
            let itemData=[];
            item.ClassRoomInfo.map(_item=>{
                itemData.push(_item.Percent.replace('%',''))
            })
            item={
                name:item.ManageDept,
                data:itemData,
                type:"bar",
            }
            return item;
        })
        this.isShowEcharts+=1;
    },
    async getZTClassNum(){
        let res=await API.GetZTClassNum();
        if(!res.data.IsSuccess){
            return
        }
        const resData=JSON.parse(res.data.Message);
        console.log(resData);
        this.EDU_CancelClassList.XlaixName=[];
        this.EDU_CancelClassList.YlaixData=resData.map((item,index)=>{
            return item={
                name:item.Management_dept_name,
                value:item.Cancel
            }
        });
        this.EDU_TotalClassList.XlaixName=[];
        this.EDU_TotalClassList.YlaixData=resData.map((item,index)=>{
            return item={
                name:item.Management_dept_name,
                value:item.TolNum
            }
        })
        this.isShowEcharts+=1;
    },

    async getZTXBL_Depart(){
        let res=await API.GetZTXBL_Depart(this.continusClassRateParams);
    },
    async getZTCMBZB(){
        let res=await API.GetZTCMBZB();
        console.log(res,'res1')
    },
    async getZTDMBZB(){
        let res=await API.GetZTDMBZB();
        console.log(res,'res2')
    },

  }
};
</script>
<style lang="less" scoped>
.ClassRoomLeftNum{
    display: flex;
    font-size: 12px;
    margin-top: 6px;
    text-align: center;
    margin-bottom: 0;
    justify-content: space-around;
    >div{
        line-height: 22px;
        >div:nth-child(1){
            color: #419aff;
        }
    }
}
.color_e9aa00{
    color: #e9aa00;
}
.color_53bf18{
    color: #53bf18;
}
.color_f9504a{
    color: #f9504a;
}
.color_12f0e9{
    color: #12f0e9;
}

</style>