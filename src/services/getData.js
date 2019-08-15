/* eslint-disable no-unused-vars */
import URL from './url'
import request from './request'

const get = request.get
const post = request.post

let API = {
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
  }
}

export default API
