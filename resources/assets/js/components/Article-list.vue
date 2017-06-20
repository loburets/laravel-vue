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
    import { UPDATE_ARTICLES_MUTATION } from '../store/Article';

    Vue.component('preloader', Preloader)
    Vue.component('article-item', ArticleItem)

    /**
     * TODO pagination
     */
    export default {
        computed: mapState({
            //todo check articles.articles
            articles: state => state.Article.articles.articles,
            loaded: state => state.Article.loaded,
        }),
        created() {
            axios.get('/api/article').then((response) => {
                this.$store.commit(UPDATE_ARTICLES_MUTATION, {
                    articles: response.data.data
                })
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