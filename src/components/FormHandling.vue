<script>
    export default {
        name: 'FormHandling',
        data() {
            return {
                formValues: {
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    dob: '',
                    gender: '',
                    bio: '',
                    profile_picture: '',
                    experience: '',
                    favorite_color: '',
                    hobbies: [],
                    subscription: '',
                    terms: false,
                },
            };
        },
        methods: {
            handleSubmission(event) {
                event.preventDefault();
                alert('Form Submitted!');
            },
        },
    };
</script>

<template>
    <div class="container my-5">
        <h3>Form Handling</h3>

        <div class="row justify-content-center">
            <div class="col-12 col-md-5">
                <div class="card h-100">
                    <div class="card-header">
                        <h5 class="card-title text-center">Register New Account</h5>
                    </div>

                    <div class="card-body">
                        <form @submit="handleSubmission">
                            <div class="row">
                                <div class="col-12 my-2">
                                    <label for="name" class="form-label">Name</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        name="name"
                                        placeholder="Enter your name"
                                        v-model.trim="formValues.name"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="email"
                                        class="form-control form-control-lg"
                                        name="email"
                                        placeholder="Enter your email"
                                        v-model="formValues.email"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="password" class="form-label"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control form-control-lg"
                                        name="password"
                                        placeholder="Enter your password"
                                        v-model="formValues.password"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        class="form-control form-control-lg"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        v-model="formValues.phone"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="dob" class="form-label"
                                        >Date of Birth</label
                                    >
                                    <input
                                        type="date"
                                        class="form-control form-control-lg"
                                        name="dob"
                                        v-model="formValues.dob"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="gender" class="form-label">Gender</label>
                                    <select
                                        class="form-select form-control-lg"
                                        name="gender"
                                        v-model="formValues.gender"
                                    >
                                        <option selected disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div class="col-12 my-2">
                                    <label for="bio" class="form-label">Bio</label>
                                    <textarea
                                        class="form-control form-control-lg"
                                        name="bio"
                                        rows="3"
                                        placeholder="Tell us about yourself"
                                        v-model="formValues.bio"
                                    ></textarea>
                                </div>

                                <div class="col-12 my-2">
                                    <label class="form-label">Profile Picture</label>
                                    <input
                                        type="file"
                                        class="form-control form-control-lg"
                                        name="profile_picture"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="experience" class="form-label"
                                        >Experience (years)</label
                                    >
                                    <input
                                        type="number"
                                        class="form-control form-control-lg"
                                        name="experience"
                                        min="0"
                                        max="50"
                                        placeholder="Enter experience in years"
                                        v-model.number="formValues.experience"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label class="form-label">Favorite Colors</label>
                                    <input
                                        type="color"
                                        class="form-control form-control-lg"
                                        name="favorite_color"
                                        value="#ff0000"
                                        v-model="formValues.favorite_color"
                                    />
                                </div>

                                <div class="col-12 my-2">
                                    <label for="hobbies" class="form-label"
                                        >Select Your Hobbies</label
                                    >
                                    <select
                                        class="form-select form-control-lg"
                                        name="hobbies[]"
                                        v-model="formValues.hobbies"
                                        multiple
                                    >
                                        <option value="reading">Reading</option>
                                        <option value="gaming">Gaming</option>
                                        <option value="traveling">Traveling</option>
                                        <option value="music">Music</option>
                                        <option value="sports">Sports</option>
                                    </select>
                                    <small class="text-muted"
                                        >Hold Ctrl (Windows) / Command (Mac) to select
                                        multiple options.</small
                                    >
                                </div>

                                <div class="col-12 my-2">
                                    <label class="form-label">Subscription Plan</label>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="subscription"
                                            value="free"
                                            id="free"
                                            v-model="formValues.subscription"
                                        />
                                        <label class="form-check-label" for="free"
                                            >Free Plan</label
                                        >
                                    </div>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="subscription"
                                            value="premium"
                                            id="premium"
                                            v-model="formValues.subscription"
                                        />
                                        <label class="form-check-label" for="premium"
                                            >Premium Plan</label
                                        >
                                    </div>
                                </div>

                                <div class="col-12 my-2">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            v-model="formValues.terms"
                                        />
                                        <label class="form-check-label" for="terms"
                                            >I agree to the terms and conditions</label
                                        >
                                    </div>
                                </div>

                                <div class="col-12 text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-lg btn-primary mt-3"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-5">
                <div class="card h-100">
                    <div class="card-header">
                        <h5 class="card-title text-center">Form Response</h5>
                    </div>
                    <div class="card-body bg-secondary-subtle">
                        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
