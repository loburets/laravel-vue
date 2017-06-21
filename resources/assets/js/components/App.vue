<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'articles'}">Articles</router-link>
        <router-link :to="{ name: 'login'}">Login</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>