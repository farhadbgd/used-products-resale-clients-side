import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const CategoriesLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CategoriesLayout;