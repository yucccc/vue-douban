<!--列表组件-->

<template id="bookSwipe">

    <!--热门电影-->
    <section class="section-content clearfix">
        <header>
            <!--接收一个标题-->
            <h2>豆瓣纸书</h2>
            <span class="fr cl">更多</span>
        </header>
        <!--轮播图-->
        <div class="page-swipe">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item :class="{slide1:true}">
                    <a class="swipe-a" href="#">
                        <img class="cover" src="../../assets/img/1384.jpg"
                             alt="">
                        <div class="content">
                            <div>
                                <span>￥{{data.data.price}}</span>
                                <p>{{data.data.title}}</p>
                            </div>
                            <p>不可思议的友谊奇迹，人生路上柔软的智慧之光</p>
                        </div>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}"><a class="swipe-a" href="#">
                    <img class="cover" src="../../assets/img/1324.jpg"
                         alt="">
                    <div class="content">
                        <div>
                            <span>￥{{data.data2.price}}</span>
                            <p>{{data.data2.title}}</p>
                        </div>
                        <p>帕蒂·史密斯《只是孩子》姊妹篇，如何面对人生的不断失去...</p>
                    </div>
                </a></mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}"><a class="swipe-a" href="#">
                    <img class="cover" src="../../assets/img/898.jpg"
                         alt="">
                    <div class="content">
                        <div>
                            <span>￥{{data.data3.price}}</span>
                            <p>{{data.data3.title}}</p>
                        </div>
                        <p>摄影教父阮义忠的少年画家梦，海外艺术家的海上访问记</p>
                    </div>
                </a></mt-swipe-item>
            </mt-swipe>
        </div>

    </section>


</template>
<script>

    export default{
        name: 'bookSwipe',
        data() {
            return {
                data: {'data': [], 'data2': [], 'data3': []},
                url: 'https://api.douban.com/v2/book/'
            }
        },
        methods: {},
        created(){
            let opt = {
                params: {
                    'apikey': '00fa6c0654689a0202ef4412fd39ce06'
                }
            }
//  待优化   由于豆瓣图书数据不能一次获得 所以只能手动获得
            this.$http.jsonp(this.url + '26948733', opt).then((res)=> {
                this.data.data = res.data
            })
            this.$http.jsonp(this.url + '26939261', opt).then((res)=> {
                this.data.data2 = res.data
            })
            this.$http.jsonp(this.url + '26845771', opt).then((res)=> {
                this.data.data3 = res.data
            })


        },
        components: {}
    }

</script>
<style lang="less" rel="stylesheet/less">
    /*轮播图*/
    .page-swipe .mint-swipe {
        height: 170px;
        /*color: #fff;*/
        /*font-size: 30px;*/
        /*text-align: center;*/
        /*margin-bottom: 20px;*/
    }

    .page-swipe .mint-swipe-item {
        /*line-height: 200px;*/
    }

    .page-swipe .slide1 {
    }

    .page-swipe .slide2 {
    }

    .page-swipe .slide3 {
    }

    .page-swipe-desc {
        /*text-align: center;*/
        color: #666;
        margin-bottom: 5px;
    }

    .swipe-a {
        display: block;
        overflow: hidden;
        margin: 15px 1.12rem 0px;

        .cover {
            float: left;
            width: 100px;
            margin-right: 15px;
        }
        .content {
            overflow: hidden;
            > div {
                span {
                    float: right;
                    color: #E76648;
                    font-size: 16px;
                    line-height: 22px
                }
                p {
                    font-size: 19px;
                    color: #494949;
                    margin-right: 40px;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                }
            }
            > p {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                font-size: 13px;
                font-weight: 300;
                line-height: 1.5;
                color: #9B9B9B;
            }
        }
    }

</style>
