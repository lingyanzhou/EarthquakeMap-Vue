import Vue from 'vue'
import Router from 'vue-router'
import SideBarLayout from '@/components/SideBarLayout'
import EarthquakeMapControl from '@/components/EarthquakeMapControl'
import EarthquakeMap from '@/components/EarthquakeMap'
import About from '@/components/About'
// import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SideBarLayout',
      component: SideBarLayout,
      props: {'sidebarcomp': EarthquakeMapControl,
        'contentcomp': EarthquakeMap,
        'xpropsSideBar': {},
        'xpropsContent': {'id': 'svgEarthquake'}
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
