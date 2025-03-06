<script setup>
    import { RouterView, RouterLink } from 'vue-router';
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
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'list' }"
                            >List</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'methods' }"
                            >Methods</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'events' }"
                            >Events</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'form' }"
                            >Form</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'cart' }"
                            >Cart</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <RouterView />
</template>
