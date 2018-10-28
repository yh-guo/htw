<template>
  <div class="htw-layout-sidebar">
    <div class="logo">logo</div>
    <div class="menu">
      <ul></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
  .htw-layout-sidebar{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: $bar-height;
    color: $white;
    z-index: $base-zindex;
    background-color: $bg-light-color;
    .logo{
      width: $bar-height;
      height: $bar-height;
      background-color: $bg-dark-color;
      color: #fff;
    }
    .menu{
      width: 100%;
      padding-bottom: $bar-height;
    }
  }
</style>
