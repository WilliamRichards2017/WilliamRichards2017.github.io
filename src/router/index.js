import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'

import mainContent from './../components/mainContent.vue'
import about from './../components/about'
import topNav from './../components/topNav'
import contact from './../components/contact'
import dataMining from './../components/dataMining'
import birthdayParadox from './../components/birthdayParadox'
import tab from './../components/tab'


Vue.component('birthdayParadox', birthdayParadox)
Vue.component('about', about)
Vue.component('mainContent', mainContent)
Vue.component('topNav', topNav)
Vue.component('contact', contact)
Vue.component('dataMining', dataMining)
Vue.component('tab', tab)

Vue.config.productionTip = false

Vue.component('tab-home', {
  template: '<div><mainContent></mainContent></div>'
})
Vue.component('tab-datamining', {
  template: '<div><dataMining></dataMining></div>'
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
