<!--星星-->
<template>
<span class="star">
 <!--接收一个评分参数-->
 <span v-for="iClass in iClasss" class="star-i" :class="iClass"></span>
</span>
</template>

<script>
    //星星个数
    const Length = 5;
    //全星
    const cl_on = 'on';
    //半星
    const cl_off = 'off';
    export default {
//        props: {
//            score: {
//             //接收一个评分参数
//                type: String
//            }
//        },
        props: ['score'],  //接收一个评分参数
        computed: {
            iClasss(){
                let result = [];//定义一个数组 存储class
                //得到分数 如果是 6.1分 去除小数 / 3 分 3星  如果是 7.1分 去除小数 /2等于3.5 向上取整 是4星
                let score = Math.ceil(parseInt(this.score) / 2);
                for (let i = 0; i < score; i++) {
                    // 先数组添加
                    result.push(cl_on);
                }
                while (result.length < Length) {
                    // 剩下的添加off
                    result.push(cl_off);
                }
                return result;
            }
        }
    }


</script>

<style lang="less" rel="stylesheet/less" scoped>
    .star {
        display: inline-block;

        .on {
            background-image: url('../../assets/img/on.png');
        }

        .off {
            background-image: url('../../assets/img/off.png');
        }

        .star-i {
            width: 10px;
            height: 10px;
            float: left;
            margin-right: 1px;
            background-size: cover;
            max-width: 20px;
            max-height: 20px;
            background-repeat: no-repeat;
        }

    }
</style>