<script>
    export default {
        name: 'CartComponent',
        data() {
            return {
                cart: {
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
                    summary: {
                        subtotal: 165.96,
                        tax: 16.6,
                        total: 182.56,
                    },
                },
            };
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Cart</h3>

        <!-- Cart Table -->
        <div class="row">
            <div class="col-lg-8">
                <table class="table table-bordered align-middle">
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
                        <!-- Sample Cart Item -->
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span>Product Name</span>
                                </div>
                            </td>
                            <td>$10.00</td>
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
                        <!-- More items can be dynamically added -->
                    </tbody>
                </table>

                <!-- Empty Cart Message -->
                <div class="alert alert-warning text-center d-none" id="emptyCartMsg">
                    Your cart is empty.
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Order Summary</h5>
                        <p class="d-flex justify-content-between">
                            <span>Subtotal:</span> <strong>$10.00</strong>
                        </p>
                        <p class="d-flex justify-content-between">
                            <span>Tax (10%):</span> <strong>$1.00</strong>
                        </p>
                        <p class="d-flex justify-content-between">
                            <span>Total:</span> <strong>$11.00</strong>
                        </p>
                        <button class="btn btn-success w-100">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
