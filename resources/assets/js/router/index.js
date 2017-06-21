import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/Article-list'

Vue.use(VueRouter);

const routes = [
    { path: '/articles', name: 'articles', component: ArticleList},
    { path: '/articles/:page', name: 'articlesPage', component: ArticleList },
];

export default new VueRouter({
    routes,
    mode: 'history',
})
