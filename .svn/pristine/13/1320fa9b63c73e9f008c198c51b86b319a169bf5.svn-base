<template>
  <div class="classroom-capcity">
    <p>
      <el-select v-model="queryConditions.p_squarter" placeholder="请选择季度" multiple>
        <el-option v-for="(item, index) in squarterOptions"
        :key="index"
        :label="item.label"
        :value="item.value"></el-option>
      </el-select>
      <el-date-picker
        v-model="queryConditions.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd">
      </el-date-picker>
      <el-button type="success" @click="loaddata" plain>查询</el-button>
    </p>
    <organization-tree v-if="treeData" :labelClassName="'bg-098d91 font-size-small'" :treeData="treeData"></organization-tree>
  </div>
</template>

<script>
import { API } from '@/services'
import { Convertor } from '@/utils'
import { ResultCode, ResultMsg, Constants } from '@/common'
import OrganizationTree from '@/components/OrganizationTree'

export default {
  name: 'ClassRoomCapcity',

  components: {
    OrganizationTree
  },

  data () {
    return {
      treeData: null,
      queryConditions: {
        p_squarter: Constants.allSquarterValues,
        date: Constants.defaultDateValues
      },
      squarterOptions: Constants.squarterOptions,
      treeLevelFields: ['Department', 'Region', 'Campus', 'ClassRoom', 'ClassName', 'ClassCode']
    }
  },

  async created () {
    await this.loaddata()
  },

  methods: {
    async loaddata () {
      if (!this.queryConditions.date || !this.queryConditions.date[0]) {
        this.showError('请选填开始时间！')
        return
      }

      if (!this.queryConditions.date || !this.queryConditions.date[1]) {
        this.showError('请选填结束时间！')
        return
      }

      const reqParams = {
        p_squarter: Convertor.generateSpecialStringParam(this.queryConditions.p_squarter),
        p_dtBeginDate: this.queryConditions.date[0],
        p_dtEndDate: this.queryConditions.date[1]
      }
      let response = await API.getClassRoomsCapacity(reqParams)
      console.log(response)
      if (response && response.resultCode === ResultCode.OK) {
        this.treeData = this.convertToTreeData('教室产能', response.data, this.treeLevelFields)
      } else {
        alert(ResultMsg.ResultMsg)
      }
    },

    convertToTreeData (parentLable, list, fieldArray) {
      let totalCount = 0

      let children = []
      list = list.sort((a, b) => {
        return a.Department - b.Department
      })
      for (let item of list) {
        totalCount += item.StudentNum
        let department = children.find(x => x.label === item[fieldArray[0]])
        if (department) {
          department.studentCount += item.StudentNum
          let region = department.children.find(x => x.label === item[fieldArray[1]])
          if (region) {
            region.studentCount += item.StudentNum
            let campus = region.children.find(x => x.label === item[fieldArray[2]])
            if (campus) {
              campus.studentCount += item.StudentNum
              let classRoom = campus.children.find(x => x.label === item[fieldArray[3]])
              if (classRoom) {
                classRoom.studentCount += item.StudentNum
                let className = classRoom.children.find(x => x.label === item[fieldArray[4]])

                if (className) {
                  className.studentCount += item.StudentNum

                  className.children.push({
                    label: item.ClassCode,
                    studentCount: item.StudentNum
                  })
                } else {
                  classRoom.children.push(Convertor.generateTreeObj(this.treeLevelFields, 4, item))
                }
              } else {
                campus.children.push(Convertor.generateTreeObj(this.treeLevelFields, 3, item))
              }
            } else {
              region.children.push(Convertor.generateTreeObj(this.treeLevelFields, 2, item))
            }
          } else {
            department.children.push(Convertor.generateTreeObj(this.treeLevelFields, 1, item))
          }
        } else {
          children.push(Convertor.generateTreeObj(this.treeLevelFields, 0, item))
        }
      }

      const finalTreeData = {
        label: parentLable,
        studentCount: totalCount,
        children: children
      }

      return finalTreeData
    }
  }
}
</script>
