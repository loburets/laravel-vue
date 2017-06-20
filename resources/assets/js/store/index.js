import Vue from 'vue'
import Vuex from 'vuex'
import Article from './Article'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Article,
    },
})

export default store