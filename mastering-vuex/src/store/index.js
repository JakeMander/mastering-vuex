import { createStore } from 'vuex';
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notifications.js'

export default createStore({
  state: {
    categories: ['sustainability', 'education', 'food', 'community'],
  },
  modules: {
    user,
    event,
    notification
  }
});
