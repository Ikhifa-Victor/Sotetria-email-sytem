import { createRouter, createWebHistory } from "vue-router";
import Subscribers from "../views/Subscribers.vue";
import Broadcast from "../views/Broadcast.vue";
import Sequence from "../views/Sequence.vue";
// import Templates from "../views/Templates.vue";
// import Forms from "../views/Forms.vue";
import SecondSequence from "../views/SecondSequence.vue";
import MailEditor from "../views/MailEditor.vue";
import PublishMail from "../views/PublishMail.vue";

const routes = [
  {
    path: "/",
    redirect: "/subscribers",
  },
  {
    path: "/subscribers",
    name: "Subscribers",
    component: Subscribers,
  },
  {
    path: "/broadcast",
    name: "Broadcast",
    component: Broadcast,
  },
  {
    path: "/sequence",
    name: "Sequence",
    component: Sequence,
  },
  {
    path: "/secondsequence",
    name: "SecondSequence",
    component: SecondSequence,
  },
  {
    path: "/maileditor",
    name: "MailEditor",
    component: MailEditor,
  },
  {
    path: "/publishmail",
    name: "PublishMail",
    component: PublishMail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
