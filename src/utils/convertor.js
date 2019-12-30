import moment from 'moment'

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
  },

  getSimpleToDuble(num, arr) {  //一维数组 --> 二维数组
    const iconsArr = [];
    arr.forEach((item, index) => {
      const page = Math.floor(index / num);
      if (!iconsArr[page]) {
        iconsArr[page] = [];
      }
      iconsArr[page].push(item);
    });
    const newArray = iconsArr[0].map(function(col, i) {
      return iconsArr.map(function(row) {
        return row[i];
      })
    });
    return newArray
  },
  getSortBy(){//少儿部--》国外考试部排序
    const resArr=[4,2,1,3,5];
    resData.forEach(item=>{
          let sortId = resArr.indexOf(item.id)
          item.sortId = sortId
    })
    function sort(prop) {
      return function (obj1, obj2) {
        var val1 = obj1[prop]
        var val2 = obj2[prop]
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1)
                val2 = Number(val2)
            }
            if (val1 < val2) {
                return -1
            } else if (val1 > val2) {
                return 1
            } else {
                return 0
            }
        }
    }
  },
  getXEchartsData(params) {
    let XaixsArr = [];
    if(params[0].RDIncome){
      params[0].RDIncome.forEach((item, index) => {
        if(item.Month){
          XaixsArr[index] = item.Month;
        }
        else if (item.Grade){
          XaixsArr[index] = item.Grade;
        }
        else{
          XaixsArr[index] = item.RegionName;
        }   
      })
    }else{
      params[0].ClassRoomInfo.forEach((item, index) => {
        XaixsArr[index] = item.Quarter;
      })
    }
    return XaixsArr
  },
  getYEchartsData(params,index){
    let YaixSArr=[];
    if(params[index].RDIncome){
      params[index].RDIncome.forEach((item, index) => {
        YaixSArr.push(item.ManageTotal)
      })  
    }else{
      params[index].ClassRoomInfo.forEach((item, index) => {
        YaixSArr.push(Number(item.Percent.replace('%','')))
      })  
    }
    return YaixSArr
  },
  getYCarryOverBeginDateData(params,index){
    let YaixSArr=[];
    params[index].RDIncome.forEach((item, index) => {
      YaixSArr.push(item.ManageTotal)
    })
    return YaixSArr
  },
  getIndexPageData(params) {
    let newArr = [];
    let RDIncome = [];
    params[0].RDIncome.forEach((_item, _index) => {
      newArr.push({
        ManageDept: _item.ManageDept,
        RDIncome:[]
      });
    });
    params.forEach( item => {
      RDIncome.push({
        Grade:item.Grade,
        Month:item.Month,
        RegionName:item.RegionName,
        ManageTotal:'',
        GrowthPercent:'',
        Percent:item.Percent
      });
    })
    newArr.forEach((item,index)=>{
      newArr[index].RDIncome=JSON.parse(JSON.stringify(RDIncome))
    })
    for(let i=0;i<newArr.length;i++){
      for(let j=0;j<newArr[i].RDIncome.length;j++){
        if(params[j].RegionName==newArr[i].RDIncome[j].RegionName
        && params[j].RDIncome[i].ManageDept==newArr[i].ManageDept){
          newArr[i].RDIncome[j].ManageTotal=params[j].RDIncome[i].ManageTotal
          newArr[i].RDIncome[j].GrowthPercent=params[j].RDIncome[i].GrowthPercent
        }
      }
    }
    return newArr
  },
  getClassRoomInfoData(params){
    let newArr = [];
    let ClassRoomInfo = [];
    params[0].ClassRoomInfo.forEach((_item, _index) => {
      newArr.push({
        ManageDept: _item.ManageDept,
        ClassRoomInfo:[]
      });
    });
    params.forEach( item => {
      ClassRoomInfo.push({
        Quarter:item.Quarter,
        ManageTotal:'',
        Percent:'',
        GrowthPercent:''
      });
    })
    newArr.forEach((item,index)=>{
      newArr[index].ClassRoomInfo=JSON.parse(JSON.stringify(ClassRoomInfo))
    })
    for(let i=0;i<newArr.length;i++){
      for(let j=0;j<newArr[i].ClassRoomInfo.length;j++){
        if(params[j].Quarter==newArr[i].ClassRoomInfo[j].Quarter
        && params[j].ClassRoomInfo[i].ManageDept==newArr[i].ManageDept){
          newArr[i].ClassRoomInfo[j].ManageTotal=params[j].ClassRoomInfo[i].ManageTotal
          newArr[i].ClassRoomInfo[j].GrowthPercent=params[j].ClassRoomInfo[i].GrowthPercent
          newArr[i].ClassRoomInfo[j].Percent=params[j].ClassRoomInfo[i].Percent          
        }
      }
    }
    return newArr
  },

  convertRouterList(routerList = [], includeInactiveItem = false) {
    if (!routerList || !routerList.length) return []
  
    let newRouterList = []
  
    // order parentId ASC.
    routerList = routerList.sort((a, b) => {
      return a.ParentId !=""
    })
  
    for (let p of routerList) {
      // debugger
      p.CreatedAt = formatDate(p.CreatedAt) // formate 时间.
      p.IsActive = p.EnableMark // switch 开关赋值.
  
      if (p.ParentId=="") {
        includeInactiveItem ? newRouterList.push(p) : p.IsActive ? newRouterList.push(p) : null
      } else {
        const parent = newRouterList.find(x => x.Id === p.ParentId)
        if (parent) {
          // 当父路由的状态为"关闭"时, 子路由状态由父路由的状态决定.
          if (parent.IsActive) p.IsActive = parent.IsActive
          // id - 唯一标识.
          if (parent.Children && !parent.Children.find(x => x.Id === p.Id)) includeInactiveItem ? parent.Children.push(p) : p.IsActive ? parent.Children.push(p) : null
          else includeInactiveItem ? parent.Children = [p] : p.IsActive ? parent.Children = [p] : null
        }
      }
  
    }
  
    return newRouterList
  }
}

function formatDate (date, formateString = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(formateString)
}

export default Convertor
