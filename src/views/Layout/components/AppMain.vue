<template>
  <div class="htw-layout-main">
    <div class="sub-menu">
      <div class="title">title</div>
      <div class="list"></div>
      <div class="navbar-collapse">
        <div class="navbar-collapse-inner"></div>
      </div>
    </div>
    <div class="main">main</div>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.htw-layout-main {
  position: fixed;
  top: $bar-height;
  left: $bar-height;
  right: 0;
  bottom: 0;
  min-width: $main-min-width;
  z-index: $main-zindex;
  .sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    float: left;
    width: 160px;
    background-color: $white;
    .title {
      width: 100%;
      height: 51px;
      border-bottom: 1px solid $bar-border;
      line-height: 50px;
      padding-left: 20px;
      font-size: $font-size-medium;
    }
    .navbar-collapse{
      position: absolute;
      top: 50%;
      right: 0;
      width: 20px;
      height: 50px;
      margin-top: -25px;
      overflow: hidden;
    }
    .navbar-collapse-inner{
      width: 20px;
      height: 50px;
      margin-right: -7px;
    }
  }
  .main {
    width: auto;
    margin-left: 160px;
  }
}
</style>
