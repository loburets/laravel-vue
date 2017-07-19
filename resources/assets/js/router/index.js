import Vue from 'vue'
import VueRouter from 'vue-router'
import articleList from 'components/article/Article-list'
import articleCreate from 'components/article/Article-create'
import articleEdit from 'components/article/Article-edit'
import article from 'components/article/Article'
import login from 'components/auth/Login'
import register from 'components/auth/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/articles/create', name: 'createArticle', component: articleCreate },
    { path: '/articles/page/:page', name: 'articlesPage', component: articleList },
    { path: '/articles/edit/:id', name: 'articleEdit', component: articleEdit },
    { path: '/article/:id', name: 'article', component: article },
    { path: '/articles', name: 'articles', component: articleList },
    { path: '/login', name: 'login', component: login },
    { path: '/register', name: 'register', component: register },
]

export default new VueRouter({
    routes,
    mode: 'history',
})
