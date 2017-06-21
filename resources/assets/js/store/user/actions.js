/**
 * Send credentials to backend
 * @type {string}
 */
export const LOGIN_ACTION = 'LOGIN_ACTION'

export default {
    [LOGIN_ACTION] (context, credentials) {

        return new Promise((resolve, reject) => {
            axios.post('/api/login', { params: credentials }).then((response) => {
                console.log(response)
                //todo save token
                // context.commit(LOGIN_RESPONSE_MUTATION, response)
                resolve()
            }).catch((error) => { console.log(error.response.data); reject(); })
        })
    },
}