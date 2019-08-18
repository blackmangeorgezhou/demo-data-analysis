/* eslint-disable no-unused-vars */
// const proLocalService = '/web-api'
const proLocalService = 'http://stsuzhou.xdf.cn/webapi/webapi'

let URL = {
  login: `${proLocalService}/login`,
  getAdmissionInstructions: `${proLocalService}/getadmissions`,
  getExpandSubjectStudentNum: `${proLocalService}/getExtensionDivision`,
  getRateForContinueToHaveClasses: `${proLocalService}/getContinuationRate`,
  getClassRoomsCapacity: `${proLocalService}/GetClassRoomCapacity`,
  getUnionSignUp: `${proLocalService}/getAdditionalStuNum`,
  getDepartmentTargetData: `http://10.124.9.161:8529/Home/getDate`
}

export default URL
