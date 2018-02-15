//this is the code how we hit different urls/

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Projects from '@/components/Projects';
import CreateProject from '@/components/CreateProject';
import ViewProject from '@/components/ViewProject';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
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
      path: '/project/:projectId',
      name: 'project',
      component: ViewProject,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
