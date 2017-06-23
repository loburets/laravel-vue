export const ADD_MESSAGE_MUTATION = 'ADD_MESSAGE_MUTATION'
export const REMOVE_ALL_MESSAGES_MUTATION = 'REMOVE_ALL_MESSAGES_MUTATION'

export default {
    [ADD_MESSAGE_MUTATION] (state, message) {
        state.messages.push(message)
    },
    [REMOVE_ALL_MESSAGES_MUTATION] (state) {
        state.messages = []
    },
}