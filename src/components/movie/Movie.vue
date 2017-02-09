<template>
    <!--//最大的盒子-->

    <div id="movie" ref='upDown'>
        <!--电影总内容-->
        <div class="content">
            <!--列表模板渲染组件-->
            <Vitems :Title='Title[0]' :url='url+"in_theaters"'></Vitems>
            <Vitems :Title='Title[1]' :url='url+"top250"'></Vitems>
            <Vitems :Title='Title[2]' :url='url+"coming_soon"'></Vitems>
            <!--分类浏览组件-->
            <Vtypes :title="title" :msg="msg"></Vtypes>

        </div>
        <!--底部组件-->
        <Vbottom></Vbottom>
    </div>
</template>
<script>
    // 引入分类浏览组件
    import Vtypes from '../common/types.vue'
    // 导入底部
    import Vbottom from '../common/bottom.vue'
    // 导入列表组件
    import Vitems from './itemsTemplate.vue'
    // 引入beeter scroll
//    import BScroll from 'better-scroll'
    export default {
        name: 'movie',
        data() {
            return {
                url: 'https://api.douban.com/v2/movie/',
                title: '分类浏览',
                Title: ['影院热映', 'TOP250', '即将上映'],
                msg: ['经典', '冷门佳片', '豆瓣高分', '动作', '喜剧', '爱情', '悬疑', '恐怖', '科幻', '治愈', '文艺', '成长', '动画', '华语', '欧美', '韩国', '日本']
            }
        },
        methods: {
            // 使用better-scroll实现左右滑动
//            _initScroll() {
//                this.moveScroll = new BScroll(this.$refs.upDown, {
//                    scrollY: true,
//                    click: true
//                })
//            }
        },
        created() {
        },
        updated(){
//            this._initScroll()
        },
        components: { // 子组件
            Vtypes,
            Vbottom,
            Vitems
        }


    }


</script>

