<script>
    export default {
        name: 'WatchComponent',
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
                        <p class="text-center">View in console</p>
                        <input
                            v-model="watch_text"
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
