import mutations from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        articles: [],
        loaded: false,
        perPage: null,
        currentPage: null,
        lastPage: null,
        path: null,
    },
    mutations: mutations,
    actions: actions,
}
