import Vue from 'nativescript-vue';

const state = {
    locale: 'uk'
}

const mutations = {
    CHANGE_LOCALE(state, item) {
        state.locale = item
    }
}

const actions = {
    changeLocale({commit}, item) {
        commit('CHANGE_LOCALE', item);
    }
}


const getters = {
    locale: (state) => {
        return state.locale
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
