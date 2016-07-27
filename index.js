// src/index.js
import Vue from 'Vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAsyncData);

Vue.http.headers.common['apikey'] = '5528ee953b1cf4dac7819af62acb701d';

const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})

router.map({
	'/home': {
		name:'home',
		component: require('./components/Home.vue')
	},
	'/list': {
		name:'list',
		component: require('./components/List.vue'),
		subRoutes: {
			'/classbyid/:id/:name': {
				name:'classbyid',
				component: require('./components/ListById.vue')
			},
		}
	},
	'/about': {
		name:'about',
		component: require('./components/About.vue')
	}
})

router.redirect({
    '*': '/home'
})

router.start(App, '#app')