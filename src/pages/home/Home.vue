<template>
    <div>
        <home-header :city="city" ></home-header>
        <home-swiper :listData="swiperList"></home-swiper>
        <home-icons :listData="iconList"></home-icons>
        <home-recommend :listData="recommendList"></home-recommend>
        <home-weekend :listData="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import { onMounted, inject } from 'vue'
import { ref } from 'vue'

export default {
    name: 'HomeView',
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    setup() {
        const axios = inject("$axios")
        const city = ref('')
        const swiperList = ref([])
        const iconList = ref([])
        const recommendList = ref([])
        const weekendList = ref([])

        onMounted(() => {
            axios.get('/api/mock/home').then(getHomeInfo)
        })

        const getHomeInfo = (res) => {
            //console.log(res, '首页数据加载')
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                city.value = data.city
                swiperList.value = data.swiperList
                iconList.value = data.iconList
                recommendList.value = data.recommendList
                weekendList.value = data.weekendList
            }
        }

        return {
            city,
            swiperList,
            iconList,
            recommendList,
            weekendList
        }
    }
    
}
</script>

<style scoped>

</style>