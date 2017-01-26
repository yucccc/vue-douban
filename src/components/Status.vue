<template>
    <div id="status">
        <VtopBanner :slogan1='slogan[0]' :slogan2='slogan[1]'></VtopBanner>
        <!--登录发广播-->
        <div class="status-login">
            <div class="head-portrait"><img src="https://img1.doubanio.com/icon/user_normal.jpg" alt=""></div>
            <div>登录发广告</div>
            <div></div>
            <div></div>
        </div>
        <Vbottom></Vbottom>
    </div>
</template>
<script>
    //    导入顶部广告
    import VtopBanner from './top_banner.vue'
    //    导入底部客户端下载
    import Vbottom from  './bottom.vue'
    export  default{
        data(){
          return{
              slogan:['打开App, 回复广播','']
          }
        },
        components: {
            VtopBanner,
            Vbottom
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    #status {

        .status-login {
            position: relative;
            margin: 0 -18px 5px;
            padding: 10px 18px;
            cursor: pointer;
            overflow: hidden;
        }

    }
</style>