<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ article.name }}</div>

        <div class="panel-body">
            {{ article.text }}
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Article mounted.')
        },
        props: ['article'],
    }
</script>
