<template>
  <div class="detail-image-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      <div class="desc-leftborder"><div class="border-left"></div></div>
      <p>{{detailInfo.desc}}</p>
      <div class="desc-rightborder"><div class="border-right"></div></div>
    </div>
    <div>{{detailInfo.detailImage[0].desc}}</div>
    <div>{{detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage[0].list" class="item-info">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailImageInfo",
    props: {
      detailInfo:{
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imgLoad () {
        this.$emit('detailImgLoad')
      }
    }
  }
</script>

<style scoped>
.detail-image-info{
  box-shadow: 0 -3px 3px rgba(100,100,100,0.1);
  padding: 10px 4px;
  font-size: 13px;
  border-bottom: 5px solid #f2f5f8;
}
.desc{
  font-size: 13px;
  padding: 4px 8px;
  position: relative;
}
.desc p{
  padding: 10px 0;
}
  .desc-leftborder{
    width: 20%;
    height: 2px;
    background-color: #666;
    position: absolute;
    left: 8px;
  }
  .desc-rightborder{
    width: 20%;
    height: 2px;
    background-color: #666;
    position: absolute;
    right: 8px;
  }
  .border-left{
    width: 4px;
    height: 4px;
    background-color: #000;
    position: absolute;
    top: -2px;
    left: 0;
  }
.border-right{
  width: 4px;
  height: 4px;
  background-color: #000;
  position: absolute;
  top: -2px;
  right: 0;
}
  .item-info img{
    width: 100%;
  }
</style>
