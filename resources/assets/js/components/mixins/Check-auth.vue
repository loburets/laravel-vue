<script>
    import router from 'router'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'

    export default {
        created() {
            if (!this.$store.state.User.authorized) {
                router.push('/')
                this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'You are not authorized')
            }
        },
    }
</script>