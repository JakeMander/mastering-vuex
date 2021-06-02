<template>
  <div class="notification-bar" :class="notificationTypeClass">
      <p> {{ notification.message }} </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            timeout: null
        }
    },

    //  On the component being mounted to the app, set a timer to run which triggers the removal of the
    //  notification from our state stack. 
    mounted() {
        this.timeout = setTimeout(() => this.remove(this.notification), 5000)
    },
    
    //  We need to make sure we're cleaning up the timer when the notification is closed. If we manually
    //  delete the notification, the timer will not clear and will result in a memory leak.
    beforeUnmount() {
        clearTimeout(this.timeout);        
    },

    props: {
        notification: {
            type: Object,
            required: true 
        }
    },
    computed: {
        notificationTypeClass() {
            //  Depending on the type - Evaluates to -text-error or -text-success. These are global styles.
            //  See App.Vue for CSS.
            return `-text-${this.notification.type}`
        }
    },
    methods: mapActions('notification', ['remove'])
}
</script>

<style scoped>
.notification-bar {
    margin: 1em 0 1em;

}

</style>