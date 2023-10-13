
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const navbarStyle = {
        transition: 'max-height 0.9s ease',
        maxHeight: isNavOpen ? '250px' : '58px', 
        overflow: 'hidden',
    };
  
    


    return (
        <>

            <div className="navbar sticky-top navbar-expand-lg navbar-light navcus" style={navbarStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="./img/logo.png" height="35" alt="" loading="lazy" style={{ backgroundColor: 'transparent' }} />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup" >
                        <div className="navbar-nav" >
                            <Link to='/' className="fw-bold nav-link active" aria-current="page" onClick={closeNavbar}>
                                Home
                            </Link>
                            <Link to='/app' className="fw-bold nav-link active" aria-current="page" onClick={closeNavbar}>
                                App
                            </Link>
                            <Link to='/team' className="fw-bold nav-link active" aria-current="page" onClick={closeNavbar}>
                                Team
                            </Link>
                            <Link to='/blogs' className="fw-bold nav-link active" aria-current="page" onClick={closeNavbar}>
                                Blogs
                            </Link>
                            <Link to='/contact' className="fw-bold nav-link active" aria-current="page" onClick={closeNavbar}>
                                Contact
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
