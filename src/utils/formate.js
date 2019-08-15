import moment from 'moment'
import uuidv1 from 'uuid/v1'

function formatDate (date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

function formateNum (num) {
  return num < 10 ? `0${num}` : num
}

function formateTreeLabel (label, studentNum) {
  return `${label}  【${studentNum}】`
}

function generateUUID () {
  return uuidv1()
}

export default {
  formateNum,
  formatDate,
  formateTreeLabel,
  generateUUID
}
