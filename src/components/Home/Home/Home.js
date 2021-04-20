import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ReasonToChoose from '../ReasonToChoose/ReasonToChoose';
import RepairingServices from '../RepairingServices/RepairingServices';
import Reviews from '../Reviews/Reviews';
import ServiceData from '../Services/ServiceData';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <RepairingServices></RepairingServices>
            <ServiceData></ServiceData>
            <ReasonToChoose></ReasonToChoose>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;