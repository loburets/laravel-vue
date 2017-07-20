<template>
    <div class="form-group">
        <!--you can't await the duplication properly :(-->
        <input
            v-if="type == 'text'" type="text"
            class="form-control"
            :placeholder="placeholder"
            v-model="inputValue"
        >
        <input
            v-if="type == 'password'" type="password"
            class="form-control"
            :placeholder="placeholder"
            v-model="inputValue"
        >
        <textarea
            v-if="type == 'textarea'"
            class="form-control"
            :placeholder="placeholder"
            v-model="inputValue"
        ></textarea>
        <div class="label label-danger" v-if="errors[name] && typeof errors[name] == 'object'" v-for="error in errors[name]">
            {{ error }}
        </div>
        <div class="label label-danger" v-if="errors[name] && typeof errors[name] == 'string'">
            {{ errors[name] }}
        </div>
    </div>
</template>

<script>
    import { UPDATE_INPUT_MUTATION } from 'components/input'

    export default {
        props: ['type', 'placeholder', 'name', 'store', 'initialValue'],
        props: {
            type: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            store: {
                type: String,
                required: true,
            },
            initialValue: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                inputValue: '',
            }
        },
        watch: {
            inputValue: function (newInputValue) {
                this.$store.commit(this.store + '/' + UPDATE_INPUT_MUTATION, { 'name': this.name, 'value': newInputValue })
            },
            initialValue: function (initialValue) {
                this.inputValue = this.initialValue
            },
        },
        computed: {
            errors() {
                return this.$store.state[this.store].inputsErrors
            },
        },
    }
</script>

<style scoped>
    .label {
        display: inline-block;
        font-size: 90%;
        margin: 8px 5px 0 0;
    }
</style>
