import Vue from 'nativescript-vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n);

import en from './i18n/en';
import uk from './i18n/uk';

const messages = {
  en: en,
  uk: uk,
}


const i18n = new VueI18n({
  locale: 'uk',
  messages,
})

export default i18n;
