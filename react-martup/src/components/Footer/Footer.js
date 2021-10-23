import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* <!-- ...::: Strat Footer Section - Footer Light :::... --> */}
            <footer class="footer-section footer-section-style-1 section-top-gap-120">
                <div class="box-wrapper">
                    <div class="footer-wrapper section-fluid-270">
                        <div class="container-fluid">

                            {/* <!-- Start Footer Top  --> */}
                            <div class="footer-top">
                                <div class="footer-top-left">
                                    <div class="footer-contact-items">
                                        <a class="icon-left" href="tel:+12345678910"><img class="icon-svg" src="assets/images/icons/icon-ios-call-dark.svg" alt="" />123 4567 8910</a>
                                        <a class="icon-left" href="mailto:demo@example.com"><img class="icon-svg" src="assets/images/icons/icon-mail-open-dark.svg" alt="" />demo@example.com</a>
                                    </div>
                                </div>
                                <div class="footer-top-right">
                                    <div class="footer-social">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><img class="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt="" /></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener"><img class="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt="" /></a>
                                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><img class="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt="" /></a>
                                        <a href="https://dribbble.com/" target="_blank" rel="noopener"><img class="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Footer Top  --> */}

                            {/* <!-- Start Footer Center  --> */}
                            <div class="footer-center">
                                <div class="footer-widgets-items">
                                    {/* <!-- Start Footer Widget Single Item --> */}
                                    <div class="footer-widgets-single-item footer-widgets-single-item--light">
                                        <h5 class="title">Product</h5>
                                        <h5 class="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-1">Product</h5>
                                        <div id="dividerId-1" class="widget-collapse-body collapse">
                                            <ul class="footer-nav">
                                                <li><a href="contact.html">Shop Vendor</a></li>
                                                <li><a href="contact.html">Product House</a></li>
                                                <li><a href="contact.html">Categories</a></li>
                                                <li><a href="contact.html">Delivery Areas</a></li>
                                                <li><a href="contact.html">Delivery Cost</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Footer Widget Single Item --> */}
                                    {/* <!-- Start Footer Widget Single Item --> */}
                                    <div class="footer-widgets-single-item footer-widgets-single-item--light">
                                        <h5 class="title">Offer</h5>
                                        <h5 class="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-2">Offer</h5>
                                        <div id="dividerId-2" class="widget-collapse-body collapse">
                                            <ul class="footer-nav">
                                                <li><a href="contact.html">Shop Vendor</a></li>
                                                <li><a href="contact.html">Product House</a></li>
                                                <li><a href="contact.html">Categories</a></li>
                                                <li><a href="contact.html">Delivery Areas</a></li>
                                                <li><a href="contact.html">Delivery Cost</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Footer Widget Single Item --> */}
                                    {/* <!-- Start Footer Widget Single Item --> */}
                                    <div class="footer-widgets-single-item footer-widgets-single-item--light">
                                        <h5 class="title">Information</h5>
                                        <h5 class="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-3">Information</h5>
                                        <div id="dividerId-3" class="widget-collapse-body collapse">
                                            <ul class="footer-nav">
                                                <li><a href="contact.html">Shop Vendor</a></li>
                                                <li><a href="contact.html">Product House</a></li>
                                                <li><a href="contact.html">Categories</a></li>
                                                <li><a href="contact.html">Delivery Areas</a></li>
                                                <li><a href="contact.html">Delivery Cost</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Footer Widget Single Item --> */}
                                    {/* <!-- Start Footer Widget Single Item --> */}
                                    <div class="footer-widgets-single-item footer-widgets-single-item--light">
                                        <h5 class="title">About</h5>
                                        <h5 class="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-4">About</h5>
                                        <div id="dividerId-4" class="widget-collapse-body collapse">
                                            <ul class="footer-nav">
                                                <li><a href="contact.html">Shop Vendor</a></li>
                                                <li><a href="contact.html">Product House</a></li>
                                                <li><a href="contact.html">Categories</a></li>
                                                <li><a href="contact.html">Delivery Areas</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Footer Widget Single Item --> */}
                                </div>
                            </div>
                            {/* <!-- End Footer Center  --> */}

                            {/* <!-- Start Footer Bottom --> */}
                            <div class="footer-bottom">
                                <p class="copyright-text copyright-text--light">&copy; 2021 Mart Up. Made with <span class="material-icons">favorite</span> by <a href="" target="__blank" rel="noopener noreferrer">Rizwan rashid</a></p>
                                <a href="/#" class="payment-logo"><img class="img-fluid" src="assets/images/company-logo/payment-logo.png" alt="" /></a>
                            </div>
                            {/* <!-- End Footer Bottom --> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;