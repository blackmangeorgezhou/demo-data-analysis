<template>
  <div class="organization-tree">
    <vue2-org-tree :data="treeData"
    :horizontal="horizontal"
    :collapsable="collapsable"
    :label-class-name="labelClassName + ' color-f'"
    :render-content="renderContent"
    @on-node-click="onNodeClick"></vue2-org-tree>
  </div>
</template>

<script>
export default {
  name: 'OrganizationTree',
  props: {
    treeData: {
      type: Object,
      default: () => {
        return {
          label: '招生指示',
          children: [
            {
              label: '产品研发部',
              children: [
                {
                  label: '研发-前端'
                },
                {
                  label: '研发-后端'
                },
                {
                  label: 'UI设计'
                },
                {
                  label: '产品经理'
                }
              ]
            },
            {
              label: '销售部',
              children: [
                {
                  label: '销售一部'
                },
                {
                  label: '销售二部'
                }
              ]
            },
            {
              label: '财务部'
            },
            {
              label: 'HR人事'
            }
          ]
        }
      }
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    labelClassName: {
      type: String,
      default: 'bg-white'
    }
  },

  data () {
    return {
      collapsable: true
    }
  },

  methods: {
    renderContent (h, data) {
      return `${data.label} 【${data.studentCount}】`
    },

    onExpand (data) {
      if ('expand' in data) {
        data.expand = !data.expand
        if (!data.expand && data.children) {
          this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    onNodeClick (e, data) {
      this.onExpand(data)
    },
    collapse (list) {
      var _this = this
      list.forEach(function (child) {
        if (child.expand) {
          child.expand = false
        }
        child.children && _this.collapse(child.children)
      })
    }
  }
}
</script>
