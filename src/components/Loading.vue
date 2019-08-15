<template>
  <div id="data-loading-spinner">
    <i class="el-icon-loading icon-loading"></i>
    <!-- <p>加载中...</p> -->
  </div>
</template>

<script>
export default {
  name: 'TheLoading',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#data-loading-spinner {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0,0,0, .5);
  z-index: 500;
  color:#e6e6e6;
  font-size: .5rem
}

.icon-loading {
  font-size: 4rem;
}
</style>
