<template>
  <div class="classroom-capcity">
    <p class="display-between" style="width: 50%">
      <span>
        <p>
          <el-tag>上一季度：</el-tag>
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
        </p>

        <p style="margin-top: .5rem">
          <el-tag>下一季度：</el-tag>
          <el-select v-model="queryConditions.p_next_Squarter" placeholder="请选择季度" multiple>
            <el-option v-for="(item, index) in squarterOptions"
            :key="index"
            :label="item.label"
            :value="item.value"></el-option>
          </el-select>
          <el-date-picker
            v-model="queryConditions.nexDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </p>
      </span>
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
        p_squarter: [2],
        p_next_Squarter: [3, 5],
        date: Constants.defaultDateValues,
        nexDate: Constants.defaultDateValues
      },
      squarterOptions: Constants.squarterOptions,
      treeLevelFields: ['Department', 'Region', 'Campus', 'SubjectName']
    }
  },

  async created () {
    await this.loaddata()
  },

  methods: {
    async loaddata () {
      if (!this.queryConditions.date || !this.queryConditions.date[0]) {
        this.showError('请选填上一季度的开始时间！')
        return
      }

      if (!this.queryConditions.date || !this.queryConditions.date[1]) {
        this.showError('请选填上一季度的结束时间！')
        return
      }

      if (!this.queryConditions.nexDate || !this.queryConditions.nexDate[0]) {
        this.showError('请选填下一季度的开始时间！')
        return
      }

      if (!this.queryConditions.nexDate || !this.queryConditions.nexDate[1]) {
        this.showError('请选填下一季度的结束时间！')
        return
      }

      const reqParams = this.genrateReqParams()
      let response = await API.getExpandSubjectStudentNum(reqParams)
      console.log(response)
      if (response && response.resultCode === ResultCode.OK) {
        this.treeData = this.convertToTreeData('扩科人数', response.data, this.treeLevelFields)
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
              let subject = campus.children.find(x => x.label === item[fieldArray[3]])
              if (subject) {
                subject.studentCount += item.StudentNum
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
    },

    genrateReqParams () {
      let params = {
        p_dtBeginDate: this.queryConditions.date[0],
        p_dtEndDate: this.queryConditions.date[1],
        p_nextdtBeginDate: this.queryConditions.nexDate[0],
        p_nextdtEndDate: this.queryConditions.nexDate[1]
      }

      for (let i = 0; i < 4; i++) {
        params['p_squarter' + (i + 1)] = this.queryConditions.p_squarter.length > i ? this.queryConditions.p_squarter[i] : ''
        params['p_nextsquarter' + (i + 1)] = this.queryConditions.p_next_Squarter.length > i ? this.queryConditions.p_next_Squarter[i] : ''
      }

      return params
    }
  }
}
</script>
