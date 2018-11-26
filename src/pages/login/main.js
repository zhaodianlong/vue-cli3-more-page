import Vue from 'vue'
import App from './login.vue'
import { Button, Input } from 'element-ui'
import router from './router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
