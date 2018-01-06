import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Follow from '@/components/Follow.vue';
import Column from '@/components/Column.vue';
import UserInfo from '@/components/UserInfo.vue';
import UserLogin from '@/components/UserLogin.vue';
import UserReg from '@/components/UserReg.vue';
import Article from '@/components/Article.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // 切换路径模式，变成history模式
  scrollBehavior: () => ({y: 0}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/follow',
      component: Follow
    },
    {
      path: '/column',
      component: Column
    },
    {
      path: '/user-info',
      component: UserInfo
    },
    {
      path: '/user-login',
      component: UserLogin
    },
    {
      path: '/user-reg',
      component: UserReg
    },
    {
      path: '/article/:id',
      component: Article
      /* children:[
       {
       path:'/:id',
       component:Article
       }
       ] */
    }
  ]
});
