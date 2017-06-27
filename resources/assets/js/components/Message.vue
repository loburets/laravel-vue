<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2" v-for="message in messages">
                <div class="alert alert-info">
                    {{ message.text }}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { REMOVE_READED, MARK_AS_READED } from 'store/message/mutations'

    export default {
        computed: mapState({
            messages: state => state.Message.messages,
            route: state => state.route,
        }),
        watch: {
            route: function (newRoute) {
                this.$store.commit('Message/' + REMOVE_READED)
            },
            messages: function (newMessage) {
                this.$store.commit('Message/' + MARK_AS_READED)
            },
        },
    }
</script>