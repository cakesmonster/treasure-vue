import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/photo',
        name: 'Photo',
        component: () => import('../views/PhotoAlbumPage.vue')
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import('../views/CardPage.vue')
    },
    {
        path: '/pie',
        name: 'Pie',
        component: () => import('../views/PieCard.vue')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
