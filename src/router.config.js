// 电影组件
import Movie from './components/movie/Movie.vue'
// 图书组件
import Books from './components/book/Books.vue'
// 广播组件
import Status from './components/status/Status.vue'
// 小组组件
import Group from './components/group/Group.vue'
// 搜索组件
import Search from './components/common/search.vue'
// 详细信息组件
import movieId from './components/movie/movie.id.vue'

// 导出配置
export default {
    mode: 'history',//切换路径模式，变成history模式
    scrollBehavior: () => ({y: 0}),// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {path: '/', component: Movie},
        {path: '/movie/subject/:id', component: movieId},
        {path: '/books', component: Books},
        {path: '/status', component: Status},
        {path: '/group', component: Group},
        {path: '/search', component: Search},
        {path: '*', redirect: '/'}

    ]
}