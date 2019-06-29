<template>
     <div class='text'>
        <div class="imgbox">
            <ul>
                <li class="li-Img"><img src="../assets/yue/sp01Img02.png"></li>
                <li><img src="../assets/yue/sp01Img03.jpg"></li>
                <li><img src="../assets/yue/sp01Img04.jpg"></li>
                <li><img src="../assets/yue/spo1Img05.jpg"></li>
            </ul>
        </div>
        <div class="goodsClassify">
            <ul>
                <li v-for="(item,index) in 15" :key="index">
                    <img src="../assets/yue/sp01Img03.jpg" >
                    <p>女装</p>
                </li>
            </ul>
        </div>
    
    </div>
</template>
<script>
import Jsonp from "jsonp";
import BS  from "better-scroll";

export default {
  data(){
     return {

     }
  },
  methods:{
      initBS(){
        this.scroll=new BS(".text",{click:true,probeType:2})

      },
      getdata(){
          console.log(111111)
          var url="https://api.mogu.com/h5/mwp.darwin.multiget/3/?data=%7B%22pids%22%3A%22122995%2C132827%22%2C%22appPlat%22%3A%22m%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1561725040186&mw-uuid=7a89d326-785f-481d-be75-6827da8df301&mw-h5-os=iOS&mw-sign=64708511202969ede23c07670163e207&callback=mwpCb2&_=1561725040191";
         Jsonp(url,{param:"callback"},(err,res)=>{
             console.log(res)
         })
      }

  },
  mounted(){
     this.getdata();
     this.initBS();

    
  }


    
}
</script>
<style lang="less" scoped>
@import '../common/style/index.less';
    .text{
         .w(375);
         .h(620);
        .imgbox{
             .w(366);
             .h(82);
             .padding(9,0,9,9);
             ul{
                 width: 100%;
                 height: 100%;
                .li-Img{
                   background-image: url("../assets/yue/sp01Img01.jpg");

                }
                li{ 
                    float: left;
                    .w(82);
                    .h(82);
                    .margin(0,9,0,0);
                    img{
                      .w(82);
                      .h(82);
                    }

                }
             }
           
        }
        .goodsClassify{
                .w(375);
                .h(245);
                ul{
                    width: 100%;
                    height: 100%;
                    li{ 
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        float: left;
                        .w(75);
                        .h(70);
                        text-align: center;
                        img{
                            .w(50);
                            .h(50);
                           border-radius:50px;
                        }
                        p{
                            font-size: 12px;
                            text-align: center;
                        }


                    }
                   
                    
                }
        } 
    }
</style>
 