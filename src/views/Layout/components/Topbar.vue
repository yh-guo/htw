<template>
  <div class="htw-layout-header clearfix">
    <div class="content">content</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.htw-layout-header {
  position: fixed;
  top: 0;
  left: $bar-height;
  right: 0;
  height: 51px;
  font-size: $font-size-medium;
  background-color: $white;
  z-index: $base-zindex;
  border-bottom: 1px solid $bar-border;
  .content{
    width: 100%;
    height: $bar-height;
  }
}
</style>
