import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Spellcheck from '@/views/Spellcheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/Spellcheck',
      name: 'Spellcheck',
      component: Spellcheck
    }
    
  ]
})
