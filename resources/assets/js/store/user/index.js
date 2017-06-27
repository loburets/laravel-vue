import mutations from './mutations'
import actions from './actions'
import {inputStateVariables} from 'components/input'

export default {
    namespaced: true,
    state: {
        token: '',
        email: '',
        authorized: false,
        failedLogin: false,
        ...inputStateVariables,
    },
    mutations: mutations,
    actions: actions,
}
