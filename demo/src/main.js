import Vue from 'vue'
import App from './App.vue'
import SimpleFlowChart from '@wanglin1994/simple-flow-chart'
// import '@wanglin1994/simple-flow-chart/dist/simpleFlowChart.css'
// import CustomNodeContent from './components/CustomNodeContent'
// import CustomNodeTypeContent from './components/CustomNodeTypeContent'

Vue.config.productionTip = false
// Vue.component(CustomNodeContent.name, CustomNodeContent)
// Vue.component(CustomNodeTypeContent.name, CustomNodeTypeContent)
Vue.use(SimpleFlowChart, {
  notRegisterNodeContent: false, // 自定义节点内容
  notRegisterNodeTypeContent: false // 自定义添加节点的悬浮面板
})

new Vue({
  render: h => h(App)
}).$mount('#app')
