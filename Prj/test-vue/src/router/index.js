import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


const list = r => require.ensure([], () => r(require('@/views/list.vue')))
const csslayout = r => require.ensure([], () => r(require('@/views/layout.vue')))
const singleimageload = r => require.ensure([], () => r(require('@/views/singleimageload.vue')))
const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/csslayout',
    component: csslayout
  }, 
  {
    path: '/singleimageload',
    component: singleimageload
  },
]

const router = new Router({
  routes
})

export default router
