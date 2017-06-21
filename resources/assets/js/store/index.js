import Vue from 'vue'
import Vuex from 'vuex'
import Article from './Article/'
import User from './user/'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Article,
        User,
    },
})

export default store