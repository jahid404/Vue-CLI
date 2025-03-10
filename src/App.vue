<script setup>
    import Navbarcomponent from './components/NavbarComponent.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Navbarcomponent brandName="DreamersDesire" class="shadow"/>
    <RouterView />
</template>
