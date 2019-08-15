import Mock from 'mockjs'
import data from './data'

const METHOD = {
  GET: 'get',
  POST: 'post'
}

Mock.mock(/\/getAdmissionInstructions/, METHOD.GET, data.getAdmissionInstructions)
Mock.mock(/\/getExpandSubjectStudentNum/, METHOD.GET, data.getExpandSubjectStudentNum)
Mock.mock(/\/getRateForContinueToHaveClasses/, METHOD.GET, data.getRateForContinueToHaveClasses)
Mock.mock(/\/getClassRoomsCapacity/, METHOD.GET, data.getClassRoomsCapacity)
Mock.mock(/\/getUnionSignUp/, METHOD.GET, data.getUnionSignUp)
