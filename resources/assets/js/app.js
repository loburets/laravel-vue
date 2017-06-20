require('./bootstrap')

window.Vue = require('vue')
import VueRouter from 'vue-router'

/**
 * TODO
 * vuex
 */
Vue.component('article-list', require('./components/Article-list.vue'))

Vue.use(VueRouter)

// TODO These can be imported from other files
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<article-list></article-list>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})

const app = new Vue({
    router,
    template: '<div>' +
        '<router-link to="/foo">Go to Foo</router-link> ' +
        '<router-link to="/bar">Go to Bar</router-link>' +
        '<router-view class="view"></router-view>' +
    '</div>'
}).$mount('#app')
