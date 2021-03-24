import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

import Table from './components/Table1.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/', component: Table
		}
	]
})