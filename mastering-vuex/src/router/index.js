import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetail from "@/views/EventDetail.vue";
import EventCreate from "@/views/EventCreate.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    props: true,
    component: EventDetail,
  },
  {
    path: '/event-create',
    name: 'EventCreate',
    component: EventCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
