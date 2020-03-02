import Vue from 'vue'
import App from './ChatApp.vue'
import Chat from 'vue-beautiful-chat'
//import Chat from './chat/vue-beautiful-chat'

/* eslint-disable */

Vue.config.productionTip = false

Vue.use(Chat, {})

new Vue({
  render: h => h(App),
}).$mount('#app')
