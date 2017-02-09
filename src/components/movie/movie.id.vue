<!--电影详细-->
<template>
    <div class="movieDetails">
        <VtopBanner :slogan1='slogan[0]' :slogan2='slogan[1]'></VtopBanner>
        <div class="bigBox">
            <!--标题-->
            <h1>{{data.title}}</h1>
            <section class="subject-info clearfix">
                <!--海报-->

                <div class="conentL">
                    <p class="comment">
                        <!--星星-->
                        <Vstar class="size" :score="star"></Vstar>
                        <strong class="grade">{{star =='0'?'尚未上映':star}}</strong>
                        <!--评价-->
                        <span>{{data.ratings_count}}人评价</span>
                    </p>
                    <p>
                        <!--国际-->
                        <span v-for='i in data.countries'>{{i}}/</span>
                        <!--类型-->
                        <span v-for='i in data.genres'>{{i}}/</span>
                        <!--导演-->
                        <span v-for='i in data.directors'>{{i.name}}(导演)/</span>
                        <!--判断时候是最后一个人名 是就去掉/--><!--演员-->
                        <span v-for='(item,i) in data.casts'>{{item.name}}{{i+1==data.casts.length?'':'/'}}</span>
                        <a class="cl" href='#'>用App查看影人资料</a>
                    </p>
                </div>
                <div class="img fr">
                    <a href="#"><img :src="datai" alt="data.title"></a>
                </div>

                <!--简介-->
            </section>
            <section class="subject-summary">
                <h2>{{data.title}}的剧情简介</h2>
                <div>
                    <p>
                        {{data.summary}}
                    </p>
                </div>
            </section>
            <Vbottom></Vbottom>
        </div>
    </div>
</template>
<script>
    //    导入顶部广告组件
    import VtopBanner from '../common/top_banner.vue'
    //    导入星星组件
    import Vstar from '../common/star.vue'
    //    导入底部
    import Vbottom from '../common/bottom.vue'
    export default{
        data(){
            return {
                url: 'https://api.douban.com/v2/movie/subject/',
                data: {},
                slogan: ['用 App 打开', '查看影片获奖情况'],
                datai: '',
                star: ''
            }
        },
        created(){
//            根据拿到的id 发送请求
            let id = this.$route.params.id
            this.$http.jsonp(this.url + id, {
                'apikey': '00fa6c0654689a0202ef4412fd39ce06'
            }).then((res)=> {
//             拿到数据
                this.data = res.data
                this.datai = res.data.images.medium
                this.star = res.data.rating.average
            }, (err)=> {
                console.log(err)
            })

        },
        components: {
            VtopBanner,
            Vstar,
            Vbottom
        }

    }
</script>
<style rel="stylesheet/less" lang="less">

    .bigBox {
        > * {
            padding: 0;
            margin: 0;
        }
        margin: 0 18px;
        p {
            font-size: 15px;
        }
        h1 {
            margin: 30px 0 5px;
            font-size: 24px;
            line-height: 32px;
            word-break: break-all
        }
        .subject-info {
            position: relative;
            margin-bottom: 30px;
            display: flex;
            .conentL {

                flex: 1;
                .comment {
                    line-height: 18px;
                    span:last-child {
                        color: #aaa;
                    }
                    strong {
                        font-weight: normal;
                        color: #494949;
                        padding-right: 8px;
                    }
                    .size {
                        width: auto;
                        > span {
                            width: 13px;
                            height: 13px;

                        }

                    }

                }
                P:last-child {
                    color: #494949;
                    margin-top: 15px;
                    padding-right: 24px;
                    font-size: 14px;
                    line-height: 1.6;
                    a {
                        display: block;
                        font-size: 14px;
                        line-height: 1;
                        margin-top: 10px;
                        margin-bottom: -30px;
                    }
                }
            }

            .img {

            }
        }
        .subject-summary {

            h2 {
                color: #aaa;
                margin: 0 0 15px;
                font-size: 15px;
            }
            p {
                font-size: 15px;
                line-height: 22px;
                word-wrap: break-word;
            }

        }

    }
</style>

