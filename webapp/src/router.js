import VueRouter from 'vue-router';
import pageOne from "@/components/pageOne";
import HomePage from "@/components/HomePage";

export const routes = [
    {
        path: "/",
        component: HomePage,
        name: 'HomePage',
    },
    {
        path: "/page1",
        component: pageOne,
        name: 'pageOne',
    },
]

const router = new VueRouter({
    history: VueRouter.createWebHistory,
    base: process.env.BASE_URL,
    routes
})

export default router