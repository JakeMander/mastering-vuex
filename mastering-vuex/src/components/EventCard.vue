<template>
  <router-link class="event-link" :to="{name : 'EventDetail', params: {id: event.id} }">
    <div class="event-card">
      <span>@{{ event.time }} on {{ formattedEventDate }} </span>
      <h1>{{ event.title }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedEventDate() {
      let date = new Date(this.event.date);
      return date.toDateString();
    }
  }
};
</script>

<style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .event-link {
  color: #2c3e50;
  text-decoration: none;
  }
</style>
