import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue';
import Profit from './pages/Profit/Form.vue';
import ProfitList from './pages/Profit/List.vue';

import Expense from './pages/Expense/Form.vue';
import ExpenseList from './pages/Expense/List.vue';

import PlannedPurchases from './pages/PlannedPurchases/Form.vue';
import PlannedPurchasesList from './pages/PlannedPurchases/List.vue';


Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {abBackgroundColor: '#3c8dbc', title: 'Home Accounts'}
        },
        {
            path: "/profit",
            name: "Profit",
            component: Profit,
            meta: {abBackgroundColor: '#53ba82', title: 'Add new Profit'}
        },
        {
            path: "/profit/list",
            name: "ProfitList",
            component: ProfitList,
            meta: {abBackgroundColor: '#53ba82', addRoutName: 'Profit', title: 'Profit List'}
        },
        {
            path: "/expense",
            name: "Expense",
            component: Expense,
            meta: {abBackgroundColor: '#f30', title: 'Add new Expense'}
        },
        {
            path: "/expense/list",
            name: "ExpenseList",
            component: ExpenseList,
            meta: {abBackgroundColor: '#f30', addRoutName: 'Expense', title: 'Expense List'}
        },
        {
            path: "/planned-purchases",
            name: "PlannedPurchases",
            component: PlannedPurchases,
            meta: {abBackgroundColor: '#53ba82', title: 'Add new Planned Purchase'}
        },
        {
            path: "/planned-purchases/list",
            name: "PlannedPurchasesList",
            component: PlannedPurchasesList,
            meta: {abBackgroundColor: '#53ba82', addRoutName: 'PlannedPurchases', title: 'Planned Purchases'}
        },
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        }
    ]
})