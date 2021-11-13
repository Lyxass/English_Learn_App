import Vue from 'vue'
import VueRouter from 'vue-router'
import GetFile from '../components/GetFile.vue'
import Test from '../components/Test.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GetFile
    
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
