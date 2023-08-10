<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item class="swipe-item" v-for="item of listData" :key="item.id">
                <van-image fit="scale-down" :src="item.imgUrl"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>

export default {
    name: 'HomeSwiper',
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

.my-swipe
    height: 120px
    width: 100%

</style>