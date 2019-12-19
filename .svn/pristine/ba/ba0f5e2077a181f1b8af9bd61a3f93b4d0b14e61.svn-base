import Mock from 'mockjs'

let data = {
  login: (request) => {
    const { userName, password } = JSON.parse(request.body)
    let loginResult

    if (userName === 'wangjingjing@xdf.cn' && password === 'xdf_1234') {
      loginResult = {
        userName: '汪静静',
        email: 'wangjingjing@xdf.cn',
        IsSuccess: true
      }
    } else if (userName === 'chengxiang@xdf.cn' && password === 'xdf_1234') {
      loginResult = {
        userName: '程相',
        email: 'chengxiang@xdf.cn',
        IsSuccess: true
      }
    } else if (userName === 'hexin10@xdf.cn' && password === 'xdf_1234') {
      loginResult = {
        userName: '何鑫',
        email: 'hexin10@xdf.cn',
        IsSuccess: true
      }
    } else if (userName === 'zhoumeng11@xdf.cn' && password === 'xdf_1234') {
      loginResult = {
        userName: '周猛',
        email: 'zhoumeng11@xdf.cn',
        IsSuccess: true
      }
    } else if (userName === 'xiewenyu@xdf.cn' && password === 'xdf_1234') {
      loginResult = {
        userName: '谢文禹',
        email: 'xiewenyu@xdf.cn',
        IsSuccess: true
      }
    } else if (userName === 'admin' && password === 'xdf_1234') {
      loginResult = {
        userName: 'admin',
        email: 'admin@xdf.cn',
        IsSuccess: true
      }
    } else {
      loginResult = {
        IsSuccess: false,
        Msg: '用户名或密码错误'
      }
    }

    return loginResult
  },

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

  // 续报率
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
