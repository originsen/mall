<template>
  <div class="goods-item" @click="detailClick" >
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-item-info">
      <p class="goods-item-title">{{goodsItem.title}}</p>
      <span class="goods-item-price">{{goodsItem.price}}</span>
      <span class="goods-item-collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      },
      // itemId() {
      //   return this.goodsItem.iid || this.goodsItem.item_id
      // }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      //详情页跳转
      detailClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
    flex-basis:auto;
  }
  .goods-item img{
    width: 100%;
    height: 230px;
    object-fit:cover;
  }
  .goods-item-info{
    width: 100%;
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
  }
  .goods-item-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
  }
  .goods-item-price{
    color: var(--color-tint);
  }
  .goods-item-collect{
    position: relative;
    margin-left: 20px;
  }
  .goods-item-collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
