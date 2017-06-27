<template>
    <div id="app">
        <navigation></navigation>
        <message></message>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Navigation from './Navigation'
    Vue.component('navigation', Navigation)
    import Message from './Message.vue'
    Vue.component('message', Message)

    import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        created() {
            this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
                .catch((error) => {})
        },
    }
</script>