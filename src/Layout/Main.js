import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Home/Home/shared/Header/Header';
import LeftNavbar from '../components/Home/Home/shared/LeftNavbar/LeftNavbar';

const Main = () => {
    return (
        <div>
            <LeftNavbar></LeftNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;