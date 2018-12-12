import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import App from './app'
import Account from './account'

import Profit from './profit'
import ProfitCategory from './profitCategory'

import Expense from './expense'
import ExpenseCategory from './expenseCategory'

import PlannedPurchase from './plannedPurchase'


Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        app: App,
        account: Account,
        
        profit: Profit,
        profitCategory: ProfitCategory,
        
        expense: Expense,
        expenseCategory: ExpenseCategory,
        
        plannedPurchase: PlannedPurchase
    }
});

Vue.prototype.$store = store

export default store
