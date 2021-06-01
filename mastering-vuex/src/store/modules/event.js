import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  event: {},
  events: [],
  totalEventsInDatabase: null,
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
  SET_TOTAL_EVENTS(state, totalEvents) {
    state.totalEventsInDatabase = totalEvents;
  },
};

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit("ADD_EVENT", event);
      dispatch('moduleName/actionToCall', payload, { root : true })
    });
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((response) => {
        commit("SET_EVENTS", response.data);
        console.log(response.data);
        commit("SET_TOTAL_EVENTS", response.headers["x-total-count"]);
      })
      .catch((error) => {
        console.error(error.response);
      });
  },

  fetchEvent({ commit, getters }, eventID) {
    console.log(`ID: ${eventID}`);
    var event = getters.getEventByID(eventID);
    if (event) {
      commit("SET_EVENT", event);
      console.log("No API Call!");
    } else {
      EventService.getEvent(eventID)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((error) => {
          console.log("There was an error getting the event", error.response);
        });
    }
  },
};

export const getters = {
  getEventByID: (state) => (id) => {
    var result = state.events.find((event) => event.id === id);
    return result;
  },
  isLastPage: (state) => (pageNumber) => {
    let result = state.totalEventsInDatabase > pageNumber * 3;
    return result;
  },
};
