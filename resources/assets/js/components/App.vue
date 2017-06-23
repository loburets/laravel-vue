<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Navigation from './Navigation'
    Vue.component('navigation', Navigation)

    import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        created() {
            this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
        },
    }
</script>