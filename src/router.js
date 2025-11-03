import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import Page1 from './components/page1.vue'
import Page2 from './components/page2.vue'
import Page3 from './components/page3.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router