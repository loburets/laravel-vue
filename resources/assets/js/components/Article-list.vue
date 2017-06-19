<template>
    <div>
        <div v-for="article in articles">
            {{article.name}}
        </div>
    </div>
</template>

<script>
//    Vue.component('article', require('./Article.vue'));

    export default {
        mounted() {
            console.log('Article list mounted.')
        },
        props: ['articles'],
    }
</script>
