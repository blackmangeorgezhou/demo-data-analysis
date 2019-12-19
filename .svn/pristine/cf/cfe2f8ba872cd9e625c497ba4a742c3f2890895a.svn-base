let Convertor = {
  generateTreeObj: (fieldArray, startIndex, obj) => {
    for (let i = startIndex; i < fieldArray.length; i++) {
      if (startIndex === (fieldArray.length - 1)) {
        return {
          label: obj[fieldArray[i]],
          studentCount: obj.StudentNum,
          children: []
        }
      } else {
        return {
          label: obj[fieldArray[i]],
          studentCount: obj.StudentNum,
          children: [Convertor.generateTreeObj(fieldArray, startIndex + 1, obj)]
        }
      }
    }
  },
  generateSpecialStringParam: (array) => {
    if (!array || !array.length) return `''`

    let paramStr = ''
    for (let i = 0; i < array.length; i++) {
      paramStr += i === (array.length - 1) ? `'${array[i]}'` : `'${array[i]}',`
    }
    return paramStr
  }
}

export default Convertor
