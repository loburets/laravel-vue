import { LOADED_ARTICLES_MUTATION, NOT_LOADED_MUTATION } from './mutations'
import { UPDATE_INPUTS_ERRORS_MUTATION, RESET_INPUTS_MUTATION } from 'components/input'

/**
 * Load articles from backend
 * @type {string}
 */
export const LOAD_ARTICLES_ACTION = 'LOAD_ARTICLES_ACTION'

/**
 * Create new article
 * @type {string}
 */
export const CREATE_ARTICLE_ACTION = 'CREATE_ARTICLE_ACTION'

/**
 * Delete article
 * @type {string}
 */
export const DELETE_ARTICLE_ACTION = 'DELETE_ARTICLE_ACTION'

export default {
    [LOAD_ARTICLES_ACTION] (context, page) {

        if (typeof(page) === 'undefined') {
            page = context.state.currentPage
        }

        if (typeof(page) === 'undefined') {
            page = 1
        }

        context.commit(NOT_LOADED_MUTATION)

        return new Promise((resolve, reject) => {
            axios.get('/api/article', { params: { page: page } }).then((response) => {
                context.commit(LOADED_ARTICLES_MUTATION, response)
                resolve()
            }).catch((error) => {
                console.log(error.response.data)
                reject()
            })
        })
    },
    [CREATE_ARTICLE_ACTION] (context) {

        return new Promise((resolve, reject) => {
            axios.post('/api/article', context.state.inputs).then((response) => {
                context.commit(RESET_INPUTS_MUTATION)
                resolve()
            }).catch((error) => {
                context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
                reject()
            })
        })
    },
    [DELETE_ARTICLE_ACTION] (context, id) {

        return new Promise((resolve, reject) => {
            axios.post('/api/article/' + id, { '_method' : 'DELETE' }).then((response) => {
                context.dispatch(LOAD_ARTICLES_ACTION)
                    .then(() => {
                        resolve()
                    })
            }).catch((error) => {
                console.log(error.response.data)
                reject()
            })
        })
    },
}