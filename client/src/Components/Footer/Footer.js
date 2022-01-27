import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const footer = (props) => {
    let faStyle = {color: "white"};
    return(
        <footer className="container-fluid bgClrNav text-center align-items-center pt-2">
            <div className="row no-gutters">
                <div className="col-4">
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={42} style={faStyle}/></a>
                </div>
                <div className="col-4">
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={42} style={faStyle}/></a>
                </div>
                <div className="col-4">
                    <a href="http://www.github.com/chaambane/myzoo-MERN" target="_blank" rel="noopener noreferrer"><FaGithub size={42} style={faStyle}/></a>
                    <p></p>
                </div>
            </div>
        </footer>
    )
};

export default footer;