import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        component: () => import('./pages/home/Home.vue'),
        meta: {
          title: '首页',
          keepAlive: true
        },
      },
      {
        path: '/city',
        component: () => import('./pages/city/City.vue'),
        meta: {
          title: '城市选择'
        },
      },
      {
        path: '/detail',
        component: () => import('./pages/detail/Detail.vue'),
        meta: {
          title: '详情'
        },
      },
      {
        path: '/demo',
        component: () => import('./pages/aDemo/index.vue'),
        meta: {
          title: '测试'
        },
      },
];

const router = createRouter({
  scrollBehavior () {
    return {top: 0}
  },
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

  export { router };
