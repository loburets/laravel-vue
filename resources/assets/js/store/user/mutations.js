import {inputMutations} from 'components/input'

/**
 * Process login response
 * @type {string}
 */
export const LOGIN_RESPONSE_MUTATION = 'LOGIN_RESPONSE_MUTATION'

/**
 * Remove token and user's data
 * @type {string}
 */
export const LOGOUT_MUTATION = 'LOGOUT_MUTATION'

export default {
    [LOGIN_RESPONSE_MUTATION] (state, response) {

        let token = response.data.token

        if (typeof(token) !== 'string' || token.length === 0) {
            return
        }

        state.token = token
        state.authorized = true
        state.email = response.data.user.email
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    [LOGOUT_MUTATION] (state) {

        state.token = ''
        state.authorized = false
        state.email = ''
        localStorage.setItem('token', '')
    },
    ...inputMutations,
}