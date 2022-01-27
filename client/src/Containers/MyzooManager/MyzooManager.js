import React, {Component} from 'react';
import Navbar from '../../Components/UI/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from '../../Components/Home/Home';
import Parc from '../Parc/Parc';
import ContactForm from '../ContactForm/ContactForm';
import Admin from '../Admin/Admin';
import Error404 from '../../Components/Error/Error404/Error404';
import Footer from '../../Components/Footer/Footer';

class MyzooManager extends Component {
    render() {
        return (
            <> 
            <div className="pageheight">
                <Navbar/>
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/parc" element={<Parc/>} />
                        <Route path="/contact" element={<ContactForm/>} />
                        <Route path="/admin" element={<Admin/>} />
                        <Route path="*" element={<Error404/>} />
                    </Routes>
                </main>
                <div className="minHeight"></div>
            </div> 
                <Footer/>
            </>
        )
    };
}

export default MyzooManager;