import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import utils from "../components/utils/utils";

// var backend_url
// if (window.location.hostname === 'nut-nut.ru'){
//   backend_url = 'https://nut-nut.ru/backend/'
// }else if(window.location.hostname === '192.168.1.52'){
//   backend_url = 'https://192.168.1.52/backend/'
// }else{
//   backend_url = 'http://192.168.1.52/backend/'
// }

var SCREEN_TYPES = {
  BIG:0,
  MEDIUM:1,
  SMALL:2,
}

var LANGUAGES = {
  RU:'ru',
  EN:'en',
}

export default new Vuex.Store({
  modules:{
  },
  state:{
    screen_width:0,
    SCREEN_TYPES:SCREEN_TYPES,
    screen_type:SCREEN_TYPES.BIG,

    LANGUAGES:LANGUAGES,
  },
  actions:{

  }
})
