<script>
    export default {
        name: 'ListRender',
        data() {
            return {
                arrayOfStrings: ['name 1', 'name 2', 'name 3'],
                arrayOfObjects: [
                    {
                        id: Math.floor(Math.random() * 100000000),
                        name: 'John Doe',
                        age: 28,
                    },
                    {
                        id: Math.floor(Math.random() * 100000000),
                        name: 'Jane Smith',
                        age: 32,
                    },
                    {
                        id: Math.floor(Math.random() * 100000000),
                        name: 'Alice Johnson',
                        age: 24,
                    },
                ],
                arrayOfArrays: [
                    ['Apple', 'Banana', 'Cherry'],
                    ['Dog', 'Cat', 'Elephant'],
                    ['Red', 'Green', 'Blue'],
                ],
            };
        },
        computed: {
            filteredArrayOfObjects() {
                return this.arrayOfObjects.filter((item) => item.age < 30);
            },
        },
    };
</script>

<template>
    <div class="container my-3">
        <h3>List Rendering</h3>

        <div class="row g-5">
            <!-- array of strings -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h4 class="card-title">Array of Strings</h4>

                        <ul>
                            <li v-for="(item, index) in arrayOfStrings" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- array of objects -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h4 class="card-title">Array of Objects</h4>

                        <ul>
                            <li v-for="(item, index) in arrayOfObjects" :key="index">
                                <span class="fw-bold">Name: {{ item.name }}</span>
                                <ul class="list-unstyled">
                                    <li>Age: {{ item.age }}</li>
                                    <li>ID: {{ item.id }}</li>
                                    <li>Index: {{ index }}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- array of objects (conditional) -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h4 class="card-title">Array of Objects (Conditional)</h4>
                        <p class="mb-0">Age &#8249; 30</p>

                        <ul>
                            <li v-for="(item, index) in filteredArrayOfObjects" :key="item.id">
                                <span class="fw-bold">Name: {{ item.name }}</span>
                                <ul class="list-unstyled">
                                    <li>Age: {{ item.age }}</li>
                                    <li>ID: {{ item.id }}</li>
                                    <li>Index: {{ index }}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- array of arrays -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h4 class="card-title">Array of Arrays</h4>

                        <ul class="list-unstyled">
                            <li v-for="(list, index) in arrayOfArrays" :key="index">
                                <span class="fw-bold">List {{ index + 1 }}</span>
                                <ul>
                                    <li v-for="(item, index) in list" :key="index">
                                        {{ item }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
