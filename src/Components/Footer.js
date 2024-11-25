import React from 'react'
import logo from '../assets/images/footerLogo.png';
import mail from '../assets/images/mail.svg';
import call from '../assets/images/call.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/insta.svg';
import twitter from '../assets/images/twit.svg';
import btn1 from '../assets/images/btn1.svg';
import btn2 from '../assets/images/btn2.svg';

const Footer = () => {
    return (
        <>
            <div className='footer mt-5 py-5'>
                <div className='container'>
                    <div className='row gy-5'>
                        <div className='col-lg-6 pe-lg-5'>
                            <img src={logo} alt="logo" />
                            <p className='my-3' style={{ color: '#B4B6C4' }}>Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.</p>
                            <p className='mb-3' style={{ color: '#B4B6C4' }}>
                                <img src={call} alt="call" className='me-2' />(888) 1234-5678</p>
                            <p style={{ color: '#B4B6C4' }}>
                                <img src={mail} alt="mail" className='me-2' />info@example.com</p>
                            <div className='d-sm-flex gap-3'>
                                <div className='mb-sm-0 mb-3' >
                                    <img src={btn1} alt="btn1" />
                                </div>
                                <div>
                                    <img src={btn2} alt="btn2" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-6'>
                            <h6 className='mb-4 mt-0' style={{ color: '#FFFFFF' }}>Useful links</h6>
                            <ul className='list-unstyled'>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Story</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Team</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-6'>
                            <h6 className='mb-4 mt-0' style={{ color: '#FFFFFF' }}>Help & Support</h6>
                            <ul className='list-unstyled'>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Story</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Team</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-6'>
                            <h6 className='mb-4 mt-0' style={{ color: '#FFFFFF' }}>Resorces</h6>
                            <ul className='list-unstyled'>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Story</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Our Team</p></li>
                                <li className='pb-2'><p className='mb-2' style={{ color: '#B4B6C4' }}>Careers</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-lg-5 mt-4 text-end'>
                        <div className='col-6'>
                            <div className='text-start'>
                                <p className='mb-0' style={{ color: '#B4B6C4' }}>© All Right Reserved</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src={instagram} alt="instagram" className='me-3' />
                            <img src={twitter} alt="call" className='me-3' />
                            <img src={linkedin} alt="call" className='me-3' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer