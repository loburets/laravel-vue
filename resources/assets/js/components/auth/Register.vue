<template>
    <div class="col-sm-4 col-sm-offset-4">
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
    import router from 'router'
    import Vue from 'vue'

    import simpleInput from 'components/input/Simpe-input.vue'
    Vue.component('simple-input', simpleInput)

    export default {

        methods: {
            submit() {
                this.$store.dispatch('User/' + REGISTER_ACTION)
                    .then(() => {
                        router.push({ path: '/' })
                    })
            },
        },
    }
</script>