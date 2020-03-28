<template>
  <div id="detail">
    <detailNavBar class="detailNav"></detailNavBar>

    <Scroll class="Scroll" ref="scroll">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detailGoodsInfo :goods-info="goodsInfo"></detailGoodsInfo>
      <detailShopInfo :shop-info="shopInfo"></detailShopInfo>
      <detailImageInfo :detail-info="detailInfo" @detailImgLoad="detailImgLoad"></detailImageInfo>
      <detailParams :item-params="itemParams"></detailParams>
      <detailComment :comment-info="commentInfo"></detailComment>
      <GoodsList :goods="recommends"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
  import detailNavBar from './chindComps/detailNavBar';
  import detailSwiper from "./chindComps/detailSwiper";
  import detailGoodsInfo from './chindComps/detailGoodsInfo';
  import detailShopInfo from "./chindComps/detailShopInfo";
  import detailImageInfo from "./chindComps/detailImageInfo";
  import detailParams from "./chindComps/detailParams";
  import detailComment from "./chindComps/detailComment";
  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goodslist/GoodsList";

  import {getDetailSwiper,GoodsInfo,ShopInfo,DetailItemParams,getRecommend} from "network/detail";
  import {itemListenerMixin} from "common/mixin";

  export default {
    name: "Detail",
    components: {
      detailNavBar,
      detailSwiper,
      detailGoodsInfo,
      detailShopInfo,
      detailImageInfo,
      detailParams,
      detailComment,
      GoodsList,
      Scroll
    },
    mixins: [itemListenerMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        detailInfo: {},
        itemParams: {},
        commentInfo: {},
        recommends: []
      }
    },
    created() {
      //保存传入的id
      this.iid = this.$route.params.iid;
      //根据id请求详情数据
      getDetailSwiper(this.iid).then(res => {
        console.log(res);
        const data = res.result
        //获取轮播图图片数据
        this.topImages = data.itemInfo.topImages;
        //获取商品信息
        this.goodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商家信息
        this.shopInfo = new ShopInfo(data.shopInfo)
        //获取商品图片效果
        this.detailInfo = data.detailInfo
        //获取商品参数
        this.itemParams = new DetailItemParams(data.itemParams.info,data.itemParams.rule)
        //获取评论
        this.commentInfo = data.rate
      })

      //请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    mounted() {

    },
    destroyed() {
      this.$bus.$off('itemImgLoad' , this.itemImgListener)
    },
    methods: {
      detailImgLoad() {
        this.newRefresh()
      }
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
