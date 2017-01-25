import Vue from 'vue'
import App from './App.vue'
// 路由
import VueRouter from 'vue-router'
// 导入路由配置
import routerConfig from './router.config.js'
//ajax
import VueResource from 'vue-resource'
//动画库
import './assets/css/animate.min.css';

// mintui 库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 关联路由
Vue.use(VueRouter);
// 关联 全局 给每个组件添加方法
Vue.use(VueResource);
// 创建路由
const router = new VueRouter(routerConfig)


new Vue({
    router,
    el: '#app',
    render: h => h(App)
})