<template>
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
</template>

<script>
    import { DELETE_ARTICLE_ACTION } from 'store/article/actions'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import router from 'router'
    import { mapState } from 'vuex'


    export default {

        props: ['article'],
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
    .btn {
        margin-right: 5px;
    }
    .row_btns {
        text-align: right;
        padding-right: 10px;
        padding-bottom: 10px;
    }
</style>
