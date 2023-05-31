import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Header/>}
            <Outlet/>
            { noHeaderFooter || <Footer/>}
            <ScrollRestoration/>
        </div>
    );
};

export default Main;