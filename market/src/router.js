import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Recommend from './components/recommend';
import Texts from './components/text';
import Found from './components/found';
import My from './components/my';
import Hot from './lives/Hot.vue';
import Creame from "./lives/ccream.vue"
import Butiful from "./lives/beutiful.vue"
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
              component:Found,
              children:[
                {
                  path:"/hot",
                  component:Hot,
                },
                {
                  path:"/cream",
                  component:Creame,
                },
                {
                  path:"/butiful",
                  component:Butiful,
                },
              ]
            },
            {
              path:'/my',
              component:My
            }
   
  ]
})
