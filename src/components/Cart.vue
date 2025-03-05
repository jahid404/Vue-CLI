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
        computed: {
            calculateSubTotal() {
                let subTotal = 0;
                this.products.forEach((product) => {
                    subTotal += product.price;
                });

                return subTotal;
            },
            calculateTotal() {
                let totalPrice = 0;
                totalPrice = this.calculateSubTotal * (this.tax / 100);

                return totalPrice;
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Cart</h3>

        <!-- Cart Table -->
        <div class="row">
            <div class="col-lg-8">
                <table class="table table-bordered align-middle" v-if="products.length">
                    <thead class="table-dark">
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td>
                                <div class="d-flex align-items-center">
                                    <span>{{ product.name }}</span>
                                </div>
                            </td>
                            <td>{{ '$' + product.price }}</td>
                            <td>
                                <div class="input-group input-group-sm">
                                    <button class="btn btn-outline-secondary minus-btn">
                                        −
                                    </button>
                                    <input
                                        type="text"
                                        class="form-control text-center qty-input"
                                        value="1"
                                        style="max-width: 50px"
                                    />
                                    <button class="btn btn-outline-secondary plus-btn">
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>$10.00</td>
                            <td>
                                <button class="btn btn-danger btn-sm remove-btn">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

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
                            <span>Tax (10%):</span> <strong>$1.00</strong>
                        </p>
                        <p class="d-flex justify-content-between">
                            <span>Total:</span> <strong>{{ '$' + calculateTotal }}</strong>
                        </p>
                        <button class="btn btn-success w-100">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
