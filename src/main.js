import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';

import ZCheckbox from './components/ZCheckbox.vue';
import ZTextfield from './components/ZTextfield.vue';
import ZButton from './components/ZButton.vue';

Vue.config.productionTip = false;

Vue.component('z-checkbox', ZCheckbox);
Vue.component('z-textfield', ZTextfield);
Vue.component('z-button', ZButton);

let app = null;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
