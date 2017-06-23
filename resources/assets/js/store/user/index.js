import mutations from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        token: '',
        email: '',
        authorized: false,
        //todo different file
        inputs: {},
        inputsErrors: {},
    },
    mutations: mutations,
    actions: actions,
}
