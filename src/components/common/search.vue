<!--搜索组件-->
<template>
    <div class="search-res">
        <header class="search-hd">
            <form action="/search" method="GET">
                <input class="s-input" name="query"   autofocus :placeholder="$route.query.query">
                <a href="javascript:void(0)">搜索</a>
            </form>
        </header>

        <div class="search-ct">
            <ul>

                <!--每一项内容-->
                <!-- 影视-->
                <li v-if='dataShow' class='search-module'>
                    <span>影视</span>
                    <ul>
                        <li v-for='(item,i) in subjects'><a href="">
                            <img :src="item.images.small" alt="">
                            <div class="subject-info"><span>{{item.title}}</span>
                                <p>
                                    <Vstar :score="item.rating.average"
                                           v-show="item.rating.average=='0'?false:true"></Vstar>
                                    <span class="grade">{{item.rating.average=='0'?'目前无人评价':item.rating.average}}</span>
                                </p>
                            </div>
                        </a></li>
                    </ul>
                    <a class="cl" href="#" v-cloak v-show="data.total">更多影视结果( {{data.total}} )</a>
                </li>
                <!--音乐-->
                <li v-if='musicShow' class='search-module'>
                    <span>音乐</span>
                    <ul>
                        <li v-for='(item,i) in musics'><a href="#">
                            <img :src="item.image" alt="">
                            <div class="subject-info"><span>{{item.title}}</span>
                                <p>
                                    <Vstar :score="item.rating.average"
                                           v-show="item.rating.average=='0'?false:true"></Vstar>
                                    <span class="grade">{{item.rating.average=='0'?'目前无人评价':item.rating.average}}</span>
                                </p>
                            </div>
                        </a></li>
                    </ul>
                    <a class="cl" href="#" v-cloak v-show="musicData.total">更多音乐结果( {{musicData.total}} )</a>
                </li>
                <!--图书-->
                <li v-if='bookShow' class='search-module'>
                    <span>读书</span>
                    <ul>
                        <li v-for='(item,i) in books'><a href="#">
                            <img :src="item.image" alt="">
                            <div class="subject-info"><span>{{item.title}}</span>
                                <p>
                                    <Vstar :score="item.rating.average"
                                           v-show="item.rating.average=='0.0'?false:true"></Vstar>
                                    <span class="grade">{{item.rating.average=='0.0'?'目前无人评价':item.rating.average}}</span>
                                </p>
                            </div>
                        </a></li>
                    </ul>
                    <a class="cl" href="#" v-cloak v-show="bookData.total">更多音乐结果( {{bookData.total}} )</a>
                </li>
                <!--bug 当没有数据的时候 li会闪一下再消失-->
                <span v-if='dataShow&&bookShow&&musicShow?false:true'>没有搜索到,换个关键词吧。</span>

            </ul>
        </div>
    </div>

</template>
<script>
    //     导入星星
    import Vstar from './star.vue'

    export  default{
        name: 'search',
        data() {
            return {
                data: [],
                subjects: [],
                musicData: [],
                musics: [],
                bookData: [],
                books: [],
                dataShow: true,
                musicShow: true,
                bookShow: true
            }
        },
        methods: {},
        created(){
            //得到url地址 this.$route.query.query
            let query = this.$route.query.query
            let opt = {
                params: {
                    'start': 0,
                    'count': 3,
                    'apikey': '00fa6c0654689a0202ef4412fd39ce06'
                }
            }
//            电影
            this.$http.jsonp(decodeURI('https://api.douban.com/v2/movie/search?q=' + query), opt).then(
                    (res)=> {
                        this.data = res.data
                        this.subjects = res.data.subjects
                        this.$nextTick(()=> {
                            if (this.subjects.length == 0) {
                                return this.dataShow = false
                            }
                        })
                    }
            )
//            音乐
            this.$http.jsonp(decodeURI('https://api.douban.com/v2/music/search?q=' + query), opt).then(
                    (res)=> {
                        this.musicData = res.data
                        this.musics = res.data.musics
                        this.$nextTick(()=> {
                            if (this.musics.length == 0) {
                                return this.musicShow = false
                            }
                        })

                    }
            )
//            图书
            this.$http.jsonp(decodeURI('https://api.douban.com/v2/book/search?q=' + query), opt).then(
                    (res)=> {
                        this.bookData = res.data
                        this.books = res.data.books
                        this.$nextTick(()=> {
                            if (this.books.length == 0) {
                                return this.bookShow = false

                            }
                        })
                    }
            )


        },
        components: {
            Vstar
        }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>

    .search-res {
        /*头部*/
        .search-hd {
            padding: 7px 20px;
            border-bottom: 1px solid #F2F2F2;
            overflow: hidden;
            input {
                height: 30px;
                box-sizing: border-box;
                background: #f5f5f5;
                border-radius: 3px;
                padding: 5px 8px;
                border: 0;
                outline: 0;
                -webkit-appearance: none;
                width: 85%;
                font-size: 14px;
                color: #111;
            }
            a {
                float: right;
                color: #333;
                display: inline-block;
                width: 10%;
                height: 30px;
                line-height: 30px;
                text-decoration: none;
                font-size: 14px;
            }
        }
        /*内容*/
        .search-ct {
            > .title {
                padding: 0 18px;
            }

            > ul {
                > span {
                    text-align: center;
                    display: block;
                    color: #aaa;
                    padding: 50px;
                    margin-left: -20px;
                }
                padding: 0 18px;
                .search-module {
                    margin-top: 30px;
                    border-bottom: 1px solid #F2F2F2;
                    overflow: hidden;

                    > span {
                        font-size: 15px;
                        line-height: 15px;
                        color: #aaa;
                    }
                    > a {
                        display: block;
                        overflow: hidden;
                        font-size: 15px;
                        padding: 10px 0;
                        text-align: center;
                    }
                }
                ul {
                    li {
                        border-bottom: 1px solid #F2F2F2;
                        overflow: hidden;
                        > a {
                            display: block;
                            overflow: hidden;
                            img {
                                float: left;
                                padding: 10px 0px;
                                width: 40px;
                            }
                        }
                    }
                    .subject-info {
                        display: block;
                        padding: 10px 0;
                        overflow: hidden;
                        > span {
                            display: block;
                            padding-left: 10px;
                            font-size: 17px;
                            color: #494949;
                        }
                        > p {
                            padding-left: 10px;
                            -webkit-margin-after: 0px;
                            -webkit-margin-before: 3px;
                            > span {
                                color: #aaa;
                                font-size: 12px;
                                height: 14px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
