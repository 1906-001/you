<template>
  <div id="app">
    <Mhead></Mhead>
    <Mnav></Mnav>
    <router-view></router-view>
  </div>
</template>
<script>
import Mhead from './components/m-head';
import Mnav from './components/m-nav';
 
export default {
  components:{
    Mhead,Mnav
  }
}
</script>
<style lang="less" scoped>
@import 'common/style/index.less';
#app{
  position: fixed;
  top:0;
  bottom: 0;
  background:#fff;
  
}
</style>

