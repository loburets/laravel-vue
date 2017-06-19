
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * TODO
 * vuex
 */
Vue.component('article-list', require('./components/Article-list.vue'))
//todo import router-link?
// Vue.component('router-link', require('vue-router'))

Vue.use(VueRouter)

// TODO These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<article-list></article-list>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    // router,
    template: '<router-link to="/foo">Go to Foo</router-link> <router-link to="/bar">Go to Bar</router-link>'
}).$mount('#app')
