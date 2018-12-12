const state = {
    
}

const mutations = {
    CHANGE(state, item) {
        
    }
}

const actions = {
    change({commit}, item) {
        commit('CHANGE', item);
    }
}


const getters = {
    
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
