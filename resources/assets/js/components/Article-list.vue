<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <preloader v-show="preloader"></preloader>
                <article-item
                    v-for="article in articles"
                    v-bind:article="article"
                    v-bind:key="article.id"
                >
                </article-item>
                <h4 v-if="!preloader && articles.length == 0" class="inscription">There isn't articles</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Preloader from './Preloader'
    import ArticleItem from './Article-item'

    Vue.component('preloader', Preloader)
    Vue.component('article-item', ArticleItem)

    /**
     * TODO
     * pagination
     */
    export default {
        data() {
            return {
                articles:{},
                preloader: true,
            };
        },
        created() {
            axios.get('/api/article').then((response) => {
                this.articles = response.data.data;
                this.preloader = false;
            })
            .catch((error) => console.log(error.response.data));
        },
    }
</script>

<style scoped>
    .inscription {
        min-height: 500px;
        position: relative;
    }
    h4 {
        text-align: center;
    }
</style>