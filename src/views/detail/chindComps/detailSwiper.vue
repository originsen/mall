<template>
  <Swiper class="detailSwiper">
    <SwiperItem v-for="item in topImages" class="detailSwiperItem">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "detailSwiper",
    props: {
      topImages: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detailSwiper{
    height: 220px;
    overflow: hidden;
  }
</style>
