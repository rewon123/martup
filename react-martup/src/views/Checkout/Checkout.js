import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Checkout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                {/* <!-- ...::: Strat Breadcrumb Section :::... --> */}
                <div class="breadcrumb-section">
                    <div class="box-wrapper">
                        <div class="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                            <div class="breadcrumb-bg">
                                <img src="assets/images/breadcrumb/breadcrumb-img-product-details-page.webp" alt="" />
                            </div>
                            <div class="breadcrumb-content section-fluid-270">
                                <div class="breadcrumb-wrapper">
                                    <div class="content">
                                        <span class="title-tag">BEST DEAL FOREVER</span>
                                        <h2 class="title"><span class="text-mark">Checkout</span> Page</h2>
                                    </div>
                                    <ul class="breadcrumb-nav">
                                        <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                        <li>Checkout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ...::: End Breadcrumb Section :::... --> */}

                {/* <!-- ...:::: Start Checkout Section:::... --> */}
                <div class="checkout-section section-fluid-270 section-top-gap-100">
                    <div class="container-fluid">
                        <div class="row">
                            {/* <!-- User Quick Action Form --> */}
                            <div class="col-12">
                                <div class="user-actions accordion">
                                    <h3>
                                        Returning customer?
                            <a class="Returning" href="#checkout_login" data-bs-toggle="collapse" aria-expanded="true">Click here to login</a>
                                    </h3>
                                    <div id="checkout_login" class="collapse" data-bs-parent="#checkout_login">
                                        <div class="checkout_info">
                                            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                            <form action="#">
                                                <div class="form_group default-form-box">
                                                    <label>Username or email <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                                <div class="form_group default-form-box">
                                                    <label>Password <span>*</span></label>
                                                    <input type="password" />
                                                </div>
                                                <div class="form_group group_3 default-form-box">
                                                    <button class="btn btn-sm btn-radius btn-default" type="submit">Login</button>
                                                    <label class="checkbox-default">
                                                        <input type="checkbox" />
                                                        <span>Remember me</span>
                                                    </label>
                                                </div>
                                                <a href="#">Lost your password?</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-actions accordion">
                                    <h3>
                                        Returning customer?
                            <a class="Returning" href="#checkout_coupon" data-bs-toggle="collapse" aria-expanded="true">Click here to enter your code</a>

                                    </h3>
                                    <div id="checkout_coupon" class="collapse checkout_coupon" data-bs-parent="#checkout_coupon">
                                        <div class="checkout_info">
                                            <form action="#">
                                                <input placeholder="Coupon code" type="text" />
                                                <button class="btn btn-sm btn-radius btn-default" type="submit">Apply coupon</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- User Quick Action Form --> */}
                        </div>
                        {/* <!-- Start User Details Checkout Form --> */}
                        <div class="checkout_form">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <form action="#">
                                        <h3>Billing Details</h3>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>First Name <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>Last Name <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Company Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="country">country <span>*</span></label>
                                                    <select class="country_option nice-select wide" name="country" id="country">
                                                        <option value="2">Bangladesh</option>
                                                        <option value="3">Algeria</option>
                                                        <option value="4">Afghanistan</option>
                                                        <option value="5">Ghana</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">Bahrain</option>
                                                        <option value="8">Colombia</option>
                                                        <option value="9">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Street address <span>*</span></label>
                                                    <input placeholder="House number and street name" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Town / City <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>State / County <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>Phone<span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label> Email Address <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label class="checkbox-default" for="newAccount" data-bs-toggle="collapse" data-bs-target="#newAccountPassword">
                                                    <input type="checkbox" id="newAccount" />
                                                    <span>Create an account?</span>
                                                </label>
                                                <div id="newAccountPassword" class="collapse mt-3" data-parent="#newAccountPassword">
                                                    <div class="card-body1 default-form-box">
                                                        <label> Account password <span>*</span></label>
                                                        <input placeholder="password" type="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label class="checkbox-default" for="newShipping" data-bs-toggle="collapse" data-bs-target="#anotherShipping">
                                                    <input type="checkbox" id="newShipping" />
                                                    <span>Ship to a different address?</span>
                                                </label>

                                                <div id="anotherShipping" class="collapse mt-3" data-parent="#anotherShipping">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="default-form-box">
                                                                <label>First Name <span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="default-form-box">
                                                                <label>Last Name <span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="default-form-box">
                                                                <label>Company Name</label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="select_form_select default-form-box">
                                                                <label for="countru_name">country <span>*</span></label>
                                                                <select class="country_option niceselect_option wide" name="cuntry" id="countru_name">
                                                                    <option value="2">Bangladesh</option>
                                                                    <option value="3">Algeria</option>
                                                                    <option value="4">Afghanistan</option>
                                                                    <option value="5">Ghana</option>
                                                                    <option value="6">Albania</option>
                                                                    <option value="7">Bahrain</option>
                                                                    <option value="8">Colombia</option>
                                                                    <option value="9">Dominican Republic</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="col-12">
                                                            <div class="default-form-box">
                                                                <label>Street address <span>*</span></label>
                                                                <input placeholder="House number and street name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="default-form-box">
                                                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="default-form-box">
                                                                <label>Town / City <span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="default-form-box">
                                                                <label>State / County <span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="default-form-box">
                                                                <label>Phone<span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="default-form-box">
                                                                <label> Email Address <span>*</span></label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-3">
                                                <div class="order-notes">
                                                    <label for="order_note">Order Notes</label>
                                                    <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <form action="#">
                                        <h3>Your order</h3>
                                        <div class="order_table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> Handbag fringilla <strong> × 2</strong></td>
                                                        <td> $165.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Handbag justo <strong> × 2</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Handbag elit <strong> × 2</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Handbag Rutrum <strong> × 1</strong></td>
                                                        <td> $50.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Cart Subtotal</th>
                                                        <td>$215.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Shipping</th>
                                                        <td><strong>$5.00</strong></td>
                                                    </tr>
                                                    <tr class="order_total">
                                                        <th>Order Total</th>
                                                        <td><strong>$220.00</strong></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="payment_method">
                                            <div class="panel-default">
                                                <label class="checkbox-default" for="currencyCod" data-bs-toggle="collapse" data-bs-target="#methodCod">
                                                    <input type="radio" id="currencyCod" name="payment" checked />
                                                    <span>Cash on Delivery</span>
                                                </label>

                                                <div id="methodCod" class="collapse" data-bs-parent="#methodCod">
                                                    <div class="card-body1">
                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="panel-default">
                                                <label class="checkbox-default" for="currencyPaypal" data-bs-toggle="collapse" data-bs-target="#methodPaypal">
                                                    <input type="radio" id="currencyPaypal" name="payment" />
                                                    <span>PayPal</span>
                                                </label>
                                                <div id="methodPaypal" class="collapse" data-bs-parent="#methodPaypal">
                                                    <div class="card-body1">
                                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="order_button">
                                                <button class="btn btn-sm btn-radius btn-default" type="submit">Proceed to PayPal</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Start User Details Checkout Form --> */}
                    </div>
                </div>
                {/* <!-- ...:::: End Checkout Section:::... --> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;