import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
import Roles from "@/pages/roles/Roles.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', component: Dashboard},
    {path: '/roles', component: Roles},
    {path: '/:pathMatch(.*)*', component: NotFound},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;