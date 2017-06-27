<template>
    <div class="col-sm-4 col-sm-offset-4" @keyup.enter="submit()">
        <preloader v-show="!loaded"></preloader>
        <h2>Log In</h2>
        <simple-input type="text" placeholder="Enter your email" name="email" store="User"></simple-input>
        <simple-input type="password" placeholder="Enter your password" name="password" store="User"></simple-input>
        <button class="btn btn-primary" @click="submit()">Login</button>
    </div>
</template>

<script>
    import { LOGIN_ACTION } from 'store/user/actions'
    import { RESET_INPUTS_MUTATION } from 'components/input'
    import router from 'router'
    import Vue from 'vue'

    import simpleInput from 'components/input/Simpe-input.vue'
    Vue.component('simple-input', simpleInput)

    export default {

        data: function () {
            return {
                loaded: true
            }
        },
        methods: {
            submit() {
                this.loaded = false

                this.$store.dispatch('User/' + LOGIN_ACTION)
                    .then(() => {
                        this.loaded = true
                        router.push({ path: '/' })
                    }).catch((error) => {
                        this.loaded = true
                    })
            },
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('User/' + RESET_INPUTS_MUTATION)
            next()
        },
    }
</script>