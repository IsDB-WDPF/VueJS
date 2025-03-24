import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', compoment: Dashboard},
    {path: '/:pathMatch(.*)*', compoment: NotFound},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;