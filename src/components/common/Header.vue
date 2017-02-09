<!--头部-->
<template id="header">
    <!--头部-->
    <header>
        <div class="header">
            <a href="/">
                <h1>豆瓣</h1></a>
            <nav>
                <ul>
                    <li v-for="(item,index) in items" :key='index'>
                        <router-link :style="{color:item.color}" :to="item.path">{{item.title}}</router-link>
                    </li>
                </ul><span class="search" @click='show'></span>
            </nav>
        </div>
        <!--搜索-->
        <transition
                enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutRight">
            <div class="search-form" v-show='detailShow'>
                <a type="button" @click="close" class="cl">关闭</a>
                <form action="/search" method="GET">
                    <div>
                        <input class="s-input" name="query" type="text" autofocus>
                    </div>
                </form>
                <ul>
                    <li v-for="(n,i) in search">
                        <div>
                            <a v-for="i in search[i]" href="#"><strong :style="{color:i.cl}">{{i.st}}</strong>
                                <span>{{i.sp}}</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="navBottom">
                    <div>
                        <a href="/">注册账号</a><a href="/">登录豆瓣</a>
                    </div>
                    <div>
                        <a href="/">使用桌面版</a><a href="/">使用豆瓣App</a>
                    </div>
                </div>
            </div>
        </transition>
    </header>


</template>
<script>
    export default{
        name: 'header',
        data() {
            return {
                items: [{
                    title: '电影',
                    path: '/',
                    color: '#2384E8'
                }, {
                    title: '图书',
                    path: '/books',
                    color: '#9F7860'
                }, {
                    title: '广播',
                    path: '/status',
                    color: '#E4A813'
                }, {
                    title: '小组',
                    path: '/group',
                    color: '#2AB8CC'
                }],
                search: [[{
                    st: '电影',
                    sp: '影院热映',
                    cl: 'rgb(35, 132, 232)'
                }, {
                    st: '同城',
                    sp: '周末活动',
                    cl: 'rgb(230, 70, 126)'
                }, {
                    st: '阅读',
                    sp: '电子书',
                    cl: 'rgb(159, 120, 96)'
                }, {
                    st: '东西',
                    sp: '心爱之物',
                    cl: 'rgb(225, 100, 77)'
                }], [{
                    st: '电视',
                    sp: '正在热播',
                    cl: 'rgb(122, 106, 219)'
                }, {
                    st: '小组',
                    sp: '志趣相投',
                    cl: 'rgb(42, 184, 204)'
                }, {
                    st: '游戏',
                    sp: '虚拟世界',
                    cl: 'rgb(87, 116, 197)'
                }, {
                    st: 'FM',
                    sp: '红心歌单',
                    cl: 'rgb(64, 207, 169)'
                }], [{
                    st: '图书',
                    sp: '畅销排行',
                    cl: 'rgb(159, 120, 96)'
                }, {
                    st: '音乐',
                    sp: '新碟榜',
                    cl: 'rgb(244, 143, 46)'
                }, {
                    st: '应用',
                    sp: '玩手机',
                    cl: 'rgb(89, 108, 221)'
                }, {
                    st: '市集',
                    sp: '购买原创',
                    cl: 'rgb(66, 189, 86)'
                }]],
                detailShow: false
            }

        },
        methods: {
            show(){
                this.detailShow = true;
            },
            close(){
                this.detailShow = false;
            }
        },
    }

</script>
<style rel="stylesheet/less" lang="less" scoped>
    /*头部*/
    #app {

        > header {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 99;
        }
        .header {
            width: 100%;
            height: 47px;
            box-sizing: border-box;
            padding: 0 18px;
            border-bottom: 1px solid #f3f3f3;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
            background: #fff;
            box-sizing: border-box;
            display: -webkit-box;
            display: flex;
            > * {
                white-space: nowrap;
            }
            > a {
                font-size: 0;
                > h1 {
                    text-indent: -9999px;
                    font-size: 0px;
                    background: url('../../assets/img/logo.png') no-repeat;
                    background-size: cover;
                    height: 22px;
                    width: 46px;
                    display: inline-block;
                }
            }
            > nav {
                > * {
                    vertical-align: middle;
                    display: inline-block;
                }
                > ul {
                    > li {
                        font-size: 15px;
                        margin-right: 19px;
                        display: inline-block;
                    }
                }
                .search {
                    font-size: 0;
                    background: url('../../assets/img/search.png') no-repeat;
                    background-size: cover;
                    width: 24.57143px;
                    height: 18.28571px;
                    margin-top: 4px;
                    position: relative;
                }
            }
        }
    }

    /*搜索*/
    .search-form {
        height: 100%;
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        .navBottom {
            > div:last-child {
                border-top: none;
            }
            > div {
                text-align: center;
                padding: 0.87rem 0;
                border-top: 1px solid #f3f3f3;
                border-bottom: 1px solid #f3f3f3;
                > a {
                    color: #42bd56;
                    display: inline-block;
                    width: 50%;
                    font-size: 15px;
                    box-sizing: border-box;
                }
                a + a {
                    border-left: 1px solid #f3f3f3;
                }
            }
        }
        > ul {
            padding-top: 25px;
            overflow: hidden;
            display: -webkit-box;
            display: flex;
            justify-content: space-around;
            li {
                width: 33.33%;
                strong {
                    display: block;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 28px;
                }
                span {
                    display: block;
                    color: #999;
                    height: 17px;
                    font-size: 12px;
                    letter-spacing: 1px;
                }
                div {
                    float: left;
                    position: relative;
                    left: 50%;
                    top: 0;
                }
                a {
                    display: block;
                    text-align: center;
                    margin-bottom: 25px;
                    position: relative;
                    left: -50%;
                    top: 0;
                }

            }

        }

        > a {
            position: absolute;
            top: 20px;
            left: 18px;
            color: #42bd56;
            font-size: 16px;
        }
        form {
            border-bottom: 1px solid #f3f3f3;
            padding: 15px 18px 15px 60px;
        }
        .s-input {
            box-sizing: border-box;
            -webkit-appearance: none;
            border: 0;
            background: url('../../assets/img/search2.png') no-repeat 50% #f3f3f3;
            background-size: 17.33333px;
            border-radius: 3px;
            width: 100%;
            height: 31px;
            font-size: 14px;
            line-height: 31px;
        }
    }

</style>
