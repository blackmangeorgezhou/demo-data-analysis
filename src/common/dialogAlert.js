import { ResultCode } from '@/common'

let dialogAlert = function (Vue, options) {
  Vue.prototype.showError = function (errorMsg) {
    this.$confirm(errorMsg, '错误', {
      confirmButtonText: '确定',
      callback: action => {
        // Request Gateway Timeout.
        if (errorMsg.indexOf('504') >= 0) {
          this.$router.push('/login')
        }
      },
      type: 'error',
      showCancelButton: false,
      center: true
    }).then()
  }

  Vue.prototype.showWarning = function (warning) {
    this.$confirm(`^_^  ${warning}`, '提示', {
      confirmButtonText: '确定',
      callback: action => {},
      type: 'warning',
      showCancelButton: false,
      center: true
    }).then()
  }

  Vue.prototype.showSuccess = function (msg) {
    this.$confirm(msg, '成功', {
      confirmButtonText: '确定',
      callback: action => {},
      type: 'info',
      showCancelButton: false,
      center: true
    }).then()
  }

  Vue.prototype.showMessage = function (msg, typeIndex = ResultCode.SUCCESS) {
    const message = msg || '操作成功！'
    let type = 'success'
    switch (typeIndex) {
      case ResultCode.SUCCESS:
        break
      case ResultCode.WARNING:
        type = 'error'
        break
      case ResultCode.EROR:
        type = 'warning'
        break
      default:
        break
    }
    this.$message({
      showClose: true,
      message: message,
      type: type
    })
  }
}

export default dialogAlert
