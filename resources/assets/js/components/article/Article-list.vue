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
                <pagination v-if="loaded && articles.length != 0" entity="article"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import preloader from 'components/preloader'
    import articleItem from './Article-item'
    import pagination from 'components/pagination'
    import { mapState } from 'vuex'
    import { LOAD_ARTICLE_LIST_ACTION } from 'store/article/actions'

    export default {
        components: { preloader, articleItem, pagination },
        computed: mapState({
            articles: state => state.Article.articles,
            loaded: state => state.Article.loaded,
        }),
        created() {
            this.$store.dispatch('Article/' + LOAD_ARTICLE_LIST_ACTION, this.$route.params.page)
        },
        beforeRouteLeave (to, from, next) {
            this.$store.dispatch('Article/' + LOAD_ARTICLE_LIST_ACTION, to.params.page)
            next()
        },
        beforeRouteUpdate (to, from, next) {
            this.$store.dispatch('Article/' + LOAD_ARTICLE_LIST_ACTION, to.params.page)
            next()
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