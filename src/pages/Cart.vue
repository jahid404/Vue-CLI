<script>
    export default {
        name: 'CartComponent',
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Wireless Headphones',
                        price: 59.99,
                        quantity: 2,
                        total: 119.98,
                    },
                    {
                        id: 2,
                        name: 'Smartphone Stand',
                        price: 15.99,
                        quantity: 1,
                        total: 15.99,
                    },
                    {
                        id: 3,
                        name: 'Gaming Mouse',
                        price: 29.99,
                        quantity: 1,
                        total: 29.99,
                    },
                ],
                tax: 15,
            };
        },
        methods: {
            // increment product quantity
            increaseQuantity(product) {
                product.quantity++;
            },
            // decrement product quantity
            decreaseQuantity(product) {
                if (product.quantity > 1) {
                    product.quantity--;
                }
            },
            removeProduct(productId) {
                const product = this.products.find((product) => product.id === productId);
                if (product) {
                    this.products.pop(product);
                }
            },
        },
        computed: {
            // calculate subtotal of all items
            calculateSubTotal() {
                return parseFloat(
                    this.products
                        .reduce(
                            (sum, product) => sum + product.price * product.quantity,
                            0
                        )
                        .toFixed(2)
                );
            },
            // calculate tax amount
            calculateTaxAmount() {
                let taxAmount = 0;
                taxAmount = this.calculateSubTotal * (this.tax / 100);
                return parseFloat(taxAmount.toFixed(2));
            },
            // calculate total price after tax
            calculateTotal() {
                let totalPrice = 0;
                totalPrice = this.calculateSubTotal + this.calculateTaxAmount;

                return totalPrice.toFixed(2);
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Cart</h3>

        <!-- Cart Table -->
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="table-responsive" v-if="products.length">
                    <table class="table table-bordered align-middle">
                        <thead class="table-dark">
                            <tr>
                                <th class="text-nowrap">Product</th>
                                <th class="text-nowrap text-center">Price</th>
                                <th class="text-nowrap text-center">Quantity</th>
                                <th class="text-nowrap text-center">Total</th>
                                <th class="text-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.id">
                                <td class="text-nowrap">
                                    <div class="d-flex align-items-center">
                                        <span>{{ product.name }}</span>
                                    </div>
                                </td>
                                <td class="text-nowrap text-center">
                                    {{ '$' + product.price }}
                                </td>
                                <td class="text-nowrap">
                                    <div
                                        class="input-group input-group-sm d-flex justify-content-center"
                                    >
                                        <button
                                            class="btn btn-outline-secondary minus-btn"
                                            @click="decreaseQuantity(product)"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="text"
                                            class="form-control text-center qty-input"
                                            :value="product.quantity"
                                            disabled
                                            style="max-width: 50px"
                                        />
                                        <button
                                            class="btn btn-outline-secondary plus-btn"
                                            @click="increaseQuantity(product)"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td class="text-nowrap text-center">
                                    {{
                                        '$' +
                                        parseFloat(
                                            product.price * product.quantity
                                        ).toFixed(2)
                                    }}
                                </td>
                                <td class="text-nowrap text-center">
                                    <button
                                        class="btn btn-danger btn-sm remove-btn"
                                        @click="removeProduct(product.id)"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="alert alert-warning text-center" v-else>
                    Your cart is empty.
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Order Summary</h5>
                        <p class="d-flex justify-content-between">
                            <span>Subtotal:</span>
                            <strong>{{ '$' + calculateSubTotal }}</strong>
                        </p>
                        <p class="d-flex justify-content-between">
                            <span>Tax ({{ tax + '%' }}):</span>
                            <strong>{{ '$' + calculateTaxAmount }}</strong>
                        </p>
                        <p class="d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>{{ '$' + calculateTotal }}</strong>
                        </p>
                        <button class="btn btn-success w-100">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
