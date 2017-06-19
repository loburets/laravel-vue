<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">{{ article.name }}</div>

                <div class="panel-body">
                    {{ article.text }}
                </div>
            </div>
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
