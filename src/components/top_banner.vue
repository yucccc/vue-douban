<!--顶部广告-->
<template id='top_banner'>
    <section class="top-banner">
        <div class="banner-bg">
            <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg"
                 alt="#">
        </div>
        <div class="banner_wrapper">
            <div>
                <div class="promo_title">
                    <span>{{this.slogan1}}</span>
                    <br>
                    <span>{{this.slogan2}}</span>
                </div>
                <div class="button_wrapper">
                    <a href="#">极速下载</a>
                    <a href="#">打开</a>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    export default{

        name: 'top_banner',
        //接收标语参数
        props: ['slogan1', 'slogan2']
    }
</script>
<style rel="stylesheet/less" lang="less">
    .top-banner {
        margin-bottom: 0;
        max-width: 100%;
        overflow: hidden;
        text-align: left;
        position: relative;

        > .banner-bg {
            font-size: 0;
            padding-bottom: 21.33333%;
            position: relative;
            > img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        > .banner_wrapper {
            position: absolute;
            left: 18px;
            top: 0;
            bottom: 0;
            right: 10px;
            > div {
                width: 100%;
                height: 100%;
                justify-content: space-between;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                .promo_title {
                    vertical-align: middle;
                    span {
                        font-size: 14px;
                        font-weight: normal;
                        line-height: 22px;
                        color: #2CA532;
                    }
                }
                .button_wrapper {
                    vertical-align: middle;
                    white-space: nowrap;
                    font-size: 0;
                    padding-left: 12px;
                    text-align: center;
                    a {
                        font-size: 13px;
                        font-weight: bold;
                        width: auto;
                        padding: 0 14px;
                        position: relative;
                        display: inline-block;
                        border-radius: 3px;
                        line-height: 2;
                        white-space: nowrap;
                    }
                    a:after {
                        content: '';
                        position: absolute;
                        left: -4px;
                        right: -4px;
                        top: -10px;
                        bottom: -10px;
                    }
                    a:first-child {
                        color: #fff;
                        border: 1px solid #42bd56;
                        background: #42bd56;
                    }
                    a:last-child {
                        margin-right: 0;
                        margin-left: 8px;
                        color: #42bd56;
                        border: 1px solid #42bd56;
                    }

                }
            }
        }
    }
</style>