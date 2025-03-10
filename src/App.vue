<script setup>
    import Navbarcomponent from './components/NavbarComponent.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Navbarcomponent :brandName="VueCLI"/>
    <RouterView />
</template>
