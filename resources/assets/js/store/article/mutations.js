import {inputMutations} from 'components/input'

/**
 * Just update articles in the store
 * @type {string}
 */
export const UPDATE_ARTICLES_MUTATION = 'UPDATE_ARTICLES_MUTATION'

/**
 * Proceed response after articles loading
 * @type {string}
 */
export const LOADED_ARTICLES_MUTATION = 'LOADED_ARTICLES_MUTATION'

/**
 * Set loaded state to false
 * @type {string}
 */
export const NOT_LOADED_MUTATION = 'NOT_LOADED_MUTATION'

/**
 * Reset loaded article
 * @type {string}
 */
export const RESET_ARTICLE_MUTATION = 'RESET_ARTICLE_MUTATION'

/**
 * Update article in the store
 * @type {string}
 */
export const LOADED_ARTICLE_MUTATION = 'LOADED_ARTICLE_MUTATION'

export default {
    [UPDATE_ARTICLES_MUTATION] (state, articles) {
        state.articles = articles
    },
    [NOT_LOADED_MUTATION] (state) {
        state.loaded = false
        state.articles = []
    },
    [LOADED_ARTICLES_MUTATION] (state, response) {
        let data = response.data

        state.articles = data.data
        state.loaded = true
        state.perPage = data.per_page
        state.currentPage = data.current_page
        state.lastPage = data.last_page
        state.path = data.path
    },
    [RESET_ARTICLE_MUTATION] (state) {

        state.article = {}
    },
    [LOADED_ARTICLE_MUTATION] (state, response) {

        state.article = response.data
    },
    ...inputMutations,
}