//just update articles in the store
export const UPDATE_ARTICLES_MUTATION = 'UPDATE_ARTICLES_MUTATION'
//load articles from server
export const LOAD_ARTICLES_ACTION = 'LOAD_ARTICLES_ACTION'
//proceed response after articles loading
export const LOADED_ARTICLES_MUTATION = 'LOADED_ARTICLES_MUTATION'

export default {
    namespaced: true,
    state: {
        articles: [],
        loaded: false,
        perPage: null,
        currentPage: null,
        lastPage: null,
        path: null,
    },
    mutations: {
        [UPDATE_ARTICLES_MUTATION] (state, articles) {
            state.articles = articles
        },
        [LOADED_ARTICLES_MUTATION] (state, response) {
            let data = response.data;

            state.articles = data.data
            state.loaded = true
            state.perPage = data.per_page
            state.currentPage = data.current_page
            state.lastPage = data.last_page
            state.path = data.path
        },
    },
    actions: {
        [LOAD_ARTICLES_ACTION] (context, page) {
            return new Promise((resolve, reject) => {
                axios.get('/api/article', { params: { page: page } }).then((response) => {
                    context.commit(LOADED_ARTICLES_MUTATION, response)
                    resolve()
                }).catch((error) => { console.log(error.response.data); reject(); })
            })
        },
    },
}
