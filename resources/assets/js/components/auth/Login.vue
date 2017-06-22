<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <!--todo move to component-->
        <div class="form-group">
            <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email"
                    v-model="credentials.email"
            >
            <div class="alert alert-danger" v-if="errors.email && typeof errors.email == 'object'" v-for="error in errors.email">
                {{ error }}
            </div>
            <div class="alert alert-danger" v-if="errors.email && typeof errors.email == 'string'">
                <p>{{ errors.email }}</p>
            </div>
        </div>
        <div class="form-group">
            <input
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="credentials.password"
            >
            <div class="alert alert-danger" v-if="errors.password && typeof errors.password == 'object'" v-for="error in errors.password">
                {{ error }}
            </div>
            <div class="alert alert-danger" v-if="errors.password && typeof errors.password == 'string'">
                <p>{{ errors.password }}</p>
            </div>
        </div>
        <button class="btn btn-primary" @click="submit()">Login</button>
    </div>
</template>

<script>
    import { LOGIN_ACTION } from '../../store/user/actions'

    export default {
        data() {
            return {
                credentials: {
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods: {
            submit() {
                let credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                }
                this.$store.dispatch('User/' + LOGIN_ACTION, credentials)
                    .then(() => {
                        this.errors = []
                    })
                    .catch((error) => this.errors = error.data)
            }
        }

    }
</script>