import Vue from 'vue'
import Vuex from 'vuex'
import Article from './Article';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Article,
    },
    mutations: {
        'UPDATE_ARTICLES_MUTATION' (state, articles) {
            state.Article.articles = articles
            state.Article.loaded = true
        }
    },
})

export default store