<template>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div class="nav" v-for="(item,index) in detailNav" @click="navClick(index)" :class="{navcenter:index === currentIndex}">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNavBar",
    data() {
      return {
        detailNav: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      navClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .left{
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .left img{
  }
  .center{
    display: flex;
    font-size: 14px;
  }
  .nav{
    flex: 1;
  }
  .navcenter{
    color: var(--color-tint);
  }
</style>
