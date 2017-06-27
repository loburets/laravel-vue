import { LOGIN_RESPONSE_MUTATION,  LOGOUT_MUTATION, FAILED_LOGIN_MUTATION } from './mutations'
import { UPDATE_INPUTS_ERRORS_MUTATION, RESET_INPUTS_MUTATION } from 'components/input'

/**
 * Send credentials to backend
 * @type {string}
 */
export const LOGIN_ACTION = 'LOGIN_ACTION'

/**
 * Send credentials to backend
 * @type {string}
 */
export const REGISTER_ACTION = 'REGISTER_ACTION'

/**
 * Check token at the local storage
 * @type {string}
 */
export const LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION = 'LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION'

export default {
    [LOGIN_ACTION] (context) {

        return new Promise((resolve, reject) => {

            axios.post('/api/jwt-login', context.state.inputs).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                context.commit(RESET_INPUTS_MUTATION)
                resolve()
            }).catch((error) => {
                context.commit(FAILED_LOGIN_MUTATION)
                context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
                reject()
            })
        })
    },
    [REGISTER_ACTION] (context) {

        return new Promise((resolve, reject) => {

            axios.post('/api/jwt-register', context.state.inputs).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                context.commit(RESET_INPUTS_MUTATION)
                resolve()
            }).catch((error) => {
                context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
                reject()
            })
        })
    },
    [LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION] (context) {

        let token = localStorage.getItem('token');

        if (typeof token !== 'string' || token.length === 0) {
            context.commit(FAILED_LOGIN_MUTATION)
            context.commit(LOGOUT_MUTATION)
            return
        }

        return new Promise((resolve, reject) => {
            axios.get('/api/jwt-check', {
                headers: { Authorization: 'Bearer ' + token }
            }).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => {
                context.commit(FAILED_LOGIN_MUTATION)
                context.commit(LOGOUT_MUTATION)
                reject()
            })
        })
    },
}