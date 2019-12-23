<template>
  <div>
    <!--主体-->
    <div class="main clearfix">
      <div class="main-left">
        <div class="border-container">
          <div class="name-title">区域收入(财年)</div>
          <div id="radar"></div>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <div class="name-title">报名金额（财年）</div>
          <div id="graduateyear"></div>
          <ul class="three-pie clearfix">
            <li>
              <div id="sexrate"></div>
            </li>
            <li>
              <div id="householdrate"></div>
            </li>
          </ul>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
      <div class="main-middle">
        <div class="border-container">
          <div id="mapadd"></div>
          <div class="number-show">
            <ul>
              <li v-for="(item,index) in AreaIncome" :key="index">
                <span class="span-name">{{item.ManageDept}}</span>
                <span class="span-number-show">{{item.ManageTotal}}</span>
              </li>
            </ul>
            <ul>
              <li v-for="(item,index) in TotalAreaIncome" :key="index">
                <span class="span-name">{{item.ManageDept}}</span>
                <span class="span-number-show">{{item.ManageTotal}}</span>
              </li>
            </ul>
          </div>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <ul class="teacher-pie clearfix">
            <li>
              <div class="name-title">招生人数（财季）</div>
              <div id="courserate"></div>
            </li>
            <li>
              <div class="name-title">招生人次（财季）</div>
              <div id="professionrate"></div>
            </li>
          </ul>

          <div class="name-title">生源结构（财年）</div>
          <div id="container" style="height:270px;"></div>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
      <div class="main-right">
        <div class="border-container">
          <div class="name-title">区域结转（财年）</div>
          <div id="edubalance" style="height:275px"></div>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>

      <div class="main-right">
        <div class="border-container">
          <div class="name-title">运营状况（财季）</div>
          <table style="height:182px;" class="table table-kingdargen">
            <thead>
              <tr>
                <th>部门</th>
                <th>上课老师数</th>
                <th>上课时长</th>
                <th>续班率</th>
                <th>满班率</th>
                <th>退班率</th>
                <th>取消班率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in echartDatas" :key="index">
                <td>{{item.department}}</td>
                <td>{{item.teanum}}</td>
                <td>{{item.teachingTime}}</td>
                <td>{{item.continusClassRate}}</td>
                <td>{{item.fullClassRate}}</td>
                <td>{{item.BackPercent}}</td>
                <td>{{item.cancelClassRate}}</td>
              </tr>
            </tbody>
          </table>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>

        <div class="border-container">
          <div class="name-title">教室利用率（财季）</div>
          <div id="dom" style="height:250px;"></div>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./header"
import initEcharts from "@/assets/js/totalMaps.js";
import "../../../../static/suzhou";
import echartData from "@/mock";
import { API } from '@/services';
import {Convertor} from "@/utils"
export default {
  components:{
    TheHeader
  },
  data() {
    return {
      echartDatas: echartData,
      ConvertorData:{},
      AreaIncome:[],
      TotalAreaIncome:[],
      PercentType:{},
      isInitEcharts:0,
      continusClassRateParams:{
        p_yb_startime:"2019-09-01",
        p_yb_endtime:"2019-12-31",
        p_yb_Quarter:'\'3\',\'6\'',
        p_xb_startime:"2019-12-01",
        p_xb_endtime:"2020-2-29",
        p_xb_Quarter:"\'4\'"
      }
    };
  },
  mounted(){
    this._getCarryOverBeginDate();
    this.getAreaIncomeReg();
    this.getBackIncomeReg();
    this.getIncomeReg();
    this.getStudentStructure();
    this.getClassRoomInfo();
    this.getZTJSCN();
    this.getZTZSRS();
    this.getZTSKLSS();
    this.getZTMBL();
    this.getZTSKSC();
    this.getZTXBL();
    this.getZTClassNum();
    setInterval(() => {
      this._getCarryOverBeginDate();
      this.getAreaIncomeReg();
      this.getBackIncomeReg();
      this.getIncomeReg();
      this.getStudentStructure();
      this.getClassRoomInfo();
      this.getZTJSCN();
      this.getZTZSRS();
      this.getZTSKLSS();
      this.getZTMBL();
      this.getZTSKSC();
      this.getZTXBL();
      this.getZTClassNum();
      initEcharts(this.ConvertorData);
      console.log(999)
    }, 600000);
  },
  watch:{
    isInitEcharts(val){
      if(val>=8){
        initEcharts(this.ConvertorData)
      }
    }
  },
  methods: {
    async _getCarryOverBeginDate(){ //区域结转
      let res =await API.getCarryOverBeginDate();
      this.ConvertorData.CarryOverBeginDate=Convertor.getIndexPageData(res.data.RIncome);
      this.isInitEcharts+=1;
    },
    async getAreaIncomeReg(){
      let res =await API.getAreaIncomeReg(); //区域收入
      this.AreaIncome=res.data.DIncome;
      function formatNumberRgx(num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      };
      let totalNum=0;
      this.AreaIncome.map(item=>{
        totalNum+=item.ManageTotal;
        item.ManageTotal=formatNumberRgx(item.ManageTotal)
        return item
      })
      this.AreaIncome.push({
        // ManageTotal:formatNumberRgx(totalNum),
        // ManageDept:"全校"
      })
      this.TotalAreaIncome.push({
        ManageTotal:formatNumberRgx(totalNum),
        ManageDept:"全校"
      })
      this.ConvertorData.AreaIncomeReg=Convertor.getIndexPageData(res.data.RIncome);
      this.isInitEcharts+=1;
    },
    async getBackIncomeReg(){
      let res =await API.getBackIncomeReg(); //退费金额、报名人次（财季）
      this.ConvertorData.BackIncomeReg=res.data.DIncome;
      this.echartDatas.map((item,index)=>{
        item.department=res.data.DIncome[index].ManageDept;
        item.BackPercent=res.data.DIncome[index].BackPercent;
        return item;
      })
      this.isInitEcharts+=1;
    },
    async getIncomeReg(){
      let res =await API.getIncomeReg();  //报名金额
      this.ConvertorData.IncomeReg=Convertor.getIndexPageData(res.data.Income);
      this.isInitEcharts+=1;
    },
    async getStudentStructure(){
      let res =await API.getStudentStructure(); //生源结构
      this.ConvertorData.StudentStructure=Convertor.getIndexPageData(res.data.GradeInfo);
      this.isInitEcharts+=1;
      
    },
    async getClassRoomInfo(){ 
      let res =await API.getClassRoomInfo(); //教室使用率
      this.ConvertorData.ClassRoomInfo=Convertor.getClassRoomInfoData(res.data.QDetail);
      this.isInitEcharts+=1;
    },
    async getZTJSCN(){ 
      let res =await API.GetZTJSCN(); //教师产能
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.ConvertorData.TeacherIncome=resData;
      this.isInitEcharts+=1;
    },
    async getZTZSRS(){ 
      let res =await API.GetZTZSRS(); //招生人数
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.ConvertorData.Courserate=resData;
      this.isInitEcharts+=1;
    },
    async getZTSKLSS(){ 
      let res =await API.GetZTSKLSS(); //上课老师数
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.echartDatas.map((item,index)=>{
        item.teanum=resData[index].teanum;
        return item;
      })
    },
    async getZTMBL(){ 
      let res =await API.GetZTMBL(); //满班率
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.echartDatas.map((item,index)=>{
        item.fullClassRate=Number(resData[index].FullClassRate*100).toFixed(2)+"%";
        return item;
      })      
    },
    async getZTSKSC(){
      let res =await API.GetZTSKSC(); //上课时长
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      this.echartDatas.map((item,index)=>{
        item.teachingTime=resData[index].tolTime;
        return item;
      })
    },
    async getZTXBL(){
      let res =await API.GetZTXBL(this.continusClassRateParams); //续班率
      if(!res.data.IsSuccess){
        return false
      }
      res.data.Message=res.data.Message.replace(/'/g, '"');
      let resData=JSON.parse(res.data.Message);
      resData.forEach((item,index) => {
        this.echartDatas[index].continusClassRate=Number(item.ContinuatRate*100).toFixed(2)+"%";
      });
    },
    async getZTClassNum(){ //取消班率
        let res=await API.GetZTClassNum();
        if(!res.data.IsSuccess){
          return false
        }
        res.data.Message=res.data.Message.replace(/'/g, '"');
        const resData=JSON.parse(res.data.Message);
        this.echartDatas.map((item,index)=>{
          item.cancelClassRate=Number(resData[index].CancelRate*100).toFixed(2)+"%";
          return item;
        })
    }
  }
};
</script>
