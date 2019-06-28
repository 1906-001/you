<template>
    <div class="Hot">这里是热门页面</div>
</template>
<script>
import Jsonp from "jsonp";
export default {
 methods:{
     init(){
          console.log(1111)
             let url='https://api.mogu.com/h5/mwp.livelist.liveTabList/2/?data=%7B%22tabId%22%3A1%2C%22pageIndex%22%3A1%2C%22platform%22%3A%22h5%22%2C%22pageSize%22%3A10%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1561727314073&mw-uuid=fd7f7bb8-0d2b-42a4-8c26-97840759ba83&mw-h5-os=iOS&mw-sign=093c0e4fb32786840e07670c69a94d67'
          Jsonp(url, { param: "callback" }, (err, res) => {
              console.log(1111)
             console.log(res)
          })
     } 

 },
 mounted(){
      this.init()
    }
 
   
}
</script>
<style lang="less" scoped>
    @import '../common/style/index.less';
    .Hot{
        color: #fff;

         
    }
</style>

