<template>
  <div id="select-label">
    <el-select v-if="isSelect" v-model="selectedValue" @visible-change="afterSelect">
      <el-option v-for="(item, index) in selectOptions"
        :key="index"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span v-else :class="selectedValue? '' : 'color-c'" :title="showTitle" @dblclick="toggelSelect">{{selectedValue || '暂未选择'}}</span>
  </div>
</template>

<script>
export default {
  name: 'SelectLabel',
  props: {
    selectOptions: {
      type: Array,
      default: () => {
        return []
      }
    },
    showTitle: {
      type: String,
      default: '双击切换区域'
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    // Function
    toggelSelect: {
      type: Function
    },
    afterSelect: {
      type: Function
    }
  },
  data () {
    return {
      selectedValue: ''
    }
  }
}
</script>

<style scoped>
#select-label {
  cursor: pointer;
}

#select-label .color-c {
  color: #cccccc
}
</style>
