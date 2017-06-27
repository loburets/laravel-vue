export const ADD_MESSAGE_MUTATION = 'ADD_MESSAGE_MUTATION'
export const REMOVE_ALL_MESSAGES_MUTATION = 'REMOVE_ALL_MESSAGES_MUTATION'
export const REMOVE_READED = 'REMOVE_READED'
export const MARK_AS_READED = 'MARK_AS_READED'

export default {
    [ADD_MESSAGE_MUTATION] (state, message) {
        state.messages.push({ text: message })
    },
    [REMOVE_ALL_MESSAGES_MUTATION] (state) {
        state.messages = []
    },
    [REMOVE_READED] (state) {
        state.messages.forEach(function(message, i, arr) {
            if (message.isReaded === true) {
                state.messages.splice(i, 1);
            }
        });
    },
    [MARK_AS_READED] (state) {
        console.log(state.messages)
        state.messages.forEach(function(message, i, arr) {
            state.messages[i].isReaded = true;
        });
    },
}