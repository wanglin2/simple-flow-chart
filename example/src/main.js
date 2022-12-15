import Vue from 'vue'
import App from './App.vue'
import SimpleFlowChart from '@wanglin1994/simple-flow-chart';

Vue.config.productionTip = false
Vue.use(SimpleFlowChart)

new Vue({
  render: h => h(App),
}).$mount('#app')
