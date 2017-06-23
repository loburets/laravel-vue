<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ article.name }}</div>

        <div class="panel-body">
            {{ article.text }}
        </div>

        <button v-if="authorized" class="btn btn-primary" @click="deleteArticle(article.id)">Delete</button>
    </div>
</template>

<script>
    import { DELETE_ARTICLE_ACTION } from 'store/article/actions'
    import router from 'router'
    import { mapState } from 'vuex'

    export default {
        props: ['article'],
        computed: mapState({
            authorized: state => state.User.authorized,
        }),
        methods: {
            deleteArticle(id) {
                this.$store.dispatch('Article/' + DELETE_ARTICLE_ACTION, id)
            },
        },
    }
</script>
