<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
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

.search
    height 40px
    padding 0 5px
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height 32px
        padding 0 5px
        border-radius 5px
        text-align center
        color #666


</style>