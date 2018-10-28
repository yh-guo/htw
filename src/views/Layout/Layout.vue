<template>
  <div>
    <topbar />
    <sidebar />
    <app-main />
  </div>
</template>

<script>
// import { Header, Sidebar, AppMain } from './components'
import { Topbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: { Topbar, Sidebar, AppMain }
}
</script>
