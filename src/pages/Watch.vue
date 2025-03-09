<script>
    export default {
        name: 'WatchComponent',
        data() {
            return {
                default_watch: '',
                default_watch_text: '',

                immediate_watch: 'immediate',
                immediate_watch_text: '',

                deep_watch: {
                    content: '',
                },
                deep_watch_text: '',
            };
        },
        watch: {
            default_watch(newVal) {
                this.default_watch_text = newVal;
            },
            immediate_watch: {
                handler(newVal) {
                    this.immediate_watch_text = newVal;
                },
                immediate: true,
            },
            deep_watch: {
                handler(newVal) {
                    this.deep_watch_text = newVal.content;
                },
                deep: true,
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Watcher</h3>

        <div class="row">
            <div class="col-md-6 col-lg-4 my-2">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Default Watch</h4>
                        <p class="text-center">{{ default_watch_text }}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <input
                            v-model="default_watch"
                            type="text"
                            class="form-control"
                            placeholder="Write anything..."
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-2">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Immediate Watch</h4>
                        <p class="text-center">{{ immediate_watch_text }}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <input
                            v-model="immediate_watch"
                            type="text"
                            class="form-control"
                            placeholder="Write anything..."
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-2">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <h4 class="card-title text-center">Deep Watch (Nested)</h4>
                        <p class="text-center">{{ deep_watch_text }}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <input
                            v-model="deep_watch.content"
                            type="text"
                            class="form-control"
                            placeholder="Write anything..."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
