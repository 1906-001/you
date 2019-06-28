<template>
    <ul class="m-nav">
    <router-link active-class="sel" to="/recommend" tag="li" class='first'>
      <span>推荐</span>
    </router-link>
    <router-link active-class="sel" to="/texts" tag="li">
      <span>文章精选</span>
    </router-link>
    <router-link active-class="sel" to="/found" tag="li">
      <span>发现</span>
    </router-link>
    <router-link active-class="sel" to="/my" tag="li">
      <span>我的</span>
    </router-link>
  </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import '../common/style/index.less';
.m-nav{
    position: absolute;
    bottom: 0;
    .w(375);
    .h(50);
    display:flex;
    justify-content:space-around;
    .first{
        color:#ff4c39;
    }
    li{
        font-size:12px;
    }
}
</style>
