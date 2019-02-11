// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//PC端组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//移动端组件库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 

//全局注册返回组件
import back from '@/components/back'

//import HelloWorld from '@/components/HelloWorld'

//网络请求
import * as http from '@/service/api'

Vue.use(ElementUI)
Vue.use(Mint);

//全局注册返回组件
Vue.component('commonback', {
  render: back.render,
  data: back.data,
  methods:back.methods
})

Vue.prototype.$http = http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


/* new Vue({
  el: '#app',
  router,
  render: h => h(HelloWorld)
}) */
