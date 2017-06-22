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
 * Registration
 * Remove Passport
 * CRUD
 * Update button instead autoupdate?
 * Vue tests
 **/