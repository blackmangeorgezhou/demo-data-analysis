import Pagination from './Pagination/index.vue'
import Grid from "./Grid";
var components=[
  {componentName:'Pagination',component:Pagination},
  {componentName:'Grid',component:Grid}
]
export default {
  
  install: function (Vue, opts) {
    components.map(item=>{
      Vue.component(item.componentName, item.component);
    })
  }
}