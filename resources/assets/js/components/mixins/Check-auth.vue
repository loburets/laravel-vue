<script>
    import router from 'router'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import { mapState } from 'vuex'

    export default {
        //if already trying to login
        created() {
            if (this.failedLogin) {
                router.push({ path: '/' })
                this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'You are not authorized')
            }
        },
        computed: mapState({
            failedLogin: state => state.User.failedLogin,
        }),
        watch: {
            //wait initial login after page loading
            failedLogin: function (failedLogin) {
                if (failedLogin) {
                    router.push({ path: '/' })
                    this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'You are not authorized')
                }
            },
        },
    }
</script>