<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
 .recommend {
   width: 100%;
   display: flex;
   font-size: 12px;
   text-align: center;
   padding: 10px 0 20px;
   border-bottom: 10px solid #eeeeee;
 }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
