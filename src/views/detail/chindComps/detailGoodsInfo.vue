<template>
  <div class="goodsInfo">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="priceall">
      <span class="price">{{goodsInfo.price}}</span>
      <span class="oldprice">{{goodsInfo.oldPrice}}</span>
      <span class="discountDesc" :style="{backgroundColor:goodsInfo.discountBgColor}" v-if="goodsInfo.discountDesc">{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="item in goodsInfo.columns">{{item}}</span>
    </div>
    <div class="services">
      <span v-for="item in goodsInfo.services" :style="{backgroundImage : 'url(' + item.icon + ')', backgroundRepeat:'no-repeat',backgroundSize:'12px'}">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props:{
      goodsInfo:{
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .goodsInfo{
    padding: 0 6px;
  }
  .title{
    padding: 10px 0;
    font-size: 14px;
    color: #333;
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .priceall{

  }
  .price{
    color: var(--color-tint);
    font-weight: bold;
  }
  .oldprice{
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
    padding: 0 10px;
  }
  .discountDesc{
    font-size: 12px;
    color: white;
    padding: 2px 3px;
    border-radius: 6px;
    position: relative;
    bottom: 4px;
  }
  .columns{
    padding: 10px 0 5px 0;
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .services{
    padding: 10px 0 5px 0;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }
  .services span{
    padding: 0 0 6px 14px;
  }
</style>
