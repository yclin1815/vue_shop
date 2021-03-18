// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    const vm = this;
    axios.post(api,).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' },);
      }
    });
  } else {
    next();
  }
});
