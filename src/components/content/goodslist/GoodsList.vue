<template>
  <div class="goods-list">
    <GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>

  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default: []
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
