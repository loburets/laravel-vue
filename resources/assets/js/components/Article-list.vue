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

    /**
     * TODO
     * preloader
     * pagination
     */
    export default {
        mounted() {
            console.log('Article list mounted.')
        },
        data() {
            return {articles:[]};
        },
        created() {
            axios.get('/api/article').then((response) => {
                this.articles = response.data.data;
            })
            .catch((error) => console.log(error.response.data));
        },
    }
</script>
