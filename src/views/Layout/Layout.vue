<template>
  <div v-on:click="closeMenuAll">
    <topbar />
    <sidebar />
    <app-main />
  </div>
</template>

<script>

import { Topbar, Sidebar, AppMain } from './components'
import { mapMutations } from 'vuex'

export default {
  name: 'Layout',
  components: { Topbar, Sidebar, AppMain },
  methods: {
    ...mapMutations('sidebar', ['closeMenuAll'])
  }
}
</script>
