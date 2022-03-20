import {
    createRouter,
    createWebHashHistory
} from "vue-router"
const swiper = () => import('../components/foodSwiper.vue')
const hotList = () => import('../components/foodHotlist.vue')
const category = () => import('../components/foodCategory.vue')
const map = () => import('../components/foodMap.vue')
const personality = () => import('../components/foodPerson.vue')
const login = () => import('../components/login.vue')
const mainFrame = ()=>import('../components/mainFrame.vue')

const routes = [
    {
        path:'/',
        redirect:'/home/swiper'
    },
    {
        path: '/home',
        component: mainFrame,
        children: [
            {
                path: '/home/swiper',
                component: swiper,
            },
            {
                path: '/home/hotList',
                component: hotList,
            },
            {
                path: '/home/category',
                component: category,
            },
            {
                path: '/home/map',
                component: map,
            },
            {
                path: '/home/personality',
                component: personality,
            },
        ]
    },
    {
        path: '/login',
        name:'login',
        component: login,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router