import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from 'components/article/Article-list'
import ArticleCreate from 'components/article/Article-create'
import ArticleEdit from 'components/article/Article-edit'
import Article from 'components/article/Article'
import Login from 'components/auth/Login'
import Register from 'components/auth/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/articles/create', name: 'createArticle', component: ArticleCreate },
    { path: '/articles/page/:page', name: 'articlesPage', component: ArticleList },
    { path: '/articles/edit/:id', name: 'articleEdit', component: ArticleEdit },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/articles', name: 'articles', component: ArticleList },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
]

export default new VueRouter({
    routes,
    mode: 'history',
})
