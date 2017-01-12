import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import login from 'components/admin/login.vue';
import index from 'components/admin/index.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: login },
    { path: '/index', component: index },
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
