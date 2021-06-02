export const namespaced = true;

export const state = {
    notifications: []
}

let nextId = 1;
export const mutations = {
    PUSH(state, notification) {
        state.notifications.push({
            ...notification,
            id: nextId++
        })
        console.log("WHOOPS");
        console.log(state.notifications)
    },
    DELETE(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            notification => notification.id != notificationToRemove.id);
    }
}

export const actions = {
    add({ commit }, notification) {
        commit("PUSH", notification);
    },

    remove({ commit }, notificationToRemove) {
        commit("DELETE", notificationToRemove);
    }
}