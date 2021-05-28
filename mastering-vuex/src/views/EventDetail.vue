<template>
<div v-if="event">
    <h1>{{ event.title }}</h1>
    <h2> {{ event.time }} on {{ event.date }} @ {{ event.location }}</h2>
    <p>{{ event.description }}</p>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: ['id'],
    created() {
        this.$store.dispatch('fetchEvent', parseInt(this.id));
    },
    
    computed: {
        ...mapState(['event']),
    }
}
</script>