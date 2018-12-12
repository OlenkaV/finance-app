const state = {
  profitByCategories: [],
  expensesByCategories: [],
  monthly: []
}

const mutations = {
    FETCH_PROFIT_BY_CATEGORIES(state, list) {
        state.profitByCategories = list
    },
    FETCH_EXPENSES_BY_CATEGORIES(state, list) {
        state.expensesByCategories = list
    },
    FETCH_MONTHLY(state, list) {
        state.monthly = list
    }
}

const actions = {
    fetchProfitByCategories({ commit })  {
        commit('FETCH_PROFIT_BY_CATEGORIES', [
            { title: 'Заробітна плата', amount: 5000 },
            { title: 'Стипендія', amount: 1800 }
        ]);
    },
    fetchExpensesByCategories({ commit })  {
        commit('FETCH_EXPENSES_BY_CATEGORIES', [
            { title: 'Харчування', amount: 10 },
            { title: 'Проїзд', amount: 76 },
            { title: 'Житло', amount: 60 },
            { title: 'Відпочинок', amount: 24 },
            { title: 'Розваги', amount: 40 }
        ]);
    },
    fetchMonthly({ commit })  {
        commit('FETCH_MONTHLY', [
            { month: 'Jul', expensesAmount: 35, profitAmount: 45 },
            { month: 'Aug', expensesAmount: 10, profitAmount: 80 },
            { month: 'Sep', expensesAmount: 76, profitAmount: 85 },
            { month: 'Oct', expensesAmount: 60, profitAmount: 70 },
            { month: 'Nov', expensesAmount: 24, profitAmount: 60 },
            { month: 'Dec', expensesAmount: 60, profitAmount: 55 }
        ]);
    }
}


const getters = {
    profitByCategories: (state) => {
        return state.profitByCategories
    },
    expensesByCategories: (state) => {
        return state.expensesByCategories
    },
    monthly: (state) => {
        return state.monthly
    }
}

const namespaced = true;


// export this module.
export default {
    namespaced,
    state,
    mutations,
    getters,
    actions
};
