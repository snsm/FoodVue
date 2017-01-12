import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import index from 'components/admin/index.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: index },
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
