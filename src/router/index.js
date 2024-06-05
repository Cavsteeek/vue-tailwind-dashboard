import { createRouter, createWebHistory } from "vue-router";
import dashboardPage from '../pages/master/dashboardPage.vue'
import UserHome from '../pages/UserHome.vue'
import UserProfile from '../pages/UserProfile.vue'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: dashboardPage

    },

    {
        path: "/home",
        name: "home",
        component: UserHome
    },

    {
        path: "/profile",
        name: "profile",
        component: UserProfile
    }
];

const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}