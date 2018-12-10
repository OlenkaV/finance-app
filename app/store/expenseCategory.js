const state = {
  list: []
}

const mutations = {
    FETCH_ALL(state, list) {
        state.list = list
    },
    ADD(state, item) {
        state.list.unshift(item)
    }
}

const actions = {
    fetchAll({ commit })  {
        commit('FETCH_ALL', [
            {title: 'Харчування'},
            {title: 'Проїзд'},
            {title: 'Житло'},
            {title: 'Відпочинок'},
            {title: 'Розваги'},
            {title: 'Зв\'язок'},
            {title: 'Подарунки'},
            {title: 'Навчання'},
            {title: 'Спортзал'},
            {title: 'Медицина'},
        ]);
    },
    add({commit}, item) {

    }
}


const getters = {
    list: (state) => {
        return state.list
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
