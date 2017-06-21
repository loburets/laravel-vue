<template>
    <ul class="pagination" v-if="lastPage > 1">
        <li v-if="currentPage - 1 > 0">
            <router-link :to="{ name: 'articlesPage', params: { page: currentPage - 1 }}" rel="next">«</router-link>
        </li>
        <li v-else class="disabled"><span>«</span></li>

        <li v-for="page in pages" v-bind:class="{ active: currentPage == page }">
            <router-link :to="{ name: 'articlesPage', params: { page: page }}">{{ page }}</router-link>
        </li>

        <li v-if="currentPage + 1 < lastPage">
            <router-link :to="{ name: 'articlesPage', params: { page: currentPage + 1 }}" rel="next">»</router-link>
        </li>
        <li v-else class="disabled"><span>»</span></li>
    </ul>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data: function () {
            return {
                pages: []
            }
        },
        //todo abstraction
        computed: mapState({
            perPage: state => state.Article.perPage,
            currentPage: state => state.Article.currentPage,
            lastPage: state => state.Article.lastPage,
        }),
        created() {
            let i, lastPage = this.$store.state.Article.lastPage
            for (i = 1; i < lastPage; i++) {
                this.pages.push(i)
            }
        },
    }
</script>
