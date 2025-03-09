<script>
    import { RouterLink } from 'vue-router';
    import { routeList } from '@/router/routes';

    export default {
        name: 'NavbarComponent',
        data() {
            return {
                routes: routeList,
            };
        },
        components: {
            RouterLink,
        },
    };
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
                    <li v-for="route in routes" :key="route.name" class="nav-item">
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
</template>
