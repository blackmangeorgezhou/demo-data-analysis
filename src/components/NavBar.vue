<template>
  <div :id="elementId" class="g-nav-bar">
    <div>今天 {{ currentDateTime.month }} 月{{ currentDateTime.day }} 日 {{ weekList[currentDateTime.Day] }} {{ currentDateTime.hour }}:{{ currentDateTime.minute }}:{{currentDateTime.second}}</div>
    <!-- to Component -->
    <div class="school-area">
      <span class="cursor-pointer" @dblclick="toSelect = true" v-if="!toSelect || !canSelectTitle" title="双击切换区域">{{selectedRegion}}</span>
      <el-select v-else v-model="selectedRegion" placeholder="请选择"  @visible-change="visableChange" @change="optionChange">
        <el-option v-for="(item, index) in regionOptions"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- -->
    <div>
      <ul>
        <li>
          <el-dropdown @command="dropdownClick">
            <span class="el-dropdown-link" style="color: #fff">
              <i class="fa fa-user-o"></i>
              <span>{{user ? user.userName : '苏小新'}}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/user-detail">个人信息</el-dropdown-item>
                <el-dropdown-item command="/change-password">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li @click="viewHelpDetail()" title="帮助">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span>帮助</span>
        </li>
        <li @click="logout()" title="退出">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Formate } from '@/utils'
import { Constants } from '@/common'
import { mapState, mapActions } from 'vuex'
import SelectLabel from '@/components/SelectLabel'

export default {
  name: 'NavBar',
  components: {
    SelectLabel
  },
  props: {
    canSelectTitle: {
      type: Boolean,
      default: true
    },

    regionOptions: {
      type: Array,
      default: () => {
        return [
          {
            label: '苏州新东方学校统一门户',
            value: '苏州新东方学校统一门户'
          }
        ]
      }
    },

    bgColor: {
      type: String,
      default: '#098d91'
    }
  },
  data () {
    return {
      currentDate: new Date(),
      weekList: Constants.weekList,
      commandList: ['个人信息', '修改密码'],
      toSelect: false,
      selectedRegion: ''
    }
  },

  mounted () {
    let navBarEle = document.getElementById(this.elementId)
    navBarEle.style.backgroundColor = this.bgColor
  },

  created () {
    if (this.regionOptions[0].label) {
      this.selectedRegion = this.regionOptions[0].label
      // this.setCurrentRegion(this.selectedRegion)
    } else {
      this.selectedRegion = '暂未分区'
    }

    // 当前时间
    setInterval(this.getDateTime, 1000)
  },
  methods: {
    ...mapActions(['setCurrentRegion']),
    getDateTime () {
      this.currentDate = new Date()
    },

    logout () {
      this.showWarning(Constants.waitingToShow)
    },
    dropdownClick (command) {
      this.showWarning(Constants.waitingToShow)
    },
    viewHelpDetail () {
      this.showWarning(Constants.waitingToShow)
    },
    // 下拉菜单选择完触发
    visableChange (value) {
      this.toSelect = value
    },
    // option change.
    optionChange (option) {
      this.setCurrentRegion(option)
    }
  },
  computed: {
    ...mapState(['user', 'currentRegion']),
    currentDateTime () {
      return {
        month: Formate.formateNum(this.currentDate.getMonth() + 1),
        day: Formate.formateNum(this.currentDate.getDate()),
        Day: this.currentDate.getDay(),
        hour: Formate.formateNum(this.currentDate.getHours()),
        minute: Formate.formateNum(this.currentDate.getMinutes()),
        second: Formate.formateNum(this.currentDate.getSeconds())
      }
    },
    elementId () {
      return `nav-bar-${Formate.generateUUID()}`
    }
  }
}
</script>

<style scoped>
.g-nav-bar {
  color: #ffffff;
  display: flex;
  font-size: .875rem /* 14/16 */;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  /* background-color: #098d91 */
}

.school-area {
  font-size: x-large;
}

ul {
  display: flex;
}

ul>li {
  margin: 0 1.5625rem /* 25/16 */;
  cursor: pointer;
}

</style>
