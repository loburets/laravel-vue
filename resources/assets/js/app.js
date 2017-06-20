require('./bootstrap')

import router from './router'
import App from './components/App'
import Vue from 'vue'

/**
 * TODO
 * vuex
 */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
