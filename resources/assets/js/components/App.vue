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

    export default {}
</script>