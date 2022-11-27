import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Footer from '../Shared/Footer';


const Main = () => {


    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Main;

