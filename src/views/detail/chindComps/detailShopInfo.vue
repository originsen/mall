<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shopCenter">
      <div class="shopContent">
        <div class="cSells">
          <p>{{deelcells}}</p>
          <p class="sellText">总销量</p>
        </div>
        <div class="cGoods">
          <p>{{shopInfo.cGoods}}</p>
          <p class="sellText">全部宝贝</p>
        </div>
      </div>
      <div class="shopDes">
        <div class="Desitem1">
          <p v-for="item in shopInfo.score">{{item.name}}</p>
        </div>
        <div class="Desitem2">
          <p v-for="item in shopInfo.score" :style="{color: item.isBetter ? '#f13e3a' : '#11dd88'}">{{item.score}}</p>
        </div>
        <div class="Desitem3">
          <p v-for="item in shopInfo.score" :style="{backgroundColor: item.isBetter ? '#f13e3a' : '#11dd88'}">{{item.isBetter ? '高' : '低'}}</p>
        </div>
      </div>
    </div>
    <div class="shopBottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      deelcells() {
        if(this.shopInfo.cSells >= 10000){
          return Math.floor(this.shopInfo.cSells / 10000 *10)/10 + '万'
        }else{
          return this.shopInfo.cSells
        }

      }
    }
  }
</script>

<style scoped>
  .shopInfo{
    padding: 10px 6px;
  }
  .shopTop{
    padding: 16px 0;
    box-shadow: 0 -3px 3px rgba(100,100,100,0.1);
  }
  .shopTop img{
    width: 44px;
    height: 44px;
    border: 2px solid #eee;
    border-radius: 50%;
    vertical-align: middle;
  }
  .shopTop span{
    margin-left: 14px;
  }
  .shopCenter{
    display: flex;
    padding: 10px 10px;
  }
  .shopContent,.shopDes{
    flex: 1;
  }
  .shopContent{
    display: flex;
    align-items: center;
  }
  .cSells, .cGoods{
    flex: 1;
    text-align: center;
  }
  .sellText{
    font-size: 13px;
    line-height: 20px;
  }
  .cGoods{
    border-right: 2px solid #ddd;
  }
  .shopDes{
    display: flex;
    /*padding: 0 10px;*/
    font-size: 13px;
    line-height: 20px;
    text-align: center;
  }
  .shopDes p {
    margin-top: 6px;
  }
  .Desitem1{
    flex: 4;
  }
  .Desitem2 {
    flex: 2;
  }
  .Desitem3{
    flex: 1;
    color: white;
  }
  .shopBottom{
    text-align: center;
    padding: 10px 0;
  }
  .shopBottom span{
    padding: 3px 30px;
    border-radius: 4px;
    font-size: 14px;
    background-color: rgba(100,200,100,0.3);
  }

</style>
