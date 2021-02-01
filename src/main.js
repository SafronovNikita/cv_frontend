// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router/router'
import store from './store/store'

Vue.use(Vuex)
Vue.use(Vuelidate)

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })

Vue.config.productionTip = false

var f = async () =>{

//~~~~~~~~~~~~~~~~~~~~~~~~~~create component~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var vm = new Vue({
    // el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })

  //~~~~~~~~~~~~~~~~~~~~~~~~~~load data~~~~~~~~~~~~~~~~~~~~~~~~~~~
  await store.dispatch('initial_login')

  store.dispatch('get_config')
  await store.dispatch('get_catalogue')

  //~~~~~~~~~~~~~~~~~~~~~~~~~~mount component~~~~~~~~~~~~~~~~~~~~~~~~~~~
  vm.$mount('#app')
}

f()



