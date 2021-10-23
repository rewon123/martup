import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Product/Products';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;