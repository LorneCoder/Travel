<template>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
        <detail-list :list="categoryList"></detail-list>
    </div>
</template>

<script>
import { ref } from 'vue'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import { inject } from 'vue'
import { onMounted } from 'vue'

export default {
    name: "detailPage",
    components: { DetailBanner, DetailHeader, DetailList },
    setup() {
        const axios = inject('$axios')
        const sightName = ref('')
        const bannerImg = ref('')
        const gallaryImgs = ref([])
        const categoryList = ref([])

        onMounted(() => {
            axios.get('/mock/detail').then(loadServerDataSucc)
        })

        const loadServerDataSucc = (res)=> {
            //console.log(res)
            if (res.data.ret) {
                res = res.data.data
                sightName.value = res.sightName
                bannerImg.value = res.bannerImg
                gallaryImgs.value = res.gallaryImgs
                categoryList.value = res.categoryList
            }
        }

        return {
            sightName,
            bannerImg,
            gallaryImgs,
            categoryList,
            loadServerDataSucc
        }
    }
}

</script>

<style scoped lang="stylus">
.content
    height 1000px

</style>