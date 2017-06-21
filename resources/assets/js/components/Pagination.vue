<template>
    <ul class="pagination" v-if="lastPage > 1">
        <li v-if="currentPage - 1 > 0">
            <router-link :to="{ name: entity + 'sPage', params: { page: currentPage - 1 }}" rel="next">«</router-link>
        </li>
        <li v-else class="disabled"><span>«</span></li>

        <li v-for="page in pages" v-bind:class="{ active: currentPage == page }">
            <router-link :to="{ name: entity + 'sPage', params: { page: page }}">{{ page }}</router-link>
        </li>

        <li v-if="currentPage + 1 < lastPage">
            <router-link :to="{ name: entity + 'sPage', params: { page: currentPage + 1 }}" rel="next">»</router-link>
        </li>
        <li v-else class="disabled"><span>»</span></li>
    </ul>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ['entity'],
        data: function () {
            return {
                pages: []
            }
        },
        //without mapping for props using
        computed: {
            currentPage: function () {
                return this.$store.state[this.storeName].currentPage
            },
            lastPage: function () {
                return this.$store.state[this.storeName].lastPage
            },
            storeName: function () {
                return this.entity.charAt(0).toUpperCase() + this.entity.slice(1);
            },
        },
        created() {
            let i, lastPage = this.$store.state[this.storeName].lastPage
            for (i = 1; i < lastPage; i++) {
                this.pages.push(i)
            }
        },
    }
</script>
