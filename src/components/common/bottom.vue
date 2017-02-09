<!--底部客户端下载-->
<template>
    <!--底部-->
    <div class="douban-app">
        <div class="info">
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt="#">
            <div class="info-content"><strong>豆瓣</strong>
                <div>我们的精神角落</div>
            </div>
        </div>
        <a href="#" class="cl">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>

        /*底部*/
        .douban-app {
            padding: 0 0 20px 0;
            margin-top: 50px;
            margin-bottom: 30px;
            text-align: center;
            font-size: 15px;
            .info {
                margin: 0 auto 15px;
                overflow: hidden;
                text-align: left;
                font-size: 14px;
                display: inline-block;
                color: #111;
                > img {
                    float: left;
                    margin-right: 12px;
                    width: 48px;
                }
                .info-content {
                    overflow: hidden;
                    > strong {
                        font-size: 24px;
                        font-weight: normal;
                        line-height: 28px;
                    }
                    > div {
                        white-space: pre;
                        line-height: 20px;
                        color: black;
                    }
                }

            }
            > a {
                display: block;
            }
        }


</style>

