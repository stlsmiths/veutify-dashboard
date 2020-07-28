import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

Vue.filter( 'currency', (value,ndec = 0) => {
  return new Intl.NumberFormat('en-US',{
    maximumFractionDigits: ndec,
    minimumFractionDigits: ndec }).format(value)
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
