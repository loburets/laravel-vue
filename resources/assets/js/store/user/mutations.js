/**
 * Process login response
 * @type {string}
 */
export const LOGIN_RESPONSE_MUTATION = 'LOGIN_RESPONSE_MUTATION'

export default {
    [LOGIN_RESPONSE_MUTATION] (state, response) {

        if (response.data.token) {
            state.token = response.data.token
            state.authorized = true
            state.email = JSON.parse(response.config.data).email
        } else {
            state.authorized = false
        }
    },
}