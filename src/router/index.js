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
                            component: () => import('@/views/form/index.vue'),
                            meta: {
                                title: '表单构造器'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/review',
            name: 'review',
            component: () => import('@/views/review/index.vue'),
            meta: {
                title: '表单预览'
            }
        }
    ]
})

export default router
