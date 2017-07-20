<template>
    <div class="col-sm-4 col-sm-offset-4">
        <preloader v-show="!loaded"></preloader>
        <h2>Edit article</h2>
        <simple-input type="text" placeholder="Enter name of your article" name="name" store="Article" :initialValue="article.name"></simple-input>
        <simple-input type="textarea" placeholder="Enter your text" name="text" store="Article" :initialValue="article.text"></simple-input>
        <button class="btn btn-primary" @click="submit()">Save</button>
    </div>
</template>

<script>
    import { UPDATE_ARTICLE_ACTION, LOAD_ARTICLE_ACTION } from 'store/article/actions'
    import { RESET_ARTICLE_MUTATION } from 'store/article/mutations'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import { RESET_INPUTS_MUTATION, UPDATE_INPUT_MUTATION } from 'components/input'
    import router from 'router'
    import Vue from 'vue'
    import checkAuth from 'components/mixins/Check-auth'
    import { mapState } from 'vuex'
    import simpleInput from 'components/input/Simpe-input.vue'
    import preloader from 'components/preloader'

    export default {
        components: { simpleInput, preloader },
        created() {
            // user can be still not authorized when initially loaded at this page, because the authorization is async
            // will loaded later on variable changing
            if (!this.authorized) {
                return
            }
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
        methods: {
            submit() {
                this.loaded = false

                this.$store.dispatch('Article/' + UPDATE_ARTICLE_ACTION,  this.$route.params.id)
                    .then(() => {
                        router.push({name: 'articles'})
                        this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article has been updated')
                        this.loaded = true
                    }).catch((error) => {
                        this.loaded = true
                    })
            },
        },
        mixins: [checkAuth],
        data() {
            return {
                //for preloader
                loaded: false
            }
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('Article/' + RESET_ARTICLE_MUTATION)
            this.$store.commit('Article/' + RESET_INPUTS_MUTATION)
            next()
        },
        watch: {
            authorized: function (authorized) {
                if (!authorized) {
                    return
                }
                this.$store.dispatch('Article/' + LOAD_ARTICLE_ACTION, this.$route.params.id)
                    .then(() => {
                        this.loaded = true
                    }).catch((error) => {
                        this.loaded = true
                        router.push({name: 'articles'})
                        this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article can\'t be opened')
                    })
            },
        },
    }
</script>