/* eslint-disable no-unused-vars */
// const proLocalService = '/web-api'
const proLocalService = 'http://stsuzhou.xdf.cn/webapi/webapi'

let URL = {
  getAdmissionInstructions: `${proLocalService}/getadmissions`,
  getExpandSubjectStudentNum: `${proLocalService}/getExtensionDivision`,
  getRateForContinueToHaveClasses: `${proLocalService}/getContinuationRate`,
  getClassRoomsCapacity: `${proLocalService}/GetClassRoomCapacity`,
  getUnionSignUp: `${proLocalService}/getAdditionalStuNum`
}

export default URL
