import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Recommend from './components/recommend';
import Texts from './components/text';
import Found from './components/found';
import My from './components/my';

export default new Router({
  routes: [
            {
              path:'/recommend',
              component:Recommend
            },
            {
              path:'/texts',
              component:Texts
            },
            {
              path:'/found',
              component:Found
            },
            {
              path:'/my',
              component:My
            }
   
  ]
})
