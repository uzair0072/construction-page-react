import React from "react";

export default function NavBar() {
    return (
        <>
            <div className="header">
                <a href="#" id="construction"> CONSTRUCTION </a>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> About Us </a></li>
                        <li><a href="#"> Services </a></li>
                        <li><a href="#"> Contact Us </a></li>
                    </ul>
                </nav>
            </div>  
        </>
    );
}