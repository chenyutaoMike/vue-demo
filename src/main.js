import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import {
	Tabbar,
	TabbarItem,
	Form,
	Field,
	Button,
	Toast,
	Swipe,
	SwipeItem,
	Grid,
	GridItem,
	Skeleton,
	IndexBar,
	IndexAnchor,
	Cell
} from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Skeleton);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.config.productionTip = false
new Vue({
	render: h => h(App),
	router
}).$mount('#app')
