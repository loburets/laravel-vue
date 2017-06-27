export const ADD_MESSAGE_MUTATION = 'ADD_MESSAGE_MUTATION'
export const REMOVE_ALL_MESSAGES_MUTATION = 'REMOVE_ALL_MESSAGES_MUTATION'
export const REMOVE_READ_MUTATION = 'REMOVE_READ_MUTATION'
export const MARK_AS_READ_MUTATION = 'MARK_AS_READ_MUTATION'
export const REMOVE_MUTATION = 'REMOVE_MUTATION'

export default {
    [ADD_MESSAGE_MUTATION] (state, message) {

        let lastMessage = state.messages[state.messages.length - 1];
        let id = lastMessage? lastMessage.id + 1 : 1

        state.messages.push({ text: message, id: id })
    },
    [REMOVE_ALL_MESSAGES_MUTATION] (state) {
        state.messages = []
    },
    [REMOVE_READ_MUTATION] (state) {
        state.messages.forEach(function(message, i, arr) {
            if (message.isReaded === true) {
                state.messages.splice(i, 1);
            }
        });
    },
    [MARK_AS_READ_MUTATION] (state) {
        state.messages.forEach(function(message, i, arr) {
            state.messages[i].isReaded = true;
        });
    },
    [REMOVE_MUTATION] (state, id) {
        state.messages.forEach(function(message, i, arr) {
            if (message.id == id) {
                state.messages.splice(i, 1)
            }
        });
    },
}