import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

import Table from './components/Table1.vue'
import Table2 from './components/Table2.vue'
import Table3 from './components/Table3.vue'
import Table4 from './components/Table4.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/', component: Table
		},
		{
			path: '/2', component: Table2
		},
		{
			path: '/3', component: Table3
		},
		{
			path: '/4', component: Table4
		}
	]
})