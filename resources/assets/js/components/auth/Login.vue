<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <div class="form-group">
            <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your username"
                    v-model="credentials.username"
            >
        </div>
        <div class="form-group">
            <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="credentials.password"
            >
        </div>
        <button class="btn btn-primary" @click="submit()">Access</button>
    </div>
</template>

<script>
    import { LOGIN_ACTION } from '../../store/user/actions'

    export default {
        data() {
            return {
                credentials: {
                    username: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            submit() {
                let credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password
                }
                //todo .then Redirect to a specified route
                this.$store.dispatch('user/' + LOGIN_ACTION, credentials)
            }
        }

    }
</script>