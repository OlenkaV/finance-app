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
            {comment: 'Заробітна плата', price: '1700', date: '30.11'},
            {comment: 'Заробітна плата', price: '2000', date: '23.11'},
            {comment: 'Стипендія', price: '1985', date: '17.11'},
            {comment: 'Заробітна плата', price: '800', date: '16.11'},
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
