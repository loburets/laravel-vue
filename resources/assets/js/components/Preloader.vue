<template>
    <div>
        <div class="l-preloader"></div>
        <div class="preloader"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Preloader mounted.')
        },
    }
</script>

<style scoped>
    .preloader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;

        position: absolute;
        left: 50%;
        margin-left: -52px;
        top: 50%;
        margin-top: -52px;
    }

    .l-preloader {
        width: 100%;
        height: 100%;
        background: darkgray;
        opacity: 0.2;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>