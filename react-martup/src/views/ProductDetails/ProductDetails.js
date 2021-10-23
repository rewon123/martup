import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetails = () => {
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
                                        <h2 class="title"><span class="text-mark">Product</span> Details</h2>
                                    </div>
                                    <ul class="breadcrumb-nav">
                                        <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                        <li>Product Details Default</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ...::: End Breadcrumb Section :::... --> */}

                {/* <!-- ...::: Strat Product Gallery Section :::... --> */}
                <div class="product-gallery-info-section section-fluid-270 section-top-gap-100">
                    <div class="box-wrapper">
                        <div class="product-gallery-info-wrapper">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xxl-8 col-lg-6">
                                        {/* <!-- Start Product Gallert - Tab Style --> */}
                                        <div class="product-gallery product-gallery--style-tab">
                                            <div class="row flex-md-row flex-column-reverse">
                                                <div class="col-md-3">
                                                    {/* <!-- Start Product Thumbnail --> */}
                                                    <ul class="product-thumbnail-image nav">
                                                        <li class="nav-item">
                                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#img-1" type="button">
                                                                <span class="thumb">
                                                                    <img class="img-fluid" src="assets/images/products/product-details/product-thumb-1.webp" alt="" />
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#img-2" type="button">
                                                                <span class="thumb">
                                                                    <img class="img-fluid" src="assets/images/products/product-details/product-thumb-2.webp" alt="" />
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#img-3" type="button">
                                                                <span class="thumb">
                                                                    <img class="img-fluid" src="assets/images/products/product-details/product-thumb-3.webp" alt="" />
                                                                </span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    {/* <!-- End Product Thumbnail --> */}
                                                </div>
                                                <div class="col-md-9">
                                                    {/* <!-- Start Product Large Image --> */}
                                                    <div class="product-large-image tab-content">
                                                        <div class="tab-pane fade show active" id="img-1" role="tabpanel">
                                                            <div class="image">
                                                                <img class="img-fluid" src="assets/images/products/product-details/product-large-1.webp" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="img-2" role="tabpanel">
                                                            <div class="image">
                                                                <img class="img-fluid" src="assets/images/products/product-details/product-large-2.webp" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="img-3" role="tabpanel">
                                                            <div class="image">
                                                                <img class="img-fluid" src="assets/images/products/product-details/product-large-3.webp" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- End Product Large Image --> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Product Gallert - Tab Style --> */}
                                    </div>
                                    <div class="col-xxl-4 col-lg-6">
                                        {/* <!-- Start Product Content --> */}
                                        <div class="product-content">
                                            <span class="catagory">Women</span>
                                            <h2 class="title">Stylish women court gray 2DX m</h2>
                                            <span class="author">Design: kakakoli Fashion</span>
                                            <div class="bottom">
                                                <ul class="review-star">
                                                    <li class="fill"><span class="material-icons">star</span></li>
                                                    <li class="fill"><span class="material-icons">star</span></li>
                                                    <li class="fill"><span class="material-icons">star</span></li>
                                                    <li class="fill"><span class="material-icons">star</span></li>
                                                    <li class="fill"><span class="material-icons">star_half</span></li>
                                                </ul>

                                                <a href="wishlist.html" class="wishlist">Add Wishlist</a>
                                            </div>

                                            <span class="price">$550.00 <del>$650.00</del></span>

                                            <div class="product-variables">
                                                {/* <!-- Start Product Single Variable --> */}
                                                <div class="product-variable-color">
                                                    <h6 class="title">Color</h6>
                                                    <ul class="color-select">
                                                        <li>
                                                            <label class="checkbox-default" for="color-red">
                                                                <input type="checkbox" id="color-red" />
                                                                <span>Red</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="checkbox-default" for="color-green">
                                                                <input type="checkbox" id="color-green" />
                                                                <span>Green</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="checkbox-default" for="color-blue">
                                                                <input type="checkbox" id="color-blue" />
                                                                <span>Blue</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="checkbox-default" for="color-black">
                                                                <input type="checkbox" id="color-black" />
                                                                <span>Black</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- End Product Single Variable --> */}

                                                <ul class="variable-items">
                                                    <li class="variable-single-items type-select">
                                                        <select>
                                                            <option value="S">Size: S</option>
                                                            <option value="M">Size: M</option>
                                                            <option value="L">Size: L</option>
                                                            <option value="XL" selected>Size: XL</option>
                                                            <option value="XXl">Size: XXL</option>
                                                        </select>
                                                    </li>
                                                    <li class="variable-single-items">
                                                        <div class="num-block skin-2">
                                                            <div class="num-in">
                                                                <span class="minus dis"></span>
                                                                <input type="text" class="in-num" value="1" readonly="" />
                                                                <span class="plus"></span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="variable-single-items">
                                                        <a href="cart.html" class="btn btn-sm btn-default">Add To Cart</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        {/* <!-- End Product Content --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ...::: End Product Gallery Section :::... --> */}

                {/* <!-- ...::: Strat Product Description Section :::... --> */}
                <div class="product-description-section  section-fluid-270 section-top-gap-100">
                    <div class="box-wrapper">
                        <div class="product-description-wrapper">
                            <div class="container-fluid">
                                <div class="row justify-content-center">
                                    <div class="col-xl-8 col-lg-10">
                                        <div class="product-description-content">
                                            <h6 class="title">Description</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book. It has survivedLorem Ipsum is simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been </p>

                                            <p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book</p>

                                            <ul class="items-info-list">
                                                <li>There are many variations of passages</li>
                                                <li>If you are going to use a passage of Lorem Ipsum.</li>
                                                <li>The generated Lorem Ipsum is therefore</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>At vero eos et accusamus et iusto odio dignissimos</li>
                                            </ul>

                                            <p>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book</p>

                                            <div class="social-links">
                                                <span class="text">Share:</span>
                                                <div class="items">
                                                    <a href="https://example.com/"><img class="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt="" /></a>
                                                    <a href="https://example.com/"><img class="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt="" /></a>
                                                    <a href="https://example.com/"><img class="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt="" /></a>
                                                    <a href="https://example.com/"><img class="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ...::: End Product Description Section :::... --> */}

                {/* <!-- ...::: Strat Product Section :::... --> */}
                <div class="product-item-section  section-fluid-270 section-top-gap-100">
                    <div class="box-wrapper">
                        <div class="section-wrapper">
                            <div class="container-fluid">
                                <div class="row justify-content-between align-items-center flex-warp section-content-gap-60">
                                    <div class="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                                        <div class="section-content">
                                            <h2 class="section-title">Related Products</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-item-wrapper">
                            <div class="container-fluid">
                                {/* <!-- Slider main container --> */}
                                <div class="row">
                                    <div class="col-4">
                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                        <div class="product-single-item-style-1 ">
                                            <a href="/details/1212" class="image img-responsive">
                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" alt="" />
                                                <ul class="tooltip-tag-items">
                                                    <li class="color-yellow">15%</li>
                                                </ul>
                                            </a>
                                            <div class="content">
                                                <div class="top">
                                                    <span class="catagory">WOMEN</span>
                                                    <h4 class="title"><a href="/details/1212">Star Women pants</a></h4>
                                                    <span class="price">$200.00 <del>$300.00</del></span>
                                                </div>
                                                <div class="bottom">
                                                    <ul class="review-star">
                                                        <li class="fill"><span class="material-icons">star</span></li>
                                                        <li class="fill"><span class="material-icons">star</span></li>
                                                        <li class="fill"><span class="material-icons">star</span></li>
                                                        <li class="fill"><span class="material-icons">star</span></li>
                                                        <li class="fill"><span class="material-icons">star_half</span></li>
                                                    </ul>
                                                    <div class="product-event-items">
                                                        <a href="cart.html" class="btn cart-btn">Add to cart</a>
                                                        <a href="wishlist.html" class="btn wishlist-btn"><span class="material-icons">favorite_border</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Product Single Item - Style 1 --> */}
                                </div>
                                {/* <!-- ...::: Strat Product Section :::... --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div >
    );
};

export default ProductDetails;