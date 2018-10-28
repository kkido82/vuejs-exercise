import Vue from 'vue';
import Router from 'vue-router';
import configuration from '@/pages/configuration';
import layouts from "@/pages/layouts";

Vue.use(Router);

const routes = [
    {
        path: "/",
        redirect: { name: 'layouts' }
    },
    {
        path: "/layouts",
        component: layouts,
        name: "layouts"
    },
    {
        path: "/configuration",
        component: configuration,
        name: "configuration"
    }
];

export function createRouter() {
    return new Router({
      mode: 'history',
      base: '/',
      routes,
    });
  }
  