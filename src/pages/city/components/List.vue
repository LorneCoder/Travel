<template>
    <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                <div class="button">北京</div>
            </div>
        </div>
    </div>
    <div class="area border-topbottom">
        <div class="title">热门城市</div>
    </div>
    <div class="area border-topbottom">
        <div class="title">A</div>
    </div>
</template>


<script>
export default {
    name: 'citySearch',
    setup() {

        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/theme.styl"
.border-topbottom
    &:before
        border-color #ccc
    &:after 
        border-color #ccc
.title
    line-height 30px
    background #eee
    padding-left 5px
    color #666
    font-size 15px
.button-list
    overflow hidden
    padding 5px
    .button-wrapper
        float left
        width 33%
        .button
            padding 5px 0
            margin 5px
            border 1px solid #ccc
            text-align center
            border-radius 3px

</style>