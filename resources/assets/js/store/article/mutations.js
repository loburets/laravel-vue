import {inputMutations} from 'components/input'

/**
 * Just update articles in the store
 * @type {string}
 */
export const UPDATE_ARTICLE_LIST_MUTATION = 'UPDATE_ARTICLE_LIST_MUTATION'

/**
 * Proceed response after articles loading
 * @type {string}
 */
export const PROCESS_ARTICLE_LIST_RESPONSE_MUTATION = 'PROCESS_ARTICLE_LIST_RESPONSE_MUTATION'

/**
 * Set loaded state to false
 * @type {string}
 */
export const ARTICLE_LIST_NOT_LOADED_MUTATION = 'ARTICLE_LIST_NOT_LOADED_MUTATION'

/**
 * Reset loaded article
 * @type {string}
 */
export const RESET_ARTICLE_MUTATION = 'RESET_ARTICLE_MUTATION'

/**
 * Update article in the store
 * @type {string}
 */
export const PROCESS_ARTICLE_RESPONSE_MUTATION = 'PROCESS_ARTICLE_RESPONSE_MUTATION'

export default {
    [UPDATE_ARTICLE_LIST_MUTATION] (state, articles) {
        state.articles = articles
    },
    [ARTICLE_LIST_NOT_LOADED_MUTATION] (state) {
        state.loaded = false
        state.articles = []
    },
    [PROCESS_ARTICLE_LIST_RESPONSE_MUTATION] (state, response) {
        let data = response.data.data.articles

        state.articles = data.items
        state.loaded = true
        state.perPage = data.size
        state.currentPage = data.currentPage
        state.lastPage = data.lastPage
    },
    [RESET_ARTICLE_MUTATION] (state) {

        state.article = {}
    },
    [PROCESS_ARTICLE_RESPONSE_MUTATION] (state, response) {

        state.article = response.data.data.articles.items[0]
    },
    ...inputMutations,
}