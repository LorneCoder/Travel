<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe600;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe86e;</span>
            请输入城市/景点/内容
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ city }}
                <span class="iconfont arrow-icon">&#xe601;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    name: "HomeHeader",
    props: {
        city: String
    },
    setup() {
        return {};
    },
    components: { RouterLink }
}
</script>

<style lang="stylus" scoped>
// ~@ 代表src目录下
@import '~@/assets/theme.styl'

.header
    display flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        line-height: .64rem
        height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
    .header-right
        width: 1.24rem
        float: right
        text-align: center
        color #fff
        .arrow-icon
            margin-left: -.04rem
            font-size: .26rem
</style>