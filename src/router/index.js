import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'

import mainContent from '../components/Home/mainContent.vue'
import about from '../components/Home/about'
import topNav from '../components/topNav'
import contact from '../components/contact'
import dataViz from '../components/dataViz/dataViz'
import games from '../components/Games/games'

import tab from './../components/tab'
import hw6 from "../components/dataViz/hw6/hw6";
import hw5 from "../components/dataViz/hw5/hw5";
import minesweeper from '../components/Games/minesweeper';

Vue.component('minesweeper', minesweeper);
Vue.component('hw6', hw6);
Vue.component('hw6', hw5);
Vue.component('about', about);
Vue.component('mainContent', mainContent);
Vue.component('topNav', topNav);
Vue.component('contact', contact);
Vue.component('dataViz', dataViz);
Vue.component('Games', games);

Vue.component('tab', tab);

Vue.config.productionTip = false;

Vue.component('tab-Home', {
  template: '<div><mainContent></mainContent></div>'
});

Vue.component('tab-Data Visualization', {
  template: '<div><dataViz></dataViz></div>'
});
Vue.component('tab-Games', {
  template: '<div><games></games></div>'
});



import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
