<template>
    <div
        v-show="showAbs"
        class="header-abs" 
        @click="goback"
    >
        <div class="iconfont header-abs-back">&#xe600;</div>
    </div>
    <div
        v-show="!showAbs"
        class="header-fixed"
        :style="opacityStyle"
    >
        景点详情
        <router-link to="/home">
            <div class="iconfont header-fixed-back">&#xe600;</div>
        </router-link>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { ref } from 'vue';
import { inject } from 'vue';


export default {
    name: "detailHeader",
    setup() {
        const router = inject('$router')
        const showAbs = ref(true)
        const opacityStyle = ref({
            opacity: 0
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll)
        })
        
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })

        const handleScroll = ()=> {
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if (top > 50) {
                let opacity = top / 130
                opacity = opacity > 1 ? 1 : opacity
                opacityStyle.value.opacity = opacity
                showAbs.value = false
            } else {
                showAbs.value = true
            }
        }

        const goback = ()=> {
            router.back()
        }

        return {
            showAbs,
            opacityStyle,
            goback
        }
    }
}
</script>

<style scoped lang="stylus">
@import "~@/assets/theme.styl"
    .header-abs
        position absolute
        top 10px
        left 10px
        width 36px
        height 36px
        line-height 36px
        border-radius 18px
        text-align center
        background rgba(0, 0, 0, 0.8)
        .header-abs-back
            color #fff
            font-size 20px
    .header-fixed
        z-index 2
        position fixed
        top 0
        left 0
        right 0
        height 40px
        line-height 40px
        text-align center
        color #fff
        background $bgColor
        .header-fixed-back
            position absolute
            top 0
            left 0
            width 32px
            color #fff
            font-size .4rem
            text-align center

</style>