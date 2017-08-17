import { PROCESS_ARTICLE_LIST_RESPONSE_MUTATION, ARTICLE_LIST_NOT_LOADED_MUTATION, RESET_ARTICLE_MUTATION, PROCESS_ARTICLE_RESPONSE_MUTATION } from './mutations'
import { UPDATE_INPUTS_ERRORS_MUTATION, RESET_INPUTS_MUTATION, SET_METHOD_FIELD_MUTATION } from 'components/input'

/**
 * Load articles from backend
 * @type {string}
 */
export const LOAD_ARTICLE_LIST_ACTION = 'LOAD_ARTICLE_LIST_ACTION'

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

/**
 * Load article from backend
 * @type {string}
 */
export const LOAD_ARTICLE_ACTION = 'LOAD_ARTICLE_ACTION'

/**
 * Update article at backend
 * @type {string}
 */
export const UPDATE_ARTICLE_ACTION = 'UPDATE_ARTICLE_ACTION'

export default {
    [LOAD_ARTICLE_LIST_ACTION] (context, page) {

        if (typeof(page) === 'undefined') {
            page = context.state.currentPage
        }

        if (typeof(page) === 'undefined') {
            page = 1
        }

        context.commit(ARTICLE_LIST_NOT_LOADED_MUTATION)

        return new Promise((resolve, reject) => {
            axios.get('/api/article', { params: { page: page } }).then((response) => {
                context.commit(PROCESS_ARTICLE_LIST_RESPONSE_MUTATION, response)
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
                context.dispatch(LOAD_ARTICLE_LIST_ACTION)
                    .then(() => {
                        resolve()
                    })
            }).catch((error) => {
                console.log(error.response.data)
                reject()
            })
        })
    },
    [LOAD_ARTICLE_ACTION] (context, id) {

        context.commit(RESET_ARTICLE_MUTATION)

        return new Promise((resolve, reject) => {
            axios.get('/api/article/'+ id).then((response) => {
                context.commit(PROCESS_ARTICLE_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => {
                console.log(error.response.data)
                reject()
            })
        })
    },
    [UPDATE_ARTICLE_ACTION] (context) {

        return new Promise((resolve, reject) => {
            context.commit(SET_METHOD_FIELD_MUTATION, 'PATCH')

            axios.post('/api/article/' + context.state.article.id, context.state.inputs).then((response) => {
                context.commit(RESET_INPUTS_MUTATION)
                resolve()
            }).catch((error) => {
                context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
                reject()
            })
        })
    },
}