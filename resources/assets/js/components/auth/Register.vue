<template>
    <div class="col-sm-4 col-sm-offset-4" @keyup.enter="submit()">
        <preloader v-show="!loaded"></preloader>
        <h2>Register</h2>
        <simple-input type="text" placeholder="Enter your name" name="name" store="User"></simple-input>
        <simple-input type="text" placeholder="Enter your email" name="email" store="User"></simple-input>
        <simple-input type="password" placeholder="Enter your password" name="password" store="User"></simple-input>
        <simple-input type="password" placeholder="Confirm your password" name="password_confirmation" store="User"></simple-input>
        <button class="btn btn-primary" @click="submit()">Register</button>
    </div>
</template>

<script>
    import { REGISTER_ACTION } from 'store/user/actions'
    import { RESET_INPUTS_MUTATION } from 'components/input'
    import router from 'router'
    import Vue from 'vue'
    import preloader from 'components/preloader'
    import simpleInput from 'components/input/Simpe-input.vue'

    export default {
        components: { simpleInput, preloader },
        data() {
            return {
                loaded: true
            }
        },
        methods: {
            submit() {
                this.loaded = false
                this.$store.dispatch('User/' + REGISTER_ACTION)
                    .then(() => {
                        router.push({ path: '/' })
                        this.loaded = true
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