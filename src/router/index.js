import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'

import mainContent from './../components/mainContent.vue'
import about from './../components/about'
import topNav from './../components/topNav'
import contact from './../components/contact'
import dataMining from './../components/dataMining'
import dataViz from './../components/dataViz'

import birthdayParadox from './../components/birthdayParadox'
import tab from './../components/tab'
import hw6 from "../components/dataVizComponents/hw6/hw6";
import hw5 from "../components/dataVizComponents/hw5/hw5";

Vue.component('birthdayParadox', birthdayParadox)
Vue.component('hw6', hw6);
Vue.component('hw6', hw5);
Vue.component('about', about)
Vue.component('mainContent', mainContent)
Vue.component('topNav', topNav)
Vue.component('contact', contact)
Vue.component('dataMining', dataMining)
Vue.component('dataViz', dataViz)

Vue.component('tab', tab)

Vue.config.productionTip = false

Vue.component('tab-Home', {
  template: '<div><mainContent></mainContent></div>'
})
Vue.component('tab-datamining', {
  template: '<div><dataMining></dataMining></div>'
})
Vue.component('tab-Data Visualization', {
  template: '<div><dataViz></dataViz></div>'
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
