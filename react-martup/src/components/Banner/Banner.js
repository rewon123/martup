import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <!-- ...::: Strat Hero Slider Section :::... --> */}
            <div class="hero-slider-section hero-slider-light section-fluid-270">
                <div class="box-wrapper">
                    <div class="hero-slider-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-slider">
                                        {/* <!-- Slider main container --> */}
                                        <div class="swiper-container">
                                            {/* <!-- Additional required wrapper --> */}
                                            <div class="swiper-wrapper">
                                                {/* <!-- Slides --> */}
                                                {/* <!-- Start Hero Slider Single Item --> */}
                                                <div class="hero-slider-single-item--style-1 swiper-slide hero-bg">
                                                    <div class="image">
                                                        <img class="img-fluid" src="../../assets/images/hero-slider/hero-slider-style-1-img-1.png" width="469" height="760" loading="lazy" alt="hero-image-1" />
                                                    </div>
                                                    <div class="image-shape"></div>
                                                    <div class="content-box">
                                                        <div class="row">
                                                            <div class="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10 ">
                                                                <div class="content">
                                                                    <span class="title-tag">BE ST DEAL FOREVER</span>
                                                                    <h2 class="title">Best Fashion Collection </h2>
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                                                    <a href="/details/1212" class="btn btn-lg btn-default">GET IT NOW</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hero-slider-shape hero-slider-top-shape"><img class="img-fluid" src="../../assets/images/icons/hero-slider-top-shape.svg" width="113" height="107" loading="lazy" alt="hero-shape-1" /></div>
                                                    <div class="hero-slider-shape hero-slider-bottom-shape"><img class="img-fluid" src="../../assets/images/icons/hero-slider-bottom-shape.svg" width="221" height="234" loading="lazy" alt="hero-shape-1" /></div>
                                                </div>
                                                {/* <!-- End Hero Slider Single Item --> */}
                                               
                                               
                                            </div>
                                            {/* <!-- If we need pagination --> */}
                                            <div class="swiper-pagination"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ...::: End Hero Slider Section:::... --> */}

            {/* <!-- ...::: Strat Shipping Section :::... --> */}
            <div class="shipping-section section-fluid-270 section-top-gap-100">
                <div class="box-wrapper">
                    {/* <!-- Start Shipping Wrapper --> */}
                    <div class="shipping-wrapper">
                        <div class="container-fluid">
                            <div class="row">

                                <div class="row justify-content-between mb-n40">
                                    <div class="col-xl-4 col-md-6 col-12 mb-40">
                                        {/* <!-- Start Shipping Single Items --> */}
                                        <div class="shipping-single-item--style-1">
                                            <div class="icon">
                                                <img class="img-fluid" src="../../assets/images/icons/shipping-icon-1.svg" width="46" height="33" loading="lazy" alt="shipping-icon-1" />
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Fast Delivary</h4>
                                                <p>There are many variations of
                                                    passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                        {/* <!-- Start Shipping Single Items --> */}
                                    </div>
                                    <div class="col-xl-4 col-md-6 col-12 mb-40">
                                        {/* <!-- Start Shipping Single Items --> */}
                                        <div class="shipping-single-item--style-1">
                                            <div class="icon">
                                                <img class="img-fluid" src="../../assets/images/icons/shipping-icon-2.svg" width="46" height="33" loading="lazy" alt="shipping-icon-2" />
                                            </div>
                                            <div class="content">
                                                <h4 class="title">100% Refund</h4>
                                                <p>There are many variations of
                                                    passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                        {/* <!-- Start Shipping Single Items --> */}
                                    </div>
                                    <div class="col-xl-4 col-md-6 col-12 mb-40">
                                        {/* <!-- Start Shipping Single Items --> */}
                                        <div class="shipping-single-item--style-1">
                                            <div class="icon">
                                                <img class="img-fluid" src="../../assets/images/icons/shipping-icon-3.svg" width="46" height="33" loading="lazy" alt="shipping-icon-3" />
                                            </div>
                                            <div class="content">
                                                <h4 class="title">Premium Quality</h4>
                                                <p>There are many variations of
                                                    passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                        {/* <!-- Start Shipping Single Items --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Shipping Wrapper --> */}
                </div>
            </div>
            {/* <!-- ...::: End Shipping Section :::... --> */}
        </div>
    );
};

export default Banner;