<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        }
      }
    },
    mounted() {
      // 1.创建 BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad

      })
      // 2.监听滚动的位置
      this.scroll.on('scroll' , (position) => {
        this.$emit('scroll' , position)
      })
      // 3.监听scroll滚动到底部
      if(this.pullUpLoad) this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },

    methods: {
      scrollTo(x , y , time) {
        this.scroll && this.scroll.scrollTo(x , y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
