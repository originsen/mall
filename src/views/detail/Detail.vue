<template>
  <div id="detail">
    <detailNavBar class="detailNav"></detailNavBar>

    <Scroll class="Scroll">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detailGoodsInfo :goods-info="goodsInfo"></detailGoodsInfo>
      <detailShopInfo :shop-info="shopInfo"></detailShopInfo>
    </Scroll>
  </div>
</template>

<script>
  import detailNavBar from './chindComps/detailNavBar';
  import detailSwiper from "./chindComps/detailSwiper";
  import detailGoodsInfo from './chindComps/detailGoodsInfo';
  import detailShopInfo from "./chindComps/detailShopInfo";
  import Scroll from "components/common/scroll/Scroll";

  import {getDetailSwiper,GoodsInfo,ShopInfo} from "network/detail";

  export default {
    name: "Detail",
    components: {
      detailNavBar,
      detailSwiper,
      detailGoodsInfo,
      detailShopInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
      }
    },
    created() {
      //保存传入的id
      this.iid = this.$route.params.iid;
      //根据id请求详情数据
      getDetailSwiper(this.iid).then(res => {
        console.log(res);
        //获取轮播图图片数据
        this.topImages = res.result.itemInfo.topImages;
        //获取商品信息
        const data = res.result
        this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商家信息
        this.shopInfo = new ShopInfo(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
  }
  .detailNav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .Scroll{
    height: calc(100% - 93px);
  }
</style>
