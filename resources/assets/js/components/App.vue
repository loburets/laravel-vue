<template>
    <div id="app">
        <router-link :to="{ name: 'articles'}">Go to articles</router-link>
        <router-link to="/">Go to home</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>