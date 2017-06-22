import { LOGIN_RESPONSE_MUTATION, LOGIN_ERROR_RESPONSE_MUTATION, LOGOUT_MUTATION } from './mutations'

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
    [LOGIN_ACTION] (context) {

        let credentials = {
            email: context.state.inputs.email.value,
            password: context.state.inputs.password.value,
        }

        return new Promise((resolve, reject) => {

            axios.post('/api/jwt-login', credentials).then((response) => {
                context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => {
                context.commit(LOGIN_ERROR_RESPONSE_MUTATION, error)
            })
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