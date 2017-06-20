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
        props: ['article'],
    }
</script>
