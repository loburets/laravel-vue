<template>
    <div class="form-group">
        <!--todo type-->
        <input
            class="form-control"
            :placeholder="placeholder"
            v-model="inputValue"
        >
        <div class="label label-danger" v-if="errors[name] && typeof errors[name] == 'object'" v-for="error in errors[name]">
            {{ error }}
        </div>
        <div class="label label-danger" v-if="errors[name] && typeof errors[name] == 'string'">
            {{ errors[name] }}
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
        created() {
            this.$store.commit(this.store + '/UPDATE_INPUT_MUTATION', { 'name': this.name, 'value': this.inputValue })
        },
        watch: {
            inputValue: function (newInputValue) {
                this.$store.commit(this.store + '/UPDATE_INPUT_MUTATION', { 'name': this.name, 'value': newInputValue })
            },
        },
        computed: {
            errors: function () {
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
