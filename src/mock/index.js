import Mock from 'mockjs'
import data from './data'
import SchoolData from './schoolSalarAnalysisData'
import {indexEchartsData} from "./echartData"

const METHOD = {
  GET: 'get',
  POST: 'post'
}

Mock.mock(/\/login/, METHOD.POST, data.login)
// Mock.mock(/\/getAdmissionInstructions/, METHOD.GET, data.getAdmissionInstructions)
// Mock.mock(/\/getExpandSubjectStudentNum/, METHOD.GET, data.getExpandSubjectStudentNum)
// Mock.mock(/\/getRateForContinueToHaveClasses/, METHOD.GET, data.getRateForContinueToHaveClasses)
// Mock.mock(/\/getClassRoomsCapacity/, METHOD.GET, data.getClassRoomsCapacity)
// Mock.mock(/\/getUnionSignUp/, METHOD.GET, data.getUnionSignUp)
Mock.mock(/\/property/,METHOD.POST,{code:0,prpertyDatalist:SchoolData.prpertyData,total:SchoolData.prpertyData.length})

export default indexEchartsData