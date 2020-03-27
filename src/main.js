import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Library from './components/Library.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import CreateBook from './components/Create-Book.vue'
import CreateUser from './components/Create-User.vue'
import BookDetails from './components/BookDetails.vue'
import LoanDetails from './components/LoanDetails.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/library', component: Library},
  {path: '/users', component: Users},
  {path: '/create-book', component: CreateBook},
  {path: '/create-user', component: CreateUser},
  {path: '/library/:bookName', component: BookDetails, params:'true'},
  {path: '/library/:bookName/:userName', component: LoanDetails, params:'true'},
];

const router = new VueRouter ( {
  routes
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
