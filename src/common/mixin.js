import {debounce} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    //监听商品列表的图片加载完成，并重新计算scrollerHeight
    this.newRefresh = debounce(this.$refs.scroll.refresh , 200);

    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)

  }
}
