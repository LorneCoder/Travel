<template>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src=bannerImg>
        <div class="banner-info">
            <div class="banner-title">{{ sightName }}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe63d;</span>
                {{ gallaryImgs.length }}
            </div>
        </div>
    </div>
</template>

<script>
import { showImagePreview } from 'vant';

export default {
    name: "detailBanner",
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    setup(props) {

        const handleBannerClick = ()=> {
            showImagePreview({
                images: props.gallaryImgs,
                overlayClass: 'cover'
            })
        }

        return {
            handleBannerClick
        }
    }
}
</script>

<style scoped lang="stylus">
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height 25px
        color #fff
        padding 0 10px
        background-image linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))
        .banner-title
            flex 1
            font-size 16px
        .banner-number
            height 25px
            line-height 25px
            padding 0 15px
            border-radius 12px
            background rgba(0, 0, 0, .8)
            font-size 14px
            .banner-icon
                font-size 14px

</style>