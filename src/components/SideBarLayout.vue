<template>
  <div class="d-flex flow-row">
    <div class="p-3">
      <component :is="sidebarcomp" :xprops='xpropsSideBar'></component>
    </div>
    <div class="p-9">
      <component :is="contentcomp" :xprops='xpropsContent'></component>
    </div>
  </div>
</template>

<script>
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'SideBarLayout',
  props: ['sidebarcomp', 'contentcomp', 'xpropsSideBar', 'xpropsContent']
}
</script>

<style>
</style>
