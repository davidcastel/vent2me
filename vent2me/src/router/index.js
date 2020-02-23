import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import chat from '@/components/chat'
import chat2 from '@/components/chat2'
import create from '@/components/create'
import infiniteScroll from 'vue-infinite-scroll'


Vue.use(infiniteScroll)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/profile',
      name: 'create',
      component: create
    },
    {
      path: '/chat2',
      name: 'chat2',
      component: chat2,
      props: true,

    },
    {
      path: '/chats',
      name: 'chat',
      component: chat,
      props: true,

    }
  ]
})
