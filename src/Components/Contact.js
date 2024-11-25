import React from 'react'
import contact from '../assets/images/contact.png';

const Contact = () => {
    return (
        <>
            <div className='container pt-3' id='contact'>
                <div className='row gy-4 align-items-center'>
                    <div className='col-lg-6 bannercontent'>
                        <h2>Ready To Use Our App With No Hidden Malware</h2>
                        <p>Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus velit quis. Nunc mollis venenatis metus nec aliquet.</p>
                        <input type="text" className="form-control form-control-custom email" placeholder="Enter your email address..." aria-label="email" />
                        <p className='pt-4' style={{ fontSize: '14px' }}>Already a member? Sign In</p>
                    </div>
                    <div className='col-lg-6'>
                        <img src={contact} alt='contact' className='w-100' />
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5' style={{ backgroundColor: '#3921F5', color: '#FFFFFF', padding: '55px 15px' }}>
                <div className='row text-center justify-content-center'>
                    <div className='col-md-6'>
                        <h2 className='mb-3'>We Help To GrowYour Business
                        </h2>
                        <p style={{ color: '#FFFFFF', fontWeight: '300', fontSize: '15px' }}>Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='row pt-33 text-center justify-content-evenly'>
                        <div className='col-3'>
                            <div className='count2'>
                                <h1 className='mb-0'>142</h1>
                                <p>New Features</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='count2'>
                                <h1 className='mb-0'>28k</h1>
                                <p>New Features</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='count2'>
                                <h1 className='mb-0'>53M</h1>
                                <p>New Features</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='count2'>
                                <h1 className='mb-0'>90%</h1>
                                <p>New Features</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact