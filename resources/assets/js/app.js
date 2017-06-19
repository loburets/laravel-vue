
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * TODO
 * naming
 * routes
 * vuex
 */
Vue.component('article-list', require('./components/Article-list.vue'));

const app = new Vue({
    el: '#app',
    template: '<article-list :articles="articles"></article-list>',
    data: {
        articles: [
            { id: 0, name: 'Vegetables' },
            { id: 1, name: 'Cheese' },
            { id: 2, name: 'Whatever else humans are supposed to eat' },
            { id: 3, name: 'Whatever else humans are supposed to eat' },
        ]
    }
});
