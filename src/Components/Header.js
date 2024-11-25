import React from 'react';
import logo from '../assets/images/Logo.png';
import check from '../assets/images/check.svg';
import Vector from '../assets/images/Vector.svg';
import round from '../assets/images/round.svg';
import triangle from '../assets/images/triangle.svg';
import arrow from '../assets/images/arrow.svg';
import banner from '../assets/images/banner.png';
import './style.css';

const Header = () => {

    window.onscroll = function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    
    return (
        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#home">
                            <img src={logo} alt="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <strong>QuickSpace</strong>
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#banner">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pages">Pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pricing">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#blogs">Blogs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                                <div>
                                    <button className="btn signup">Get Started Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className='container banner position-relative' id='banner'>
                    <img src={round} alt='arrow' className='round' />
                    <img src={triangle} alt='arrow' className='triangle' />
                    <img src={Vector} alt='arrow' className='vector' />
                    <div className='row align-items-center gy-4'>
                        <div className='col-lg-6 bannercontent'>
                            <h1>Smart-Thinking & Innovative Solution.</h1>
                            <p>Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.</p>
                            <div className='d-flex gap-3 mb-4'>
                                <button className="btn signup discover">Discover More</button>
                                <button className="btn signup bgnone">Explore Service <img src={arrow} alt='arrow' className='ms-1' /></button>
                            </div>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div>
                                    <img src={check} alt='check' className='me-2' /><small>Get 15 days free trial</small>
                                </div>
                                <div>
                                    <img src={check} alt='check' className='me-2' /><small>Get 15 days free trial</small>
                                </div>
                                <div>
                                    <img src={check} alt='check' className='me-2' /><small>Get 15 days free trial</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 bannerimg'>
                            <img src={banner} alt='banner' className='w-100' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;
