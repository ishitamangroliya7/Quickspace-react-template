import React from 'react';
import left from '../assets/images/left.png';

const Pages = () => {
    return (
        <>
            <div className='container pages' id='pricing'>
                <div className='row align-items-center about2'>
                    <div className='col-lg-6'>
                        <img src={left} alt='right' className='w-100 leftimg' />
                    </div>
                    <div className='col-lg-6 bannercontent'>
                        <h2>Performance Is The Key To Most People Achieving A Better Future</h2>
                        <p>Etiam euismod odio euismod lacus fringilla hendrer.</p>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Custom Edit Tool Application
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='m-0'>Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Built In Safty Chat Mode Enabled
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='m-0'>Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Foster Trust Builds System Always Open
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='m-0'>Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Create Auto Layouts In App Interface
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='m-0'>Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pages;
