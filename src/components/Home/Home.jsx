import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Meals from '../Meals/Meals';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <NavBar />

            <Banner/>
            <div className='container px-5 py-6 mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;