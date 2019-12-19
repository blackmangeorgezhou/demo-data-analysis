<template>
  <div class="table-tempate">
    <el-table>
      <el-table-column v-for="(item, index) in columnFields"
      :key="index"
      :label="item.label"
      :prop="item.field"></el-table-column>
    </el-table>
    <el-pagination v-if="havePagination"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'TableTemplate',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },

    columnFields: {
      type: Array,
      default: () => {
        return []
      }
    },

    havePagination: {
      type: Boolean,
      default: false
    }
  }
}
</script>
