import Vue from 'nativescript-vue'
import App from './components/App'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'


new Vue({
    pageRouting: true,
    router,
    store,
    i18n,
    render: h => h('frame', [h(App)])
}).$start()
