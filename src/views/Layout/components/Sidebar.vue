<template>
  <div class="htw-layout-sidebar" v-bind:class="{ open: (opened || openedAll) }" @click.stop>
    <div class="menu-all" v-bind:class="{ open: openedAll }"></div>
    <div class="logo">logo</div>
    <div class="menu" @mouseenter="openMenu" @mouseleave="closeMenu">
      <div class="menu-all-btn" @click="toggleMenuAll">
        <i class="iconfont icon-classify"></i>
        <span>菜单列表</span>
      </div>
      <ul>
        <li><i class="iconfont icon-unselected"></i><router-link to="/index">首页</router-link></li>
        <li><i class="iconfont icon-selected"></i><router-link to="/table/list">列表</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import http from '@/request/index'

export default {
  name: 'Sidebar',
  methods: {
    ...mapMutations('sidebar', ['openMenu', 'closeMenu', 'toggleMenuAll'])
  },
  computed: {
    ...mapState('sidebar', ['opened', 'openedAll'])
  },
  mounted: function () {
    http({
      action: 'systemMenuService.getAllMenu'
    }).then(result => {

    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.htw-layout-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: $bar-height;
  color: $white;
  z-index: $base-zindex;
  background-color: $bg-light-color;
  -webkit-transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  &.open {
    width: 210px;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  .logo {
    width: 100%;
    height: $bar-height;
    background-color: $bg-dark-color;
    color: #fff;
  }
  .menu {
    position: absolute;
    top: $bar-height;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    ul {
      width: calc(100% + 20px);
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0;
    }
    li, .menu-all-btn {
      width: 210px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      overflow: hidden;
      color: $white;
      &:hover {
        background-color: $bg-dark-color;
        // color: $main-color;
      }
      i {
        display: block;
        float: left;
        width: $bar-height;
        height: 40px;
        font-size: 20px;
        text-align: center;
      }
      span, a {
        display: block;
        margin-left: $bar-height;
      }
    }
    .menu-all-btn:hover {
      background-color: $main-color;
      color: $white;
    }
  }
  .menu-all {
    position: absolute;
    top: 0;
    left: -890px;
    bottom: 0;
    width: 890px;
    background-color: $bg-light-color;
    opacity: 0.9;
    -webkit-transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    z-index: -1;
    &.open {
      left: 210px;
    }
  }
}
</style>
