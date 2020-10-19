import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)
const routes = [{
		path: '/',
		redirect:'/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../view/home.vue')
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import('../view/cart.vue')
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('../view/user.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../view/login.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	routes
});


router.beforeEach((to, from, next) => {
	// console.log('to:', to)
	// console.log('from:', from)
	// if(from.path === '/login'){
	// 	if(localStorage.getItem("login")){
	// 		next()
	// 	}else{
	// 		next({name:'login'})
	// 	}
	// }else {
	// 	next()
	// }
	if (to.name !== 'login' && !localStorage.getItem("login")) {
		next({
			name: 'login'
		})
	} else {
		next()
	}

})


export default router
