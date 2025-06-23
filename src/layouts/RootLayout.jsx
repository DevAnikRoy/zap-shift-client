import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Home/shared/Navbar/Navbar';
import Footer from '../pages/Home/Home/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
                <Navbar></Navbar>
            <div className='max-w-[1600px] mx-auto'>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default RootLayout;