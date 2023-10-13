import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <>
            <div className="navbar active sticky-top navbar-expand-lg navbar navbar-light navcus aqua-gradient color-block mb-3 mx-auto  z-depth-1 " >
                <div className="container-fluid">
                    <a className="navbar-brand "><img src="./img/logo.png" height="40" alt="" loading="lazy" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end navbar-dark-hover-color" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link to='/' className="fw-bold nav-item nav-link active " aria-current="page" >Home</Link>
                            <Link to='/app' className="fw-bold nav-item nav-link active" aria-current="page">App</Link>
                            <Link to='/team' className="fw-bold nav-item nav-link active" aria-current="page">Team</Link>
                            <Link to='/blogs' className="fw-bold nav-item nav-link active" aria-current="page">Blogs</Link>
                            <Link to='/contact' className="fw-bold nav-item nav-link active" aria-current="page">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
