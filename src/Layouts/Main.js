import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';


const Main = () => {


    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Home></Home>

        </div>
    );
};

export default Main;

