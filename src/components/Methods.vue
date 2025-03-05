<script>
    export default {
        name: 'MethodComponent',
        data() {
            return {};
        },
        methods: {
            randomNum() {
                return Math.floor(Math.random() * 100) + 1;
            },
        },
    };
</script>

<template>
    <div class="container my-3">
        <h3>Methods</h3>

        <p>{{ randomNum() }}</p>
    </div>
</template>
