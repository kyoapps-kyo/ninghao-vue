import PostIndex from './index/post-index.vue';
import { RouteRecordRaw } from 'vue-router';
import PostShow from './show/post-show.vue';
import PostMeta from './show/components/post-meta.vue'

const routes: Array<RouteRecordRaw> =[
    {
        path: '/posts',
        component: PostIndex,
        name: 'postIndex',
        props: {
            sort: 'popular',
        },
    },
    {
        path: '/posts/:postId',
        name: 'postShow',
        component: PostShow,
        props: true,
        children: [
            {
                path: 'meta',
                component: PostMeta,
            }
        ],
    },
];

export default routes;