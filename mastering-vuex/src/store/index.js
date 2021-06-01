import { createStore } from 'vuex';
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'

export default createStore({
  state: {
    categories: ['sustainability', 'education', 'food', 'community'],
  },
  modules: {
    user,
    event
  }
});
