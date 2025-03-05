<script>
    export default {
        name: 'EventHandling',
        data() {
            return {
                initial_items: 0,
                mouse_over_text: 'Mouse over on me!',
                x_pos: 0,
                y_pos: 0,
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
            mouseOver(is_enter = false) {
                if (is_enter) {
                    this.mouse_over_text = 'Hey! Did you just hover on me?';
                } else {
                    this.mouse_over_text = 'Ohh! You left me!';
                }
            },
            cursorPosition(event) {
                this.x_pos = event.clientX + 'px';
                this.y_pos = event.clientY + 'px';
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Event Handling</h3>

        <div class="row">
            <div class="col-md-6 col-lg-4 my-2">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Alert</h4>
                        <button class="btn btn-primary btn-sm" @click="alert">
                            Click Me
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-2">
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

            <div class="col-md-6 col-lg-4 my-2">
                <div
                    class="card h-100"
                    @mouseenter="mouseOver(true)"
                    @mouseleave="mouseOver(false)"
                >
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Mouse Over</h4>
                        <p class="text-center">{{ mouse_over_text }}</p>
                    </div>
                </div>
            </div>

            <div class="col-12 my-2">
                <div class="card">
                    <div class="card-header bg-white">
                        <h4 class="card-title text-center">Cursor Position</h4>
                        <p class="text-center">({{ x_pos + ', ' + y_pos }})</p>
                    </div>
                    <div
                        class="card-body bg-secondary-subtle"
                        style="height: 300px"
                        @mousemove="cursorPosition($event)"
                        @mouseleave="(x_pos = 0), (y_pos = 0)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
