<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2" v-for="message in messages">
                <div class="alert alert-info">
                    {{ message }}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { REMOVE_ALL_MESSAGES_MUTATION } from 'store/message/mutations'

    export default {
        computed: mapState({
            messages: state => state.Message.messages,
        }),
        beforeRouteLeave (to, from, next) {
            this.$store.commit('Message/' + REMOVE_ALL_MESSAGES_MUTATION)
            next()
        },
        beforeRouteUpdate (to, from, next) {
            this.$store.commit('Message/' + REMOVE_ALL_MESSAGES_MUTATION)
            next()
        },
    }
</script>