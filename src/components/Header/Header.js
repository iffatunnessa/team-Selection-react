import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Team Selection</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="\home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                                </li>
                            <li className="nav-item">
                                <a className="nav-link" href="\pri">Pricing</a>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;