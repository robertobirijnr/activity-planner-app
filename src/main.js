import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'


Vue.config.productionTip = false

Vue.filter('timeformat',function(timeStamp){
  if(!timeStamp) return ''

  return moment(timeStamp).format('LLL')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
