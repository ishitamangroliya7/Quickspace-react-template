import React from 'react';
import portfolio from '../assets/images/portfolio.png';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import Review1 from '../assets/images/Review1.png';
import Review2 from '../assets/images/Review2.png';
import Review3 from '../assets/images/Review3.png';
import icon6 from '../assets/images/icon6.svg';
import icon5 from '../assets/images/icon5.svg';
import icon7 from '../assets/images/icon7.svg';
import icon4 from '../assets/images/icon4.svg';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
        this.interval = null;
    }

    componentDidMount() {
        this.startCounter();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startCounter = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                const newCounter = prevState.counter >= 50 ? 1 : prevState.counter + 1;
                return { counter: newCounter };
            });
        }, 100);
    };

    render() {
        const { counter } = this.state;

        return (
            <>
                <div className='container pages' id='portfolio'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-6'>
                            <h2>Why Will You Choose Our Application</h2>
                            <p>
                                Class aptent taciti sociosqu ad litora torquen conubia nostramase
                                inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
                            </p>
                        </div>
                    </div>
                    <div className='row justify-content-center portfolio'>
                        <img src={pic1} alt='pic1' className='pic1' />
                        <img src={pic2} alt='pic2' className='pic2' />
                        <img src={pic3} alt='pic3' className='pic3' />
                        <img src={Review1} alt='Review1' className='Review1' />
                        <img src={Review2} alt='Review2' className='Review2' />
                        <img src={Review3} alt='Review3' className='Review3' />

                        <div className='col-lg-6 col-sm-7'>
                            <img src={portfolio} alt='portfolio' className='w-100' />
                            <div className='count d-flex flex-column text-center'>
                                <span><h1 className='mb-0'>{counter}M+</h1></span>
                                <p className='text-dark mb-0'>Active Members</p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-between g-4 pt-5 pb-5'>
                        <div className='col-lg-3 col-sm-6 d-flex'>
                            <div className='page-box'>
                                <img src={icon4} alt='icon1' />
                                <h6>Creative Ideas</h6>
                                <p style={{ lineHeight: '35px' }}>Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 d-flex'>
                            <div className='page-box'>
                                <img src={icon5} alt='icon1' />
                                <h6>Awesome Design</h6>
                                <p style={{ lineHeight: '35px' }}>Integer a elit pellentesqu e semper sem ultricies.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 d-flex'>
                            <div className='page-box'>
                                <img src={icon6} alt='icon1' />
                                <h6>Best Features</h6>
                                <p style={{ lineHeight: '35px' }}>Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 d-flex'>
                            <div className='page-box'>
                                <img src={icon7} alt='icon1' />
                                <h6>Easy Solutions</h6>
                                <p style={{ lineHeight: '35px' }}>Fusce risus lorem pulvin ar eu posuere vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Portfolio;
