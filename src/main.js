import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import ZCheckbox from './components/ZCheckbox.vue';
import ZTextfield from './components/ZTextfield.vue';

Vue.config.productionTip = false;

Vue.component('z-checkbox', ZCheckbox);
Vue.component('z-textfield', ZTextfield);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
