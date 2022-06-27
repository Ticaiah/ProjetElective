import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
// import vee-validate rule
import { required, email, min, max } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);

  
  // Install components globally
  Vue.component('ValidationObserver', ValidationObserver);
  Vue.component('ValidationProvider', ValidationProvider);
  