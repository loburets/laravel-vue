<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <!--todo move to component-->
        <simple-input type="text" placeholder="Enter your email" name="email" store="User"></simple-input>
        <simple-input type="password" placeholder="Enter your password" name="password" store="User"></simple-input>
        <button class="btn btn-primary" @click="submit()">Login</button>
    </div>
</template>

<script>
    import { LOGIN_ACTION } from '../../store/user/actions'
    import router from '../../router'
    import Vue from 'vue'

    import simpleInput from '../Simpe-input.vue'
    Vue.component('simple-input', simpleInput)

    export default {

        methods: {
            submit() {
                this.$store.dispatch('User/' + LOGIN_ACTION)
                    .then(() => {
                        router.push({ path: '/' })
                    })
            },
        },
    }
</script>