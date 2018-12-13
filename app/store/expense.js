const state = {
  list: []
}

const mutations = {
    FETCH_ALL(state, list) {
        if(state.list.length == 0) {
            state.list = list
        }
    },
    ADD(state, item) {
        state.list.unshift(item)
    }
}

const actions = {
    fetchAll({ commit })  {
        commit('FETCH_ALL', [
            {comment: 'Вечеря в кафе', price: '220', date: '29.11'},
            {comment: 'Ліки', price: '75.90', date: '29.11'},
            {comment: 'Чай', price: '160', date: '29.11'},
            {comment: 'Друк', price: '28', date: '21.11'},
            {comment: 'Обід', price: '80', date: '21.11'},
            {comment: 'Туш', price: '180', date: '18.11'},
            {comment: 'Йогурт', price: '36,20', date: '18.11'},
            {comment: 'Хліб', price: '11', date: '8.11'},
            {comment: 'Смаколики', price: '36.50', date: '3.11'},
        ]);
    },
    add({commit}, item) {
        commit('ADD', item);
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
