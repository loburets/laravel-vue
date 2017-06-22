import { LOADED_ARTICLES_MUTATION, NOT_LOADED_MUTATION } from './mutations'

/**
 * Load articles from backend
 * @type {string}
 */
export const LOAD_ARTICLES_ACTION = 'LOAD_ARTICLES_ACTION'

export default {
    [LOAD_ARTICLES_ACTION] (context, page) {

        if (typeof(page) === 'undefined') {
            page = 1
        }

        context.commit(NOT_LOADED_MUTATION)

        return new Promise((resolve, reject) => {
            axios.get('/api/article', { params: { page: page } }).then((response) => {
                context.commit(LOADED_ARTICLES_MUTATION, response)
                resolve()
            }).catch((error) => { console.log(error.response.data); reject(); })
        })
    },
}