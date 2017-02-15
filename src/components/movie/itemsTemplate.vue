<!--列表组件-->

<template id="itemsTemplate">

    <!--热门电影-->
    <section class="section-content">
        <!--头部-->
        <header>
            <!--接收一个标题-->
            <h2>{{this.Title}}</h2>
            <span class="fr cl">更多</span>
        </header>

        <div id="hot" class="section-movie clearfix" ref='moveItem' >
            <ul>
                <li v-for="(item,i) in data" :key='i'>
                    <router-link :to="'/movie/subject/'+item.id">
                        <!--图片**语法错误 background-image:url(item.img.medium)-->
                        <div class="img">
                            <img :src="item.images.medium" alt="">
                        </div>
                        <!--标题 -->
                        <div class="title">{{item.title}}</div>
                        <div class='item-rating'>
                            <!--星星-->
                            <Vstar :score="item.rating.average" v-show="item.rating.average==0?false:true"></Vstar>
                            <span class="grade">{{item.rating.average =='00'?'暂无评分':item.rating.average}}</span>

                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

    </section>


</template>
<script>
    // 星星
    import Vstar from '../common/star.vue'
    // 引入beeter scroll
    import BScroll from 'better-scroll'
    export default{
        name: 'itemsTemplate',
//    接收两个参数  1 接收标题 2 接收一个url  接收参数可改可变
        props: ['Title', 'url'],
        data() {
            return {
                data: []
            }
        },
        methods: {
            // 使用better-scroll实现左右滑动
            _initScroll() {
                this.moveScroll = new BScroll(this.$refs.moveItem, {
                    scrollX: true,
                    eventPassthrough: 'vertical',
                    click: true
                })
            }
        },
        created(){
            // 钩子函数 实例被创建 并且拥有属性和方法的时候调用
            // 由于大部分相同 所以数据写死
            let opt = {
                params: {
                    'count': 6,
                    'start': 0,
                    'apikey': '00fa6c0654689a0202ef4412fd39ce06'
                }
            }
            this.$http.jsonp(this.url, opt).then((res)=> {
                this.data = res.data.subjects
                this.$nextTick(() => {
                    this._initScroll()
                })
            })
        },
        components: {
            Vstar
        }
    }

</script>
<style lang="less" rel="stylesheet/less">
    /*#movie {*/
    /*.content {*/
    /*>*/
    .section-content {
        padding-top: 0.83rem;
        >
        header {
            position: relative;
            padding: 0 1.12rem;

            >
            h2 {
                font-weight: normal;
                display: inline-block;
                min-width: 4em;
                margin-bottom: 0;
                color: #111;
                padding-left: 0;
                padding-bottom: 0;
                font-size: 1.1rem;
            }

            >
            span {
                font-size: 0.9rem;
                text-align: right;
                line-height: 1.1rem;
                position: absolute;
                bottom: 0px;
                right: 1.12rem;
            }

        }
    }

    //        }
    .section-movie {
        >
        ul {
            padding-top: 15px;
            /*不进行换行/*white-space: nowrap; 出现bug better使用不了 换为固定值*/
            width: 675px;
            overflow: hidden;
            li:first-child {
                margin-left: 1.12rem
            }
            li:last-child {
                margin-right: 1.12rem

            }

        }
        li + li {
            margin-left: 0.48rem;
        }

        li {
            > * {
                font-size: .94rem;
            }
            float: left;
            vertical-align: top;
            width: 100px;
            text-align: center;
            .img {
                width: 100%;
                overflow: hidden;
                height: 8.93rem;
                > img {
                    height: 100%;
                    width: 100%;
                }
            }
            .item-rating {
                color: #aaa;
                line-height: .94rem;
                margin-top: .3rem;
                font-size: .72rem;
            }
            .title {
                margin-top: 0.6rem;
                font-size: 1rem;
                line-height: 1.1rem;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }

            >
            a {
                display: block
            }

            .grade {
                color: #aaa;
                line-height: .94rem;
                margin-top: .3rem;
                font-size: .72rem;
            }

        }

    }

    /*}*/
</style>
