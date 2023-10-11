import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light navcus ${isNavOpen ? 'active' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand" style={{ marginRight: '700px' }}>
                    <img src="./img/logo.png" height="35" alt="" loading="lazy" style={{ backgroundColor: 'transparent' }} />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                    <div className="navbar-nav">
                        <Link to="/" className="fw-bold nav-link" aria-current="page">Home</Link>
                        <Link to="/app" className="fw-bold nav-link" aria-current="page">App</Link>
                        <Link to="/team" className="fw-bold nav-link" aria-current="page">Team</Link>
                        <Link to="/blogs" className="fw-bold nav-link" aria-current="page">Blogs</Link>
                        <Link to="/contact" className="fw-bold nav-link" aria-current="page">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
