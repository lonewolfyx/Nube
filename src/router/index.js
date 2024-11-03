import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'init',
            redirect: '/generate/form',
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: 'generate',
                    name: 'generate',
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
