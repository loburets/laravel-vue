<template>
    <div id="app">
        <navigation></navigation>
        <message></message>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import navigation from './Navigation'
    import message from './Message.vue'
    import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        components: { navigation, message },
        created() {
            this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
                .catch((error) => {})
        },
    }
</script>