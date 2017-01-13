import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App'
import login from 'components/admin/login.vue';
import index from 'components/admin/index.vue';
import sortList from 'components/admin/sortList.vue';

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: login },
    { path: '/index', component: index },
    { path: '/sort-list', component: sortList },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})
