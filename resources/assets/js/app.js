


require('./bootstrap');

window.Vue = require('vue');

    // my golbal component

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('header-component', require('./components/global/header.vue'));
Vue.component('sidebar-component', require('./components/global/sidebar.vue'));
Vue.component('footer-component', require('./components/global/footer.vue'));


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// my local component

const router = new VueRouter({
    mode: 'history',
    routes: [



        {
            path: '/',
            name: 'dashboard',
            component: require('./components/views/dashboard.vue')
        },

        // PRODUCT ROUTES

        {
            path: 'add-Product',
            name: 'addProduct',
            component: require('./components/views/product/addProduct.vue')
        },
        {
            path: 'view-Product',
            name: 'viewProduct',
            component: require('./components/views/product/viewProduct.vue')
        },
        {
            path: 'edit-Product',
            name: 'editProduct',
            component: require('./components/views/product/editProduct.vue')
        },




    ],
});


new Vue({
    el: '#app',
    router,
});
