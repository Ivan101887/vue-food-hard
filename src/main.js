import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@/assets/scss/normalize.scss';
import '@/assets/scss/reset.scss';
import '@/assets/scss/helper.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faList, faAlignJustify, faTableCellsLarge, faBorderAll,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faList, faAlignJustify, faTableCellsLarge, faBorderAll);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
