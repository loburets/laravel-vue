import Vue from 'vue'
import Vuex from 'vuex'
import Article from './article/'
import User from './user/'
import Message from './message/'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Article,
        User,
        Message,
    },
})

export default store