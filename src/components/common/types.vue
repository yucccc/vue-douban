<!--分类浏览-->
<template>
    <div class="bottom">
        <div class="bottom-content">
            <!--//接受一个标题-->
            <h3>{{this.title}}</h3>
            <!--接受一个数组-->
            <div class="bottom-i-content">
                <ul>
                    <li v-for="(item,i) in msg" :key="i">
                        <router-link to="/" class="bottom-a">
                            <mt-button class="half cl" type="default" size="large">
                                {{item}}
                                <span class="half-r">></span>
                            </mt-button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export  default{
        props: {
//            需要接受的参数  因为不是动态请求的  所以客户输入即可
            title: {  //接收标题
                type: String
            },
            msg: { //接收列表
                type: Array
            }
        }

    }
</script>
<style lang="less" rel="stylesheet/less" >

    .bottom {
        padding-top: 1.3rem;
        h3 {
            padding: 0 1.12rem;
        }
        .half {

            color: #42bd56;
            text-align: left;
            box-sizing: border-box;
            padding: 0 1rem;
            .half-r {
                float: right;
                width: 3%;
                font-weight: normal;
                font-family: Consolas;
                color: #ccc;
            }
        }
        .bottom-content {
            .bottom-a {
                display: block;
            }
            .bottom-i-content {
                margin-left: 0.94rem;
                > ul {
                    width: 100%;
                    padding: 1.12rem 0 1.88rem;
                    color: #eee;
                    font-size: .9rem;
                    overflow: hidden;
                    > li {
                        width: 49%;
                        display: inline-block;
                        margin-right: 1%;
                    }
                }
            }
        }
    }
</style>