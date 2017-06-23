import mutations from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        messages: []
    },
    mutations: mutations,
    actions: actions,
}
