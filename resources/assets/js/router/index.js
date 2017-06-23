import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from 'components/Article-list'
import Login from 'components/auth/Login'
import Register from 'components/auth/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/articles', name: 'articles', component: ArticleList },
    { path: '/articles/:page', name: 'articlesPage', component: ArticleList },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
]

export default new VueRouter({
    routes,
    mode: 'history',
})
