<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <preloader v-show="!loaded"></preloader>
                <article-item
                    v-for="article in articles"
                    v-bind:article="article"
                    v-bind:key="article.id"
                >
                </article-item>
                <h4 v-if="loaded && articles.length == 0" class="inscription">There isn't articles</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Preloader from './Preloader'
    import ArticleItem from './Article-item'
    import { mapState } from 'vuex'
    import { LOAD_ARTICLES_ACTION } from '../store/Article'

    Vue.component('preloader', Preloader)
    Vue.component('article-item', ArticleItem)

    export default {
        computed: mapState({
            articles: state => state.Article.articles,
            loaded: state => state.Article.loaded,
        }),
        created() {
            this.$store.dispatch('Article/' + LOAD_ARTICLES_ACTION).then(() => {
                //...
            })
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