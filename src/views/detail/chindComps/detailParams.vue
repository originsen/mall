<template>
  <div class="detail-params">
    <table class="tables" v-for="item in itemParams.tables">
      <tr v-for="tables in item">
        <td v-for="table in tables">{{table}}</td>
      </tr>
    </table>
    <table class="set">
      <tr v-for="set in itemParams.set">
        <td class="set-key">{{set.key}}</td>
        <td class="set-value">{{set.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "detailParams",
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;

  }
  .detail-params table{
    width: 100%;
    border-collapse: collapse;
  }
  .detail-params table tr {
    height: 42px;
  }
  .detail-params table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .set-key {
    width: 80px;
  }
  .set {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .set-value {
    color: #eb4868;
  }
</style>
