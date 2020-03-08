<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Scroll class="scroll" ref="scroll" @scroll="topClick" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <HomeFeatureView></HomeFeatureView>
      <TabControl class="tab-control"
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick">
      </TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from  'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goodslist/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getHomeMultidata,getGoodsList} from 'network/home'

  export default {
    name: "Home",
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: { page: 0 , list: [] }, //流行
          new: { page: 0 , list: [] },  //新款
          sell: { page: 0 , list: [] },  //精选
        },
        currentType: 'pop',
        isShow: false
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      //1.获取接口的多个数据
     this.getHomeMultidata();

      //2.获取商品列表数据
     this.getGoodsList('pop');
     this.getGoodsList('new');
     this.getGoodsList('sell');
    },
    methods: {
      /* 事件监听相关的方法 */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,300)
      },
      topClick(position) {
        this.isShow = -position.y > 1000
      },
      loadMore() {
        this.getGoodsList(this.currentType);
        this.$refs.scroll.finishPullUp()
      },
      
      /* 网络请求相关方法 */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getGoodsList(type) {
        const page = this.goods[type].page + 1;
        getGoodsList(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    padding-top: 44px;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }


  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
