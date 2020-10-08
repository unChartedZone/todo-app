import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import { required, email, alpha } from 'vee-validate/dist/rules';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';

import ZCheckbox from './components/ZCheckbox.vue';
import ZTextfield from './components/ZTextfield.vue';
import ZButton from './components/ZButton.vue';

Vue.config.productionTip = false;

extend('email', email);
extend('required', required);
extend('alpha', alpha);

localize('en', en);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

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
