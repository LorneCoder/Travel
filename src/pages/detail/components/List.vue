<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="iconfont item-title-icon">&#xe65d;</span>
                {{ item.title }}
            </div>
            <div class="item-children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
   
</template>

<script>

export default {
    name: "DetailList",
    props: {
        list: Array
    },
    setup() {

        return {
          
        }
    }
}
</script>

<style scoped lang="stylus">

 .item-title
    line-height 40px
    padding 0 10px
    font-size 15px
    .item-title-icon
        font-size 16px
 .item-children
    padding 0 15px


</style>