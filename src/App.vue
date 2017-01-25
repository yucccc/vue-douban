<template>
    <!--主页-->
    <div id="app">
        <!--头部-->
        <Vheader></Vheader>
        <!--渲染区-->
        <transition enter-active-class="animated flipInY"
                    >
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
    //    导入头部
    import Vheader from './components/Header.vue'

    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
        components: {
            Vheader
        }

    }
</script>
