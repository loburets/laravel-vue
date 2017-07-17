export const ADD_MESSAGE_MUTATION = 'ADD_MESSAGE_MUTATION'
export const REMOVE_ALL_MESSAGES_MUTATION = 'REMOVE_ALL_MESSAGES_MUTATION'
export const REMOVE_READ_MUTATION = 'REMOVE_READ_MUTATION'
export const MARK_ALL_AS_READ_MUTATION = 'MARK_ALL_AS_READ_MUTATION'
export const REMOVE_MUTATION = 'REMOVE_MUTATION'

export default {
    [ADD_MESSAGE_MUTATION] (state, message) {

        let lastMessage = state.messages[state.messages.length - 1]
        let id = lastMessage? lastMessage.id + 1 : 1

        state.messages.push({ text: message, id: id })
    },
    [REMOVE_ALL_MESSAGES_MUTATION] (state) {
        state.messages = []
    },
    [REMOVE_READ_MUTATION] (state) {
        let i = state.messages.length
        while (i--) {
            if (state.messages[i].isReaded === true) {
                state.messages.splice(i, 1)
            }
        }
    },
    [MARK_ALL_AS_READ_MUTATION] (state) {
        state.messages.forEach(function(message, i, arr) {
            state.messages[i].isReaded = true
        })
    },
    [REMOVE_MUTATION] (state, id) {
        let i = state.messages.length
        while (i--) {
            if (state.messages[i].id === id) {
                state.messages.splice(i, 1)
            }
        }
    },
}