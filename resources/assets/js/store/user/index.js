import mutations from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        token: '',
        email: '',
        authorized: false,
    },
    mutations: mutations,
    actions: actions,
}
