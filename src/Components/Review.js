import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';
import reviewbanner from '../assets/images/reviewbanner.png';

const Review = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <img src={reviewbanner} alt='reviewbanner' className='w-100' />
            </div>

            <div className="container pages">

                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2>What People Say</h2>
                        <p>
                            Quisque fermentum porta tincidunt. Interdum semper.
                            Pellentesque facilisis augue mollis suscipit.
                        </p>
                    </div>
                </div>



                <Swiper className='swiper2'
                    modules={[Autoplay]}
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        0: { slidesPerView: 1 }, // Below 575px
                        575: { slidesPerView: 2 }, // 575px and up
                        991: { slidesPerView: 3 }, // 991px and up
                    }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    <SwiperSlide>
                        <div className="review-box">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div>
                                    <img src={person1} alt="person1" />
                                </div>
                                <p className='mb-0 mt-3'>
                                    “I just simply love tools that make my life easier! I have
                                    everything that I need in one place, and that allows our team
                                    to be more organized and user-oriented.”
                                </p>
                                <div className="text-center">
                                    <h6 className='mb-0'>Jenny Wilson</h6>
                                    <p>Project Manager at Microsoft</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-box">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div>
                                    <img src={person2} alt="person2" className='person' />
                                </div>
                                <p className='mb-0 mt-3'>
                                    “I just simply love tools that make my life easier! I have
                                    everything that I need in one place, and that allows our team
                                    to be more organized and user-oriented.”
                                </p>
                                <div className="text-center">
                                    <h6 className='mb-0'>Mark Johnson</h6>
                                    <p>CTO at Google</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-box">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div>
                                    <img src={person3} alt="person3" className='person' />
                                </div>
                                <p className='mb-0 mt-3'>
                                    “I just simply love tools that make my life easier! I have
                                    everything that I need in one place, and that allows our team
                                    to be more organized and user-oriented.”
                                </p>
                                <div className="text-center">
                                    <h6 className='mb-0'>Sara Lee</h6>
                                    <p>Designer at Apple</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-box">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div>
                                    <img src={person2} alt="person2" className='person' />
                                </div>
                                <p className='mb-0 mt-3'>
                                    “I just simply love tools that make my life easier! I have
                                    everything that I need in one place, and that allows our team
                                    to be more organized and user-oriented.”
                                </p>
                                <div className="text-center">
                                    <h6 className='mb-0'>Sara Lee</h6>
                                    <p>Designer at Apple</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Review;
