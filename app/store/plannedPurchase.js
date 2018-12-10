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
            {title: 'Ноутбук', price: 16000, done: false},
            {title: 'Новий гаманець', price: 400, done: false},
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
