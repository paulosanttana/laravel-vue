
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');


import router from './routes/routers'
import store from './vuex/store'

/***
 * Components globais
 */
Vue.component('test-component', require('./components/TestComponent').default)

const app = new Vue({
    router,
    store,
    el: '#app'
});
