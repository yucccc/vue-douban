<!--图书组件-->
<template>
    <div id="books">
        <!--轮播图-->
        <Vswipe></Vswipe>
        <!--分类浏览-->
        <types :title="title" :msg="msg"></types>
        <Vbottom></Vbottom>
    </div>
</template>
<script>
    //导入星星组件
    //    import star from './star.vue'
    //导入分类浏览组件
    import types from '../common/types.vue'
    //导入底部组件
    import Vbottom from '../common/bottom.vue'
    //    导入列表模板
    //    import Vitems from './movie/itemsTemplate.vue'
    //导入轮播图
    import Vswipe from './bookSwipe.vue'

    export default{
        name: 'books',
        data() {
            return {
                Title: ['最受关注图书 | 虚构类', '最受关注图书 | 非虚构类', '豆瓣纸书'],
                title: '分类浏览',
                msg: ['小说', '爱情', '历史', '外国文学', '青春', '励志', '随笔', '传记', '推理', '旅行', '奇幻', '经管']
            }
        },
        components: {
            types,
//            star,
            Vbottom,
//            Vitems
            Vswipe
        }

    }

</script>
<style lang="less">
    #books {
        background-color: #fff;
    }


</style>