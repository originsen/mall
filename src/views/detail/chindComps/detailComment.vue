<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="usertxt">
      <span class="user-left">用户评价</span>
      <span class="user-right">更多</span>
    </div>
    <div>
      <div class="user">
        <img class="user-img" :src="commentInfo.list[0].user.avatar" alt="">
        <span class="user-name">{{commentInfo.list[0].user.uname}}</span>
      </div>
      <div class="comment">
        {{commentInfo.list[0].content}}
      </div>
      <div class="comment-image" >
        <div class="comment-image-item" v-for="item in commentInfo.list[0].images"><div class="imgbox"><img :src="item" alt=""></div></div>
      </div>
      <div class="choice">
        <span class="choice-time">{{commentInfo.list[0].created | showDate}}</span>
        <span class="choice-style">{{commentInfo.list[0].style}}</span>
      </div>

    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "detailComment",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        //1.将时间戳转化为Date对象
        const date = new Date(value * 1000);
        //2.将Date进行个格式化
        return formatDate(date , 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .detail-comment{
    padding: 20px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .usertxt{
    height: 20px;
    font-size: 16px;
    color: #000;
  }
  .user-left{
    float: left;
  }
  .user-right{
    float: right;
  }
  .user{
    display: flex;
    align-items: center;
  }
  .user-img{
    width: 40px;
    border-radius: 50%;
  }
  .user-name{

  }
  .comment{
    line-height: 22px;
  }
  .comment-image{
    display: flex;
    flex-wrap: wrap;

  }
  .comment-image-item{
    width: 90px;
    height: 90px;
    padding: 10px 10px;
  }
  .imgbox{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  .comment-image img{
    width: 100%;
  }
  .choice{
    color: #aaa;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
  }
  .choice-time{
    padding-right: 10px;
  }
</style>
