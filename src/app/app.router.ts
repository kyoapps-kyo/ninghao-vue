import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/index.vue';
import About from './components/about.vue';
import postRoutes from '@/post/post.routes'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Index,
        name: 'home',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/about-us',
        // redirect: { name : 'about' }
        redirect: to => {
            console.log(to);
            return 'about';
        }
    },
    ...postRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
/**
 * 导航守卫 
 */
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth){
        console.log('©');
    }
    next();
    // console.log('©');
    // console.log('to : ', to);
    // console.log('from : ', from);
    // if(to.name === 'postIndex'){
    //     next('/');
    // } else {
    //     next();
    // }
});

export default router;