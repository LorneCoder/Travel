<template>
    <div>
        <van-swipe class="my-swipe" :loop="false" indicator-color="white">
            <van-swipe-item v-for="(page, index) of pages" :key="index">
                <div class="icons">
                    <div class="icon" v-for="item in page" :key="item.id">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl">
                        </div>
                        <p class="icon-desc">{{ item.desc }}</p>
                    </div>        
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'HomeIcons',
    props: {
        listData: Array
    },
    setup(props) {

        const pages = computed(() => {
            //console.log('icons', props.listData)
            const pagesData = []
            props.listData.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pagesData[page]) {
                    pagesData[page] = []
                }
                pagesData[page].push(item)
            });
            return pagesData
        })

        return {
            pages
        }
    }
}

</script>

<style lang="stylus" scoped>
@import '~@/assets/mixins.styl'

.icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 20px
            padding 10px
            box-sizing border-box
            text-align center
            .icon-img-content
                displat block
                margin 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            color: #333
            height 20px
            line-height 20px
            padding 0 5px
            text-align center
            ellipsis()
</style>