import Vue from 'vue'
import Router from 'vue-router'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//import page_frame from '@/components/page_frame'
const page_frame = () => import('@/components/page_frame/page_frame')
const download_frame = () => import('@/components/download_frame/download_frame')
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const home = () => import('@/components/home/home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    return {
      x:0,
      y:0
    }
  },
  routes: [
    {
      name:'page_frame',
      path:'/',
      redirect:{name:'home', params:{lang:'ru'}},
      component: page_frame,
      children:[
        {
          name:'home',
          path:':lang',
          component:home,
        },
      ]
    },
    {
      name:'download',
      path:'/download/:lang',
      component:download_frame
    }
  ]
})
