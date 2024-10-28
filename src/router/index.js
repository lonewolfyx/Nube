import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            redirect: '/index',
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('@/views/index.vue')
                }
            ]
        }
    ]
})

export default router
