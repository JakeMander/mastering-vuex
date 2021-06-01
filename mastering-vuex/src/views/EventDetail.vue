<template>
<div v-if="event">
    <h1>{{ event.title }}</h1>
    <h2> {{ event.time }} on {{ event.date }} @ {{ event.location }}</h2>
    <p>{{ event.description }}</p>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: ['id'],
    created() {
        console.log(this);
        console.log("METHODS");
        this.fetchEvent(this.id);
    },
    
    methods: {
        ...mapActions('event',['fetchEvent'])
    },

    computed: {
        ...mapState({
            event: state => state.event.event
        })
    }
}
</script>