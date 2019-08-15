import Mock from 'mockjs'

let data = {
  // 招生指示
  getAdmissionInstructions: (request) => {
    const result = Mock.mock({
      IsSuccess: true,
      'List|1-10': [
        {
          'StudentNum|1-100': 10,
          'Subject|1': ['语文', '数学', '英语'],
          'Grade|1': ['初一', '初二', '初三'],
          'Region|1': ['吴中区', '吴江区', '姑苏区', '相城区', '园区'],
          'Department|1': ['少儿', '中学', '国外']
        }
      ]
    })

    return result
  },

  // 扩班人数
  getExpandSubjectStudentNum: () => {
    const result = {
      IsSuccess: true,
      List: []
    }

    return result
  },

  // 续班率
  getRateForContinueToHaveClasses: () => {
    const result = {
      IsSuccess: true,
      List: []
    }

    return result
  },

  // 教室产能
  getClassRoomsCapacity: () => {
    const result = {
      IsSuccess: true,
      List: []
    }

    return result
  },

  // 联报人数
  getUnionSignUp: () => {
    const result = {
      IsSuccess: true,
      List: []
    }

    return result
  }
}

export default data
