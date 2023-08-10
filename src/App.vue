<template>
  <!-- <router-view/> -->
  <!--缓存想要缓存的页面，实现后退不刷新-->
  <!--加上v-if的判断，可以自定义想要缓存的组件，自定义在router里面-->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<script setup>
import { provide } from 'vue';
import { useRouter , useRoute} from 'vue-router';
import axios from 'axios';

provide('$axios', axios);
provide('$router', useRouter());
provide('$route', useRoute());

</script>

<style>

</style>
