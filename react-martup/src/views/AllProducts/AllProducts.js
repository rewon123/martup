import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    return (
        <div>
            <Header></Header>
            <div>
                {/* <!-- ...::: Strat Breadcrumb Section :::... --> */}
                <div class="breadcrumb-section">
                    <div class="box-wrapper">
                        <div class="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                            <div class="breadcrumb-bg">
                                <img src="assets/images/breadcrumb/breadcrumb-img-shop-page.webp" alt="" />
                            </div>
                            <div class="breadcrumb-content section-fluid-270">
                                <div class="breadcrumb-wrapper">
                                    <div class="content">
                                        <span class="title-tag">BEST DEAL FOREVER</span>
                                        <h2 class="title"><span class="text-mark">Hurry!</span> <br/> Get your product now</h2>
                        </div>
                                        <ul class="breadcrumb-nav">
                                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                            <li> Shop Page Full Width</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ...::: End Breadcrumb Section :::... --> */}

                    {/* <!-- ...:::: Start Shop List Section:::... --> */}
                    <div class="shop-list-section section-fluid-270 section-top-gap-100">
                        <div class="box-wrapper">
                            <div class="shop-list-wrapper">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <ul class="product-shop-filter-info">
                                                <li class="prduct-item-traking"><span>total 08 of 40</span></li>
                                                <li class="prduct-item-filter">
                                                    <select name="choice">
                                                        <option value="first">New Arrival</option>
                                                        <option value="second" selected>Featured</option>
                                                        <option value="third">Popular</option>
                                                    </select>
                                                </li>
                                            </ul>

                                            <div class="product-shop-list-items">
                                                <div class="row mb-n25">
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" alt="" />
                                                                <ul class="tooltip-tag-items">
                                                                    <li class="color-green">15%</li>
                                                                </ul>
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">MEN</span>
                                                                    <h4 class="title"><Link to='/details'>Man's Outdoor Shirt</Link></h4>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" alt="" />
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Women Summer deal</Link></h4>
                                                                    <span class="price">$550.00</span>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" alt="" />
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Women Luxury Party</Link></h4>
                                                                    <span class="price">$1050.00</span>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1 swiper-slide">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" alt="" />
                                                                <ul class="tooltip-tag-items">
                                                                    <li class="color-yellow">15%</li>
                                                                </ul>
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Star Women pants</Link></h4>
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
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1 swiper-slide">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" alt="" />
                                                                <ul class="tooltip-tag-items">
                                                                    <li class="color-green">15%</li>
                                                                </ul>
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">MEN</span>
                                                                    <h4 class="title"><Link to='/details'>Man's Outdoor Shirt</Link></h4>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" alt="" />
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Women Summer deal</Link></h4>
                                                                    <span class="price">$550.00</span>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" alt="" />
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Slightly jackets XL Cool </Link></h4>
                                                                    <span class="price">$350.00</span>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" alt="" />
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">WOMEN</span>
                                                                    <h4 class="title"><Link to='/details'>Women Luxury Party</Link></h4>
                                                                    <span class="price">$1050.00</span>
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
                                                    <div class="col-xl-4 col-md-6 col-12 mb-25">
                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div class="product-single-item-style-1">
                                                            <Link to='/details' class="image img-responsive">
                                                                <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-6.webp" alt="" />
                                                                <ul class="tooltip-tag-items">
                                                                    <li class="color-green">15%</li>
                                                                </ul>
                                                            </Link>
                                                            <div class="content">
                                                                <div class="top">
                                                                    <span class="catagory">Bag</span>
                                                                    <h4 class="title"><Link to='/details'>Distracted XL bag</Link></h4>
                                                                    <span class="price">$1200.00 <del>$1500.00</del></span>
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

                                            {/* <!-- Start Pagination --> */}
                                            <div class="d-flex justify-content-center">
                                                <ul class="page-pagination">
                                                    <li class="icon-direction icon-direction--prev"><a href="#"><span class="material-icons-outlined">arrow_left</span></a></li>
                                                    <li><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li>...</li>
                                                    <li><a href="#">10</a></li>
                                                    <li class="icon-direction icon-direction--next"><a href="#"><span class="material-icons-outlined">arrow_right</span></a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- End Pagination --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ...:::: End Shop List Section:::... --> */}
                </div>
                <Footer></Footer>
            </div>
    );
};

export default AllProducts;