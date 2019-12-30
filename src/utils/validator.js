import moment from 'moment'

let Validator = {
  isPhoneNumber (phone) {
    let regExp = new RegExp(/^1(3|4|5|6|7|8|9)\d{9}$/)
    return regExp.test(phone)
  },

  isEmail (email) {
    let regExp = new RegExp(/^[a-zA-Z_0-9]+@xdf.cn$/)
    return regExp.test(email)
  },

  isDate (date) {
    const dateValue = new Date(date)
    return moment(dateValue.toISOString()).isValid()
  },

  isBoolean (data, bValues = ['Y', 'N']) {
    return bValues.indexOf(data.toUpperCase()) >= 0
  },

  isNumber (data) {
    const regEx = /^-?[1-9]\d*$/
    return regEx.test(data)
  },

  // 身份证号码、护照号码
  isCardId (data) {
    const regEx = /(^\d{9}$)|(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return regEx.test(data)
  },
  //班级层级截取
  isZhiGao (data){
    const regEx='志高';
    if( regEx.test(data)) return '志高班'
  }, 
  isJinJin (data){
    const regEx='精进';
    if( regEx.test(data)) return '精进班'
  },
  isXinYuan(data){
    const regEx='行远';
    if( regEx.test(data)) return '行远班'
  },
  isZMC(data){
    const regEx='ZMC';
    if( regEx.test(data)) return 'ZMC班'
  }
}

export default Validator
