import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Team Selection</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="\home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                                </li>
                            <li class="nav-item">
                                <a class="nav-link" href="\pri">Pricing</a>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;