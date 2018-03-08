// this is the code how we hit different urls/

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Projects from '@/components/Projects/Index';
import CreateProject from '@/components/Projects/CreateProject';
import ViewProject from '@/components/Projects/ViewProject';
import AddCard from '@/components/Cards/AddCard';
import ViewCard from '@/components/Cards/ViewCard';
import AddComment from '@/components/Cards/AddComment';
import AddMember from '@/components/Projects/Team/AddMember';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/users',
      name: 'users',
      component: AddMember,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Projects,
    },
    {
      path: '/newProject',
      name: 'new-project',
      component: CreateProject,
    },
    {
      path: '/addMember/:projectId',
      name: 'add-member',
      component: AddMember,
    },
    {
      path: '/viewCard',
      name: 'view-card',
      component: ViewCard,
    },
    {
      path: '/addCard/:projectId',
      name: 'add-card',
      component: AddCard,
    },
    {
      path: '/card/:cardId:projectId',
      name: 'card',
      component: ViewCard,
    },
    {
      path: '/addComment/:cardId:projectId',
      name: 'add-comment',
      component: AddComment,
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: ViewProject,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/*',
      redirect: 'home'
    },
  ],
});
