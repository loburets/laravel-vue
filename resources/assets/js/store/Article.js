export const UPDATE_ARTICLES_MUTATION = 'UPDATE_ARTICLES_MUTATION'
export const LOAD_ARTICLES_ACTION = 'LOAD_ARTICLES_ACTION'

export default {
    namespaced: true,
    state: {
        articles: [],
        loaded: false,
    },
    mutations: {
        [UPDATE_ARTICLES_MUTATION] (state, articles) {
            state.articles = articles
            state.loaded = true
        }
    },
    actions: {
        [LOAD_ARTICLES_ACTION] (context) {
            return new Promise((resolve, reject) => {
                axios.get('/api/article').then((response) => {
                    context.commit(UPDATE_ARTICLES_MUTATION, {
                        articles: response.data.data
                    })
                    resolve()
                }).catch((error) => { console.log(error.response.data); reject(); })
            })

        }
    },
}
