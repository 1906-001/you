<template>
  <div class="found">
    <div class="header1">
      <div class="bg" :style="Style"></div>
      <div class="info">
        <div>买衣服先上蘑菇街</div>
        <div>
          <span>XXXX</span>
          <span>超过两亿用户已下载</span>
        </div>
      </div>
      <div class="go">前去看看</div>
    </div>
    <ul class="nav">
      <router-link active-class="sel" tag="li" to="/hot">热门</router-link>
      <router-link active-class="sel" tag="li" to="/cream">穿搭</router-link>
      <router-link active-class="sel" tag="li" to="/butiful">美妆</router-link>
    </ul>
    <div class="details">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    Style() {
      return " background-image:url(http://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hd)";
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.less";
.found {
  .w(375);
  position: fixed;
  .top(0);
  .bottom(0);
  z-index: 2;
  background: #fff;
  .header1 {
    .w(375);
    .h(47);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #c5c5c5;
    .bg {
      .w(30);
      .h(30);
      background: #f00;
    }
    .info {
      .f_s(14);
      .w(228.5);
      text-align: left;
    }
    .go {
      .w(75);
      .h(25);
      .l-h(25);
      color: #fff;
      background: #f00;
      text-align: center;
      .f_s(14);
    }
  }
  .nav {
    display: flex;
    .f_s(20);
    justify-content: space-around;
  }
  .details {
    .w(375);
    position: fixed;
    .top(94);
    .bottom(0);
    background: #f00;
  }
}
</style>
