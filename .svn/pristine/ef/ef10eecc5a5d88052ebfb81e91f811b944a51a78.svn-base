<template>
  <div id="header" :class="hasBottomLine? 'border-bottom' : ''">
    <span>{{sysTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    sysTitle: {
      type: String,
      default: 'THis is a System Project Title'
    },
    hasBottomLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.border-bottom {
   border-bottom: 1px solid #ffffff
}
</style>
