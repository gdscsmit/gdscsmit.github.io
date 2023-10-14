import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const navbarStyle = {
        transition: 'max-height 0.9s ease',
        maxHeight: isNavOpen ? '350px' : '60px',
        overflow: 'hidden',
        paddingRight: '2%',
        paddingLeft: '2%',
    };

    const navBrandStyle = {
        width: '40%',
        maxWidth: '300px',
        overflow: 'hidden',
    }

    return (
        <>
            <div className="navbar sticky-top navbar-expand-lg navbar-light navcus frosted-glass" style={navbarStyle}>
                <div className="container-fluid" >
                    <Link to='/' className="navbar-brand" style={navBrandStyle}  >
                        <img src="./img/logo.png" height='100%' width='100%' alt="" loading="lazy" style={{ backgroundColor: 'transparent' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup" >
                        <div className="navbar-nav" >
                            <Link to='/' className="text-black fw-bold nav-link active"
                                aria-current="page" onClick={closeNavbar}>
                                Home
                            </Link>
                            <Link to='/app' className="text-black fw-bold nav-link active " aria-current="page" onClick={closeNavbar}>
                                App
                            </Link>
                            <Link to='/team' className="text-black fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Team
                            </Link>
                            <Link to='/blogs' className="text-black fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Blogs
                            </Link>
                            <Link to='/contact' className="text-black fw-bold nav-link active link-hover-effect" aria-current="page" onClick={closeNavbar}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
