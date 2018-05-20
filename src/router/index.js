import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CharacterDetail from '@/components/CharacterDetail'
import CharacterList from '@/components/CharacterList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/character',
      name: 'CharacterList',
      component: CharacterList
    },
    {
      path: '/character/:id',
      name: 'CharacterDetail',
      component: CharacterDetail
    }
  ]
})
