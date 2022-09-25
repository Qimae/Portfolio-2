import React from 'react'
import './Portfolio.css';
import Company1 from '../../assets/company1.png';
import Company2 from '../../assets/company2.png';
import Company3 from '../../assets/company3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';



const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <a href=''>
                    <img src={Company1} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='http://jogolo-plaza.000webhostapp.com/'>
                    <img src={Company2} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                <a href='https://letsbuidit.netlify.app/'>
                    <img src={Company3} alt="" /></a>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Portfolio