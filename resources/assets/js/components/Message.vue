<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2" v-for="message in messages">
                <div class="alert alert-info">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="remove(message.id)"><span aria-hidden="true">&times;</span></button>
                    {{ message.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { REMOVE_READ_MUTATION, MARK_ALL_AS_READ_MUTATION, REMOVE_MUTATION } from 'store/message/mutations'

    export default {
        computed: mapState({
            messages: state => state.Message.messages,
            route: state => state.route,
        }),
        watch: {
            route: function (newRoute) {
                this.$store.commit('Message/' + REMOVE_READ_MUTATION)
            },
            messages: function (newMessage) {
                this.$store.commit('Message/' + MARK_ALL_AS_READ_MUTATION)
            },
        },
        methods: {
            remove(id) {
                this.$store.commit('Message/' + REMOVE_MUTATION, id)
            },
        }
    }
</script>