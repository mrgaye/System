/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

window.form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/users', component: require('./components/users.vue') .default},
    { path: '/profile', component: require('./components/profile.vue') .default},
  ]
import VueProgressBar from 'vue-progressbar'
  Vue.use(VueProgressBar, {
    color:'rgb(143, 255, 199)',
    failedColor:'red',
    height:'3px'
  });

  // ES6 Modules or TypeScript
import Swal from 'sweetalert2'
window.Swal = Swal;

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.toast = toast;

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
   });

Vue.filter('capitalize', function (value) {
 if (!value) return ''
  value = value.toString()
   return value.charAt(0).toUpperCase() + value.slice(1)
  });

  
Vue.filter('myDate',function(created){
  return moment(created).format("MMMM D YYYY");
 }); 

 window.Fire = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});