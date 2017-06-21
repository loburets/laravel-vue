require('./bootstrap')

import router from './router'
import store from './store'
import App from './components/App'
import Vue from 'vue'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})

/**
 * TODO:
 * Registration/login/logout: see https://auth0.com/blog/build-an-app-with-vuejs/ https://github.com/muzichen/laravel-vue-jwt
 * Remove Passport
 * CRUD
 * Update button instead autoupdate?
 * Header
 * Vue tests
 * rename store/Article to lower case
 **/