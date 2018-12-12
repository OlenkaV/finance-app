import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import App from './store/app'
import Account from './store/account'

import Profit from './store/profit'
import ProfitCategory from './store/profitCategory'

import Expense from './store/expense'
import ExpenseCategory from './store/expenseCategory'

import PlannedPurchase from './store/plannedPurchase'

import Statistic from './store/statistic'


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
        
        plannedPurchase: PlannedPurchase,
        
        statistic: Statistic
    }
});

Vue.prototype.$store = store

export default store
