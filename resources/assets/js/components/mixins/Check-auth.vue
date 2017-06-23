<script>
    import router from 'router'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'

    //todo check auth after LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION end
    //todo change router before message (now in some reason after)
    //todo add close button
    export default {
        created() {
            if (!this.$store.state.User.authorized) {
                router.push('/').then()
                this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'You are not authorized')
            }
        },
    }
</script>