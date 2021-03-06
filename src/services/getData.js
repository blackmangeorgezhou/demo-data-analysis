/* eslint-disable no-unused-vars */
import URL from './url'
import request from './request'

const get = request.get
const post = request.post

let API = {
  login: async (data) => {
    const result = await post(URL.login, data)
    return result
  },

  getAdmissionInstructions: async (data) => {
    const result = await get(URL.getAdmissionInstructions, data)
    return result
  },

  getExpandSubjectStudentNum: async (data) => {
    const result = await get(URL.getExpandSubjectStudentNum, data)
    return result
  },

  getRateForContinueToHaveClasses: async (data) => {
    const result = await get(URL.getRateForContinueToHaveClasses, data)
    return result
  },

  getClassRoomsCapacity: async (data) => {
    const result = await get(URL.getClassRoomsCapacity, data)
    return result
  },

  getUnionSignUp: async (data) => {
    const result = await get(URL.getUnionSignUp, data)
    return result
  },

  getDepartmentTargetData: async () => {
    const result = await get(URL.getDepartmentTargetData, null)
    return result
  },

  //运营中心数据 - DataIndexPage
  getCarryOverBeginDate: async () => {
    const result = await get(URL.getCarryOverBeginDate, null)
    return result
  },
  getAreaIncomeReg: async () => {
    const result = await get(URL.getAreaIncomeReg, null)
    return result
  },
  getBackIncomeReg: async () => {
    const result = await get(URL.getBackIncomeReg, null)
    return result
  },
  getIncomeReg: async () => {
    const result = await get(URL.getIncomeReg, null)
    return result
  },
  getStudentStructure: async () => {
    const result = await get(URL.getStudentStructure, null)
    return result
  },
  getClassRoomInfo: async () => {
    const result = await get(URL.getClassRoomInfo, null)
    return result
  },
  getRole: async (name,level) => {
    const result = await get(URL.getpermissionList,{name,level})
    return result
  },

  getUserByEmail:async (data)=>{
    const result= await post (URL.getUserByEmail,data);
    return result;
  },
  getClassRoomCount: async (data) => {
    const result = await get(URL.getClassRoomCount, data)
    return result
  },
  GetRegionClassRoomInfo: async () => {
    const result = await get(URL.GetRegionClassRoomInfo)
    return result
  },
  GetZTJSCN: async () => {
    const result = await get(URL.GetZTJSCN, null)
    return result
  },
  GetZTZSRS: async () => {
    const result = await get(URL.GetZTZSRS, null)
    return result
  },
  GetZTSKLSS: async () => {
    const result = await get(URL.GetZTSKLSS, null)
    return result
  },
  GetZTMBL: async () => {
    const result = await get(URL.GetZTMBL, null)
    return result
  },
  GetZTSKSC: async () => {
    const result = await get(URL.GetZTSKSC, null)
    return result
  },
  GetZTXBL: async (data) => { //续班率
    const result = await get(URL.GetZTXBL, data)
    return result
  },
  GetZTClassNum: async () => { 
    const result = await get(URL.GetZTClassNum)
    return result
  },
  GetZTXBL_Depart: async (data) => {
    const result = await get(URL.GetZTXBL_Depart,data)
    return result
  },
  GetZTCMBZB: async () => { //低满班占比
    const result = await get(URL.GetZTCMBZB)
    return result
  },
  GetZTDMBZB: async () => { //满班占比
    const result = await get(URL.GetZTDMBZB)
    return result
  },
   


  //管理页面的mock数据模拟
  GetPropertyData:async (data)=>{
    const result=await post ('/property',data);
    return result
  }
}

export default API
