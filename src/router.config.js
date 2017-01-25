// 导入组件
// 电影组件
import Movie from './components/Movie.vue'
// 图书组件
import Books from './components/Books.vue'
// 广播组件
import Status from './components/Status.vue'
// 小组组件
import Group from './components/Group.vue'
// 搜索组件
import Search from './components/search.vue'
// 详细信息组件
import movieId from './components/movie/movie.id.vue'

// 导出配置

export default {
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/movie', component: Movie },
        { path: '/movie/:id', component: movieId },
        { path: '/books', component: Books },
        { path: '/status', component: Status },
        { path: '/group', component: Group },
        { path: '/search', component: Search },
        { path: '*', redirect: '/movie' }
    ]
}