<template>
    <div class="header">
        城市选择
        <router-link to="/home">
            <div class="iconfont header-back">&#xe600;</div>
        </router-link>
    </div>
</template>


<script>
export default {
    name: 'cityHeader',
    setup() {

        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/theme.styl"
.header
    position relative
    overflow hidden
    height 40px
    line-height 40px
    text-align center
    color #fff
    background $bgColor
    .header-back
        position absolute
        top 0
        left 0
        width 32px
        color #fff
        font-size .4rem
        text-align center


</style>