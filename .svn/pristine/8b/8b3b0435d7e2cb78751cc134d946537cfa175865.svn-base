
/**
 * file2JSON.js
 * @param {*} file 文件流
 * @param {*} fieldArr 列名数组
 * @param {*} sheetName sheet名
 */
import XLSX from 'xlsx'
let File2JSON = (file, fieldArr, sheetName) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = e => {
      // 取出数据
      let data = e.target.result
      let sheet = XLSX.read(data, {
        type: 'binary'
      }).Sheets[sheetName]
      let arr = []
      for (let key in sheet) {
        if (sheet[key].v) arr.push(sheet[key].v)
      }
      // 按列数分组
      let columnNum = fieldArr.length
      let arrList = []
      for (var i = 0, j = arr.length; i < j; i += columnNum) {
        arrList.push(arr.slice(i, i + columnNum))
      }
      arrList.shift()
      // 包装成对象
      let newArrList = []
      arrList.forEach((outerItem, outerIndex) => {
        let newOuterItem = {}
        outerItem.forEach((item, index) => {
          newOuterItem[fieldArr[index]] = item
        })
        newArrList.push(newOuterItem)
      })
      resolve(newArrList)
    }
    reader.readAsBinaryString(file)
  })
}

export default File2JSON
