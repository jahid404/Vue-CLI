<script setup>
    import { RouterView, RouterLink } from 'vue-router';
    import { routeList } from './router/routes';
    console.log("Base URL:", import.meta.env.BASE_URL);
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">MyVueApp</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="route in routeList" :key="route.name" class="nav-item">
                        <router-link
                            v-if="route.name"
                            class="nav-link"
                            :to="{ name: route.name }"
                        >
                            {{ route.routeName }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <RouterView />
</template>
