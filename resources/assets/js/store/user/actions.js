/**
 * Send credentials to backend
 * @type {string}
 */
export const LOGIN_ACTION = 'LOGIN_ACTION'

export default {
    [LOGIN_ACTION] (context, credentials) {

        return new Promise((resolve, reject) => {
            axios.post('/api/jwt-login', credentials).then((response) => {
                //todo save token
                // context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => reject(error.response))
        })
    },
}