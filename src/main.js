import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@assets/scss/main.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import  '@/plugins/Axios'

import Toast from 'vue-toastification'
import "../public/css/ToastNotification.css"


import ModalAdd from "@/components/Modal/ModalAdd";
import ModalEdit from "@/components/Modal/ModalEdit";
import ModalDelete from "@/components/Modal/ModalDelete";

// import * as Notification from '@/plugins/Notification'
// Vue.prototype.$toast = Notification;

Vue.config.productionTip = false
Vue.component('ModalAdd',ModalAdd)
Vue.component('ModalEdit',ModalEdit)
Vue.component('ModalDelete',ModalDelete)


Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});


new Vue({
  router,
  store,
  vuetify,
  Toast,
  render: h => h(App)
}).$mount('#app')
