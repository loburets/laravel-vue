<script>
    import router from 'router'

    export default {
        created() {
            if (!this.$store.state.User.authorized) {
                router.push('/')
            }
        },
    }
</script>