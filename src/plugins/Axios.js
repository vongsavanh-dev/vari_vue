import Vue from 'vue';
import axios from 'axios';
import store from  '../store'

if (store.getters['User/isAuth']) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters['User/getToken'];
}

export const $axios = axios.create(
    {
        baseURL: process.env.VUE_APP_BASE_API_URL,
    }
);
export const $http = axios.create(
    {
        baseURL: process.env.VUE_APP_BASE_API_ADDRESS,
    }
);

Vue.prototype.$axios = $axios;
Vue.prototype.$http = $http;
