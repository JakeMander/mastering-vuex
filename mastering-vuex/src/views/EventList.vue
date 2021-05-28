<template>
<div>
  <h1>Events Listing</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
  <router-link v-if="page != 1" :to="{name: 'EventList', query: {page: page - 1}}" rel="prev">Previous </router-link>
  <router-link v-if="isLastPage(page)" :to="{name: 'EventList', query: {page: page + 1}}" rel="next">Next </router-link>
</div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    ...mapState(['events']),
    ...mapGetters(['isLastPage']),
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
