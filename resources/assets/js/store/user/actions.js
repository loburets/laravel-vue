import { LOGIN_RESPONSE_MUTATION } from './mutations'
import { LOGOUT_MUTATION } from './mutations'

/**
 * Send credentials to backend
 * @type {string}
 */
export const LOGIN_ACTION = 'LOGIN_ACTION'

/**
 * Check token at the local storage
 * @type {string}
 */
export const LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION = 'LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION'

export default {
    [LOGIN_ACTION] (context, credentials) {

        return new Promise((resolve, reject) => {
            axios.post('/api/jwt-login', credentials).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => reject(error.response))
        })
    },
    [LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION] (context) {

        let token = localStorage.getItem('token');

        if (typeof token !== 'string' || token.length === 0) {
            context.commit(LOGOUT_MUTATION)
            return
        }

        return new Promise((resolve, reject) => {
            axios.get('/api/jwt-check', {
                headers: { Authorization: 'Bearer ' + token }
            }).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => context.commit(LOGOUT_MUTATION))
        })
    },
}