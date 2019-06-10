const state = {
    counter: 0
}

const getters = {
    doubleResult: state => {
        return state.counter;
    },
    stringCounter: state => {
        return state.counter + 'clicks';
    }
}

const mutations = {
    increment: (state, by) => {
        state.counter += by;
    },
    decrement: (state, by) => {
        state.counter -= by;
    }
}

const actions = {
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.time);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.time);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}