<script lang="ts">
import { createDir, BaseDirectory } from '@tauri-apps/api/fs'
// We need to create a default export for App which runs   await createDir('users', { dir: BaseDirectory.App, recursive: true });
export default {
    async mounted() {
        await createDir('users', { dir: BaseDirectory.App, recursive: true })
    },
}
</script>

<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <br /> -->

    <!-- Sidebar it will have three different items. 1. Game. 2. Inventory. 3. Settings. -->
    <div
        class="sidebar"
        className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
    >
        <nav>
            <ul>
                <li>
                    <router-link to="/">Game</router-link>
                </li>
                <li>
                    <router-link to="/inventory">Inventory</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <router-view></router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
