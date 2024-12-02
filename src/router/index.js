import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/HomePage.vue';  // 确保路径正确

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/ProfilePage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
