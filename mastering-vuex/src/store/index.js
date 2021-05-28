import { createStore } from 'vuex';
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Jake Mander' },
    categories: ['sustainability', 'education', 'food', 'community'],
    event: {},
    events:  [],
    totalEventsInDatabase: null
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event) ; 
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      console.log("SET");
      state.event = event;
      console.log(typeof(event.id));
    },
    SET_TOTAL_EVENTS(state, totalEvents) {
      state.totalEventsInDatabase = totalEvents;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT');
      });
    },
    fetchEvents({ commit }, {perPage, page}) {
      EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data);
        console.log(response.data);
        commit('SET_TOTAL_EVENTS', response.headers['x-total-count']);
      })
      .catch(error => {
        console.error(error.response);
      })
    },
    
    fetchEvent({ commit, getters }, eventID ) {
      console.log("FETCH)")
      console.log(typeof(eventID));
      var event = getters.getEventByID(eventID);
      if(event) {
        commit('SET_EVENT', event);
        console.log("No API Call!");
      } 
      
      else {
        EventService.getEvent(eventID)
        .then(response => {
          console.log(response.data)
          commit('SET_EVENT', response.data);
        })
        .catch(error => {
          console.log('There was an error getting the event', error.response);
        })
      }
    }
  },
  getters: {
    categoriesLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodoCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length;
    },

    getEventByID: state => id => {
      var result = state.events.find(event => event.id === id);
      return result;
    },
    isLastPage: state => pageNumber => {
      let result = state.totalEventsInDatabase > pageNumber * 3;
      return result;
    }
  },
  modules: {},
});
