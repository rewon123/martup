import React from 'react';

const Products = () => {
    return (
        <div>
            <div class="product-tab-items-section section-fluid-270 section-top-gap-100">
                <div class="box-wrapper">
                    <div class="section-wrapper">
                        <div class="container-fluid">
                            <div class="row justify-content-between align-items-center flex-warp">
                                <div class="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                                    <div class="section-content section-content-gap-60">
                                        <h2 class="section-title">Products</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-tab-item-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    {/* <!-- Start Product Tab Items  --> */}
                                    <ul class="product-tab nav" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#all" type="button">All <img src="assets/images/icons/product-tab-icon-1.svg" alt="" /></button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#men" type="button">Men <img src="assets/images/icons/product-tab-icon-2.svg" alt="" /></button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#women" type="button">Women <img src="assets/images/icons/product-tab-icon-3.svg" alt="" /></button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#kid" type="button">Kid <img src="assets/images/icons/product-tab-icon-5.svg" alt="" /></button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#others" type="button">Others <img src="assets/images/icons/product-tab-icon-4.svg" alt="" /></button>
                                        </li>
                                    </ul>
                                    {/* <!-- End Product Tab Items  --> */}
                                    {/* <!-- Start Tab Content Items --> */}
                                    <div class="tab-content">
                                        {/* <!-- Start Tab Content Single Item --> */}
                                        <div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="center-slider-nav product-slider-3grids-2rows">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <a href="/details/1212" class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" width="435" height="350" loading="lazy" alt="product-image" />
                                                                <ul class="tooltip-tag-items">
                                                                    <li class="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">MEN</span>
                                                                    <h4 class="title"><a href="/details/1212">Man's Outdoor Shirt</a></h4>
                                                                    <span class="price">$355.00 <del>$400.00</del></span>
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
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Tab Content Single Item --> */}
                                        <div class="d-flex justify-content-center">
                                            <a href="shop-grid-sidebar-left.html" class="btn btn-md btn-default btn-section-bottom">View All Product</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ...::: Strat Banner Card Section Section :::... --> */}
                            <div class="banner-card-section section-fluid-270 section-top-gap-100">
                                <div class="box-wrapper">
                                    <div class="banner-car-wrapper">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12">
                                                    <a href="shop-grid-sidebar-left.html" class="d-block banner-animate--wave">
                                                        <img class="img-fluid" src="assets/images/banner/banner-wide-1.webp" width="1355" height="350" loading="lazy" alt="banner-wide-image-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ...::: End Banner Card Section Section :::... --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;