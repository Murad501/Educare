import React from 'react';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Main;