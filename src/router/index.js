import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import news from '@/components/news'
import product from '@/components/product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },

  ]
})
