<script>
    export default {
        name: 'EventHandling',
        data() {
            return {
                initial_items: 0,
            };
        },
        methods: {
            alert() {
                alert("You've clicked the button");
            },
            handleCart(type) {
                if (type) {
                    this.initial_items++;
                } else {
                    if (this.initial_items > 0) {
                        this.initial_items--;
                    }
                }
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Event Handling</h3>

        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Alert</h4>
                        <button class="btn btn-primary btn-sm" @click="alert">
                            Click Me
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">{{ initial_items }}</h4>
                        <button
                            class="btn btn-danger btn-sm mx-1"
                            @click="handleCart(false)"
                        >
                            Decrement -
                        </button>
                        <button
                            class="btn btn-success btn-sm mx-1"
                            @click="handleCart(true)"
                        >
                            Increment +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
