import Vue from 'nativescript-vue'
import App from './components/App'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox)

import router from '@/router/index'
import store from '@/store/index'


new Vue({
    pageRouting: true,
    router,
    store,
    render: h => h('frame', [h(App)])
}).$start()