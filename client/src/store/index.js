import { createStore } from 'vuex'

export default createStore({
  state: {
    missionCommanders: [],
    missionCommander: {},
  },
  getters: {
  },
  mutations: {
    setMissionCommanders(state, missionCommanders) {
      state.missionCommanders = missionCommanders;
    },
    setMissionCommander(state, missionCommander) {
      state.missionCommander = missionCommander;
    }
  },
  actions: {
    getMissionsCommanders: async function({ commit }) {
      const data = await fetch('http://localhost:3000/mission-commanders');
      const missionCommanders = await data.json();
      commit('setMissionCommanders', missionCommanders);
    },
    getMissionCommander: async function({ commit }, id) {
      const data = await fetch(`http://localhost:3000/mission-commanders/${id}`);
      const missionCommander = await data.json();
      commit('setMissionCommander', missionCommander);
    },
    updatedMissionCommander: async function(_,mc) {
      console.log(mc);
      await fetch(`http://localhost:3000/mission-commanders/${mc.id}`, {
        method: 'PUT',
        body: JSON.stringify(mc),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('updated');
      } ).catch(() => {
        console.log('error');
      });
    },
    createMissionCommander: async function(_,mc) {
      await fetch('http://localhost:3000/mission-commanders', {
        method: 'POST',
        body: JSON.stringify(mc),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('created');
      }
      ).catch(() => {
        console.log('error');
      });
    }
  },
  modules: {
  }
})
