<template>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
</template>


<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'

export default {
    name: 'cityView',
    components: { CityHeader, CitySearch, CityList },
    setup() {

        return {

        }
    }
}
</script>

<style lang="stylus" scoped>

</style>