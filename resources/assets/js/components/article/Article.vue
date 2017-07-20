<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <preloader v-show="!loaded"></preloader>
                    <div class="panel-heading">{{ article.name }}</div>

                    <div class="panel-body">
                        {{ article.text }}
                    </div>

                    <div class="container-fluid row_btns" v-if="authorized" >
                        <button class="btn btn-primary" @click="deleteArticle(article.id)">Delete</button>
                        <router-link :to="{ name: 'articleEdit', params: { id: article.id }}" class="btn btn-primary">Edit</router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import preloader from 'components/preloader'
    import { mapState } from 'vuex'
    import router from 'router'
    import { LOAD_ARTICLE_ACTION, DELETE_ARTICLE_ACTION } from 'store/article/actions'
    import { RESET_ARTICLE_MUTATION } from 'store/article/mutations'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'

    export default {
        components: { preloader },
        created() {
            this.$store.dispatch('Article/' + LOAD_ARTICLE_ACTION, this.$route.params.id)
                .then(() => {
                    this.loaded = true
                }).catch(() => {
                    this.loaded = true
                    router.push({name: 'articles'})
                    this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article can\'t be opened')
            })
        },
        computed: mapState({
            article: state => state.Article.article,
            authorized: state => state.User.authorized,
        }),
        data() {
            return {
                //for preloader
                loaded: false
            }
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('Article/' + RESET_ARTICLE_MUTATION)
            next()
        },
        methods: {
            deleteArticle(id) {
                this.loaded = false

                this.$store.dispatch('Article/' + DELETE_ARTICLE_ACTION, id).then((response) => {
                    router.push({name: 'articles'})
                    this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article has been deleted')
                    this.loaded = true
                }).catch((error) => {
                    this.loaded = true
                })
            },
        },
    }
</script>

<style>
    .row_btns {
        text-align: right;
        padding-right: 10px;
        padding-bottom: 10px;
    }
    .row_btns .btn {
        margin-right: 5px;
    }
</style>