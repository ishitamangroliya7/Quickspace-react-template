import React from 'react'
import Icon1 from '../assets/images/Icon1.svg';
import Icon2 from '../assets/images/Icon2.svg';
import Icon3 from '../assets/images/Icon3.svg';
import roundarrow from '../assets/images/roundarrow.svg';
import Right from '../assets/images/Right.png';

const Pages = () => {
    return (
        <>
            <div className='container pages' id='pages'>
                <div className='row justify-content-center text-center'>
                    <div className='col-md-6'>
                        <h2>How To Grow Your Business</h2>
                        <p>Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.</p>
                    </div>
                </div>

                <div className='row justify-content-between g-4 pt-3 pb-5'>
                    <div className='col-md-4'>
                        <div className='page-box'>
                            <img src={Icon1} alt='icon1' />
                            <h6>Active User Analytics</h6>
                            <p style={{ lineHeight: '35px' }}>Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='page-box'>
                            <img src={Icon2} alt='icon1' />
                            <h6>Active User Analytics</h6>
                            <p style={{ lineHeight: '35px' }}>Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='page-box'>
                            <img src={Icon3} alt='icon1' />
                            <h6>Active User Analytics</h6>
                            <p style={{ lineHeight: '35px' }}>Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                        </div>
                    </div>
                </div>

                <div className='row text-center'>
                    <div className='col-12'>
                        <small>Approx <span>875+</span>  team members ready to online support for you</small>
                    </div>
                </div>

                <div className='row align-items-center position-relative about'>
                    <img src={roundarrow} alt='roundarrow' className='roundarrow' />
                    <div className='col-lg-6 bannercontent'>
                        <h2>Better Security To Better Protection An Experience Of Strength.</h2>
                        <p>Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.</p>
                        <hr></hr>
                        <h6>Well Organised User Interface</h6>
                        <p>Etiam id euismod odio. Ut euismod sem a lacus fringilla.</p>
                        <h6>Completely Bug Free</h6>
                        <p>Cras eleifend leo ac varius tristique suspendisse.</p>
                    </div>
                    <div className='col-lg-6'>
                        <img src={Right} alt='right' className='w-100 rightimg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pages