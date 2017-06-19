<template>
    <div class="container">
        <article-item
            v-for="article in articles"
            v-bind:article="article"
            v-bind:key="article.id"
        >
        </article-item>
    </div>
</template>

<script>
    Vue.component('article-item', require('./Article-item.vue'));

    export default {
        mounted() {
            console.log('Article list mounted.')
        },
        props: ['articles'],
    }
</script>
