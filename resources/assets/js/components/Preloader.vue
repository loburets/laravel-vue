<template>
    <div class="preloader-container">
        <div class="preloader-background"></div>
        <div class="preloader"></div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .preloader-container {
        position: absolute;
        width: 100%;
        height: 110%;
        min-height: 180px;
        left: 0;
        top: -5%;
        z-index: 10;
    }

    .preloader {
        border: 16px solid #fff;
        border-top: 16px solid #4091c7;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 2s linear infinite;

        position: absolute;
        left: 50%;
        margin-left: -40px;
        top: 50%;
        margin-top: -40px;
    }

    .preloader-background {
        width: 100%;
        height: 100%;
        background: #cdcdcd;
        opacity: 0.7;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>