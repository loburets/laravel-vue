<template>
    <div class="col-sm-4 col-sm-offset-4">
        <preloader v-show="!loaded"></preloader>
        <h2>New article</h2>
        <simple-input type="text" placeholder="Enter name of your article" name="name" store="Article"></simple-input>
        <simple-input type="textarea" placeholder="Enter your text" name="text" store="Article"></simple-input>
        <button class="btn btn-primary" @click="submit()">Create</button>
    </div>
</template>

<script>
    import { CREATE_ARTICLE_ACTION } from 'store/article/actions'
    import { ADD_MESSAGE_MUTATION } from 'store/message/mutations'
    import router from 'router'
    import Vue from 'vue'
    import CheckAuth from 'components/mixins/Check-auth'

    import simpleInput from 'components/input/Simpe-input.vue'
    Vue.component('simple-input', simpleInput)

    export default {

        methods: {
            submit() {
                this.loaded = false

                this.$store.dispatch('Article/' + CREATE_ARTICLE_ACTION)
                    .then(() => {
                        router.push('articles')
                        this.$store.commit('Message/' + ADD_MESSAGE_MUTATION, 'The article has been created')
                        this.loaded = true
                    }).catch((error) => {
                        this.loaded = true
                    })
            },
        },
        mixins: [CheckAuth],
        data: function () {
            return {
                loaded: true
            }
        },
    }
</script>