import Vue from 'vue'
import router from "./router";
// import axios from 'axios'
// Vue.prototype.axios = axios
//统一引入
import * as API from './api'

import App from './App.vue'

//关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$API = API
  }
}).$mount('#app')
