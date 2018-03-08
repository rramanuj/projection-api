// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Panel from '@/components/globals/Panel';
import Vue from 'vue';
import App from './App';
import router from './router';
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'; //stylesheet, this is the framework used to make our
//app look cool
import 'vuetify/dist/vuetify.min.css';
import store from '@/store/store'
Vue.config.productionTip = false;

Vue.component('panel', Panel);
Vue.use(Vuetify);

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //vue can now access store
  components: { App },
  template: '<App/>',
});
