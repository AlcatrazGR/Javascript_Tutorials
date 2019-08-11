import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Alerts from './views/Alerts.vue'
import Transitions from './views/Transitions.vue'
import Badges from './views/Badges.vue'

Vue.use(Router)

export default new Router({
	routes: [
	 	{
	 	  	path: '/',
	 	  	name: 'home',
	 	  	component: Home
	 	},
	 	{
	 	  	path: '/alerts',
	 	  	name: 'alerts',
	 	  	component: Alerts
	 	},
	 	{
	 	  	path: '/transitions',
	 	  	name: 'transitions',
	 	  	component: Transitions
	 	},
	 	{
	 	  	path: '/badges',
	 	  	name: 'badges',
	 	  	component: Badges
	 	}
	]
})
