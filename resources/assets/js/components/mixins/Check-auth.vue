<script>
    import router from 'router'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import { mapState } from 'vuex'

    export default {
        computed: mapState({
            failedLogin: state => state.User.failedLogin,
        }),
        watch: {
            failedLogin: function (failedLogin) {
                if (failedLogin) {
                    router.push({ path: '/' })
                    this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'You are not authorized')
                }
            },
        },
    }
</script>