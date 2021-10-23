import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <!-- .....:::::: Start Header Section - Light Header :::::.... --> */}
            <header class="header-section @@pos_absolute pos-relative light-bg sticky-header d-none d-lg-block section-fluid-270">
                <div class="header-wrapper pos-relative">
                    <div class="container-fluid">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                                {/* <!-- Start Header Logo --> */}
                                <a href="index.html" class="header-logo">
                                    <img class="img-fluid" src="assets/images/logo/logo-light-theme.png" alt="" />
                                </a>
                                {/* <!-- End Header Logo --> */}
                            </div>
                            <div class="col-auto d-flex align-items-center">
                                <div class="header-event">
                                    {/* <!-- Start Menu event --> */}
                                    <div class="menu-event dropdown">
                                        <button class="main-menu-event dropdown-toggle" data-bs-toggle="dropdown"><img src="assets/images/icons/icon-open-menu.svg" alt="" /><span>Menu</span><img src="assets/images/icons/icon-arrow-drop-down.svg" alt="" /></button>
                                        <ul class="mainmenu-nav dropdown-menu">
                                            <li class="menu-items">
                                                <Link to="/">Home <span class="material-icons">arrow_right</span></Link>
                                                <div class="has-dropdown">
                                                    <div class="menu-content">
                                                        <h6 class="title">Home Page</h6>
                                                        <ul class="submenu">
                                                            <li><a href="index.html">Home 1</a></li>
                                                            <li><a href="index-2.html">Home 2</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="menu-items">
                                                <a href="shop-grid-sidebar-left.html">Shop <span class="material-icons">arrow_right</span></a>
                                                <div class="has-dropdown megamenu">
                                                    <div class="menu-content">
                                                        <h6 class="title">Shop Page</h6>
                                                        <ul class="submenu">
                                                            <li><a href="shop-grid-sidebar-left.html">Left Sidebar</a></li>
                                                            <li><a href="shop-grid-sidebar-right.html">Right Sidebar</a></li>
                                                            <li><a href="shop-grid-sidebar-full-width-3-column.html">Shop Full Width</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="menu-content">
                                                        <h6 class="title">Product Details Page</h6>
                                                        <ul class="submenu">
                                                            <li><a href="/details/1212">Product Default</a></li>
                                                            <li><a href="product-details-group.html">Product Group</a></li>
                                                            <li><a href="product-details-left-sidebar.html">Product Left Sidebar</a></li>
                                                            <li><a href="product-details-right-sidebar.html">Product Right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="menu-content">
                                                        <h6 class="title">Others Page</h6>
                                                        <ul class="submenu">
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="compare.html">Compare</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="my-account.html">MyAccount</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="menu-items">
                                                <a href="blog-list-left-sidebar.html">Blog <span class="material-icons">arrow_right</span></a>
                                                <div class="has-dropdown megamenu">
                                                    <div class="menu-content">
                                                        <h6 class="title">Blog List Full Width</h6>
                                                        <ul class="submenu">
                                                            <li><a href="blog-list-3-grid-full-width.html">Grid 3 Full Width</a></li>
                                                            <li><a href="blog-list-4-grid-full-width.html">Grid 4 Full Width</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="menu-content">
                                                        <h6 class="title">Blog List Sidebar</h6>
                                                        <ul class="submenu">
                                                            <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="menu-content">
                                                        <h6 class="title">Blog Details</h6>
                                                        <ul class="submenu">
                                                            <li><a href="blog-details-full-width.html">Full Width</a></li>
                                                            <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="menu-items">
                                                <a href="/#">Pages <span class="material-icons">arrow_right</span></a>
                                                <div class="has-dropdown">
                                                    <div class="menu-content">
                                                        <h6 class="title">Inner Pages</h6>
                                                        <ul class="submenu">
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="faq.html">FAQ</a></li>
                                                            <li><a href="error.html">404-Error</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="menu-items"><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>

                                    <div class="search-event">
                                        <input class="header-search" type="search" placeholder="Search" />
                                        <button class="header-search-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt="" /></button>
                                    </div>
                                    {/* <!-- End Menu event --> */}
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="header-action">
                                    <button class="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas"><img src="assets/images/icons/icon-heart-dark.svg" alt="" /><span class="count-tag">01</span></button>
                                    <button class="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#addcartOffcanvas"><img src="assets/images/icons/icon-shopping-bag-dark.svg" alt="" /><span class="item-count item-count--light">02 ITEMS</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {/* <!-- .....:::::: Start Mobile Header Section :::::.... --> */}
            <div class="mobile-header d-block d-lg-none">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="mobile-logo">
                                <a href="index.html"><img src="assets/images/logo/logo-light-theme.png" alt="" /></a>
                            </div>
                        </div>

                        <div class="col-auto">
                            <div class="mobile-action-link text-end d-flex ">
                                <button data-bs-toggle="offcanvas" data-bs-target="#toggleMenu"><span class="material-icons">menu</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .....:::::: Start MobileHeader Section :::::.... --> */}

            {/* <!--  .....::::: Start Offcanvas Mobile Menu Section :::::.... --> */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="toggleMenu">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-flex justify-content-center ">
                        <a href="wishlist.html" class="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-heart-dark.svg" alt="" /><span class="count-tag">01</span></a>
                        <a href="cart.html" class="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-shopping-bag-dark.svg" alt="" /><span class="item-count item-count--light">02 ITEMS</span></a>
                    </div>

                    <div class="header-event mobile-search my-5">
                        <div class="search-event">
                            <input class="header-search" type="search" />
                            <button class="header-search-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt="" /></button>
                        </div>
                    </div>

                    {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
                    <div class="offcanvas-mobile-menu-wrapper">
                        {/* <!-- Start Mobile Menu  --> */}
                        <div class="mobile-menu-bottom">
                            {/* <!-- Start Mobile Menu Nav --> */}
                            <div class="offcanvas-menu">
                                <ul>
                                    <li>
                                        <Link to="/"><span>Home</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/allProducts"><span>Shop</span></Link>
                                        
                                        <ul class="mobile-sub-menu">
                                            <li>
                                                <a href="/#">Product Page</a>
                                                <ul class="mobile-sub-menu">
                                                    <li><a href="/details/1212">Product Default</a></li>
                                                    <li><a href="product-details-group.html">Product Group</a></li>
                                                    <li><a href="product-details-left-sidebar.html">Product Left Sidebar</a></li>
                                                    <li><a href="product-details-right-sidebar.html">Product Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="mobile-sub-menu">
                                            <li>
                                                <a href="/#">Others Page</a>
                                                <ul class="mobile-sub-menu">
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="compare.html">Compare</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="my-account.html">MyAccount</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/#"><span>Blogs</span></a>
                                        <ul class="mobile-sub-menu">
                                            <li>
                                                <a href="/#">Blog List</a>
                                                <ul class="mobile-sub-menu">
                                                    <li><a href="blog-list-3-grid-full-width.html">Grid 3 Full Width</a></li>
                                                    <li><a href="blog-list-4-grid-full-width.html">Grid 4 Full Width</a></li>
                                                    <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="mobile-sub-menu">
                                            <li>
                                                <a href="/#">Blog Details</a>
                                                <ul class="mobile-sub-menu">
                                                    <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                    <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/#"><span>Pages</span></a>
                                        <ul class="mobile-sub-menu">
                                            <li><a href="about.html"><span>About Us</span></a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="error.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html"><span>Contact</span></a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Mobile Menu Nav --> */}
                        </div>
                        {/* <!-- End Mobile Menu --> */}
                    </div>
                    {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
                </div>
            </div>
            {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}
            {/* <!--  .....::::: Start Wishlist Offcanvas Section :::::.... --> */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="wishlistOffcanvas">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title">Wishlist</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="offcanvas-products-list">
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-1.webp" alt="" class="offcanvas-wishlist-image"/>
                                </a>
                                <div class="content">
                                    <a href="" class="title">Tops</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$100.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                            </div>
                        </li>
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-2.webp" alt="" class="offcanvas-wishlist-image"/>
                                </a>
                                <div class="content">
                                    <a href="" class="title">Leggings</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                            </div>
                        </li>
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-3.webp" alt="" class="offcanvas-wishlist-image"/>
                                </a>
                                <div class="content">
                                    <a href="" class="title">Casual Shirt</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$65.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                            </div>
                        </li>
                    </ul>
                    <div class="offcanvas-action-link">
                        <a href="wishlist.html" class="btn">View wishlist</a>
                    </div>
                </div>
            </div>
            {/* <!-- ...:::: End Wishlist Offcanvas Section:::... -->/ */}

            {/* <!--  .....::::: Start Add Cart Offcanvas Section :::::.... --> */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="addcartOffcanvas">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title">Add Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="offcanvas-products-list">
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-1.webp" alt="" class="offcanvas-wishlist-image" />
                                </a>
                                <div class="content">
                                    <a href="" class="title">Tops</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$100.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt="" /></a>
                            </div>
                        </li>
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-2.webp" alt="" class="offcanvas-wishlist-image" />
                                </a>
                                <div class="content">
                                    <a href="" class="title">Leggings</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt="" /></a>
                            </div>
                        </li>
                        <li class="single-item">
                            <div class="box">
                                <a href="" class="image">
                                    <img src="assets/images/products/small/product-small-3.webp" alt="" class="offcanvas-wishlist-image" />
                                </a>
                                <div class="content">
                                    <a href="" class="title">Casual Shirt</a>
                                    <div class="offcanvas-wishlist-item-details">
                                        <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                        <span class="offcanvas-wishlist-item-details-price">$65.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-delete text-right">
                                <a href="#"><img src="assets/images/icons/icon-trash.svg" alt="" /></a>
                            </div>
                        </li>
                    </ul>
                    <div class="offcanvas-action-link">
                        <a href="cart.html" class="btn">Add Cart</a>
                        <a href="checkout.html" class="btn">Checkout</a>
                    </div>
                </div>
            </div>
            {/* <!-- ...:::: End Add Cart Offcanvas Section:::... --> */}
        </div>
    );
};

export default Header;