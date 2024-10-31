import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            redirect: '/build/form',
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: 'build',
                    name: 'build',
                    children: [
                        {
                            path: 'form',
                            name: 'form',
                            component: () => import('@/views/form/index.vue')
                        }
                    ]
                }
            ]
        }
    ]
})

export default router
