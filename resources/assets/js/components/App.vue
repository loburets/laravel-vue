<template>
    <div id="app">
        <router-link :to="{ name: 'articles'}">Go to articles</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>