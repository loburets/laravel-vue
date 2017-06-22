<template>
    <div class="form-group">
        <!--todo type-->
        <input
            class="form-control"
            :placeholder="placeholder"
            v-model="inputValue"
        >
        <div class="alert alert-danger" v-if="errors[name] && typeof errors[name] == 'object'" v-for="error in errors[name]">
            {{ error }}
        </div>
        <div class="alert alert-danger" v-if="errors[name] && typeof errors[name] == 'string'">
            <p>{{ errors[name] }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type', 'placeholder', 'name', 'store'],
        data() {
            return {
                inputValue: '',
            }
        },
        watch: {
            inputValue: function (inputValue) {
                this.$store.commit(this.store + '/UPDATE_INPUT_MUTATION', { 'name': this.name, 'value': inputValue })
            }
        },
        //without mapping for props using
        computed: {
            //todo
            errors: function () {
                let store = this.$store.state[this.store];

                if (typeof(store.inputsErrors) !== 'object') {
                    store.inputsErrors = {}
                }

                return store.inputsErrors
            },
        },
    }
</script>
