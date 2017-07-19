<template>
    <div class="panel panel-default">
        <preloader v-show="!loaded"></preloader>
        <div class="panel-heading">{{ article.name }}</div>

        <div class="panel-body">
            {{ article.text }}
        </div>

        <div class="container-fluid row_btns">
            <button class="btn btn-primary" @click="deleteArticle(article.id)" v-if="authorized">Delete</button>
            <router-link :to="{ name: 'articleEdit', params: { id: article.id }}" class="btn btn-primary" v-if="authorized">Edit</router-link>
            <router-link :to="{ name: 'article', params: { id: article.id }}" class="btn btn-primary">Show</router-link>
        </div>

    </div>
</template>

<script>
    import { DELETE_ARTICLE_ACTION } from 'store/article/actions'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import router from 'router'
    import { mapState } from 'vuex'
    import preloader from 'components/preloader'

    export default {
        components: { preloader },
        props: {
            article: {
                type: Object,
                required: true,
            },
        },
        data: function () {
            return {
                loaded: true
            }
        },
        computed: mapState({
            authorized: state => state.User.authorized,
        }),
        methods: {
            deleteArticle(id) {
                this.loaded = false

                this.$store.dispatch('Article/' + DELETE_ARTICLE_ACTION, id).then((response) => {
                    this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article has been deleted')
                    this.loaded = true
                }).catch((error) => {
                    this.loaded = true
                })
            },
        },
    }
</script>

<style scoped>
    .panel {
        position: relative;
    }
</style>