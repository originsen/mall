<template>

  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
#tabbar{
  background-color: #f6f6f6;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

</style>
