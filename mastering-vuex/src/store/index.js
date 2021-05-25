import { createStore } from "vuex";

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Jake Mander' },
    categories: ['sustainability', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: 'Clean The Dishes', done: false },
      { id: 2, text: 'Walk The Pooch', done: false },
      { id: 3, text: 'Study Time', done: true },
      { id: 4, text: 'Empty The Bins', done: false }
    ],
    events: [
      { id: 1, title: 'Beach Clean Up', organiser: 'David Hasslehof'},
      { id: 2, title: 'Cat Adoption', organiser: 'The Crazy Cat Lady'},
      { id: 3, title: 'Charity Fun Run', organiser: 'Bobby Big Stride'},
      { id: 4, title: 'Chairty Bingo', organiser: 'Dorris Eiezdown'}
    ]
  },
  mutations: {},
  actions: {},
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
      return state.events.find(event => event.id === id);
    }
  },
  modules: {},
});
