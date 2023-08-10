<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li
                class="item border-bottom" 
                v-for="item of listData" 
                :key="item.id"
                @click="showDetail(item.id)"
            >
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { inject } from 'vue'


export default {
    name: 'HomeRecommend',
    props: {
        listData: Array
    },
    setup() {
        const router = inject('$router')
        
        const showDetail = (id)=> {
            //console.log(id)
            router.push({
                path: 'detail',
                query: {
                    id
                }
            })
        }
        return {
            showDetail
        }
    }
}

</script>

<style lang="stylus" scoped>
// ~@ 代表src目录下
@import '~@/assets/mixins.styl'

.title
    margin-top 5px
    line-height 40px
    text-indent 3%
    background #eee
.item
    overflow hidden
    display flex
    height 100px
    .item-img
        padding 5px
        width 110px
        height 90px
    .item-info
        flex 1
        padding 5px
        min-width 0
        .item-title
            line-height 30px
            font-size 18px
            ellipsis()
        .item-desc
            line-height 20px
            color #ccc
            ellipsis()
        .item-button
            line-height 28px
            margin-top 6px
            background #ff9300
            padding 0 8px
            border-radius 3px
            color #fff

</style>