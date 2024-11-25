import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/autoplay'; 
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 

import image1 from '../assets/images/image1.svg'; 
import image2 from '../assets/images/image2.svg';
import image3 from '../assets/images/image3.svg';
import image4 from '../assets/images/image4.svg';

const LogoSwiper = () => {
    const logos = [image1, image2, image3, image4, image3];

    return (
        <div className="logo-swiper-container container">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={4}
                breakpoints={{
                    575: { slidesPerView: 3 },
                    425: { slidesPerView: 2 }, 
                    0: { slidesPerView: 1 }, 
                    991: { slidesPerView: 4 } 
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }} 
                loop={true} 
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="swiper-logo"
                            style={{ width: '100%', objectFit: 'contain' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LogoSwiper;
