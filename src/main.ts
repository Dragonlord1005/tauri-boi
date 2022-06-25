import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Game from './pages/Game.vue'
import Inventory from './pages/Inventory.vue'
import './index.css'

const routes = [
    { path: '/', name: 'Game', component: Game },
    { path: '/inventory', name: 'Inventory', component: Inventory },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

createApp(App)

.use(router)

.mount('#app')
