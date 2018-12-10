import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue';
import Profit from '../pages/Profit/Form.vue';
import ProfitList from '../pages/Profit/List.vue';

import Expense from '../pages/Expense/Form.vue';
import ExpenseList from '../pages/Expense/List.vue';

import PlannedPurchases from '../pages/PlannedPurchases/Form.vue';
import PlannedPurchasesList from '../pages/PlannedPurchases/List.vue';


Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: "/profit",
            name: "Profit",
            component: Profit
        },
        {
            path: "/profit/list",
            name: "ProfitList",
            component: ProfitList
        },
        {
            path: "/expense",
            name: "Expense",
            component: Expense
        },
        {
            path: "/expense/list",
            name: "ExpenseList",
            component: ExpenseList
        },
        {
            path: "/planned-purchases",
            name: "PlannedPurchases",
            component: PlannedPurchases
        },
        {
            path: "/planned-purchases/list",
            name: "PlannedPurchasesList",
            component: PlannedPurchasesList
        },
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        }
    ]
})