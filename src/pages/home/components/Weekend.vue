<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="border-bottom" v-for="item of listData" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'HomeWeekend',
    props: {
        listData: Array
    },
    setup() {

        return {
            
        }
    }
}

</script>

<style lang="stylus" scoped>
// ~@ 代表src目录下
@import '~@/assets/mixins.styl'

.title
    line-height 40px
    text-indent 3%
    background #eee
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33%
    .item-img
        width 100%
.item-info
    padding 5px
    .item-title
        line-height 30px
        font-size 18px
        ellipsis()
    .item-desc
        line-height 20px
        color #ccc
        ellipsis()
</style>