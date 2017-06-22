/**
 * Process login response
 * @type {string}
 */
export const LOGIN_RESPONSE_MUTATION = 'LOGIN_RESPONSE_MUTATION'

/**
 * Process login response in error case
 * @type {string}
 */
export const LOGIN_ERROR_RESPONSE_MUTATION = 'LOGIN_ERROR_RESPONSE_MUTATION'

/**
 * Remove token and user's data
 * @type {string}
 */
export const LOGOUT_MUTATION = 'LOGOUT_MUTATION'

/**
 * Update value of input in the store
 * @type {string}
 */
export const UPDATE_INPUT_MUTATION = 'UPDATE_INPUT_MUTATION'

export default {
    [LOGIN_RESPONSE_MUTATION] (state, response) {

        let token = response.data.token

        if (typeof(token) !== 'string' || token.length === 0) {
            //todo
            // state.commit(LOGOUT_MUTATION)
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
    [LOGIN_ERROR_RESPONSE_MUTATION] (state, error) {

        //todo
        // state.commit(LOGOUT_MUTATION)
        state.inputsErrors = error.response.data
    },
    //todo move to abstract input file
    [UPDATE_INPUT_MUTATION] (state, input) {

        if (typeof(state.inputs) !== 'object') {
            state.inputs = {}
        }

        if (typeof(state.inputs[input.name]) !== 'object') {
            state.inputs[input.name] = {}
        }

        state.inputs[input.name].value = input.value
    },
}