import { createRouter, createWebHistory } from 'vue-router';
import RegisterPageView from '../views/RegisterPageView.vue';
import LoginPageView from '../views/LoginPageView.vue';
import TaskPageView from '../views/TaskPageView.vue';
import CompleteTaskPageView from '../views/CompleteTaskPageView.vue';
import NotCompleteTaskPageView from '../views/NotCompleteTaskPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterPageView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPageView,
    },
    {
      path: '/:email',
      name: 'task',
      component: TaskPageView,
    },
    {
      path: '/:email/complete',
      name: 'complete',
      component: CompleteTaskPageView,
    },
    {
      path: '/:email/notcomplete',
      name: 'notcomplete',
      component: NotCompleteTaskPageView,
    }
  ]
});


export default router;
