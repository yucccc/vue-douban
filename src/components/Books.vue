<!--图书组件-->

<template>
    <div id="books">
        <!--轮播图-->
        <div class="page-swipe">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
            </mt-swipe>
        </div>
        <!--分类浏览-->
        <types :title="title" :msg="msg"></types>
        <Vbottom></Vbottom>
    </div>
</template>
<script>
    //导入星星组件
    import star from './star.vue'
    //导入分类浏览组件
    import types from './types.vue'
    //导入底部组件
    import Vbottom from './bottom.vue'

    export default{
        name: 'books',
        data() {
            return {
                title: '分类浏览',
                msg: ['小说', '爱情', '历史', '外国文学', '青春', '励志', '随笔', '传记', '推理', '旅行', '奇幻', '经管']
            }
        },
        components: {
            types,
            star,
            Vbottom
        }

    }

</script>
<style lang="less">
    #books {
        background-color: #fff;
    }

    .page-swipe .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    .page-swipe .mint-swipe-item {
        line-height: 200px;
    }

    .page-swipe .slide1 {
        background-color: #0089dc;
        color: #fff;
    }

    .page-swipe .slide2 {
        background-color: #ffd705;
        color: #000;
    }

    .page-swipe .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }

    .page-swipe-desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
    }
</style>