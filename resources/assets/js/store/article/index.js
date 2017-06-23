import mutations from './mutations'
import actions from './actions'
import {inputStateVariables} from 'components/input'

export default {
    namespaced: true,
    state: {
        articles: [],
        loaded: false,
        perPage: null,
        currentPage: null,
        lastPage: null,
        path: null,
        ...inputStateVariables,
    },
    mutations: mutations,
    actions: actions,
}
