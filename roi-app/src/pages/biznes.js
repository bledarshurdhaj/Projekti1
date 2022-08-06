// import Swiper core and required modules
import React from 'react';
import './biznes.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Footer from '../components/footer';
import foto23 from '../foto/pako23.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id: 1,
        title: 'PAKO CALL  & GAMING CENTERS',
        description: 'Përjeto pasionin unik me platformën tonë. Me më shumë se 200 kanale me super kualitet transmetimi',

    },
    {
        id: 2,
        title: 'PAKO  HOTELE',
        description: 'Përjeto pasionin unik me platformën tonë. Me më shumë se 250 kanale me super kualitet transmetimi',

    },
    {
        id: 3,
        title: 'PAKO HORECA',
        description: 'Përjeto pasionin unik me platformën tonë. Me më shumë se 300 kanale me super kualitet transmetimi',

    },
    {
        id: 4,
        title: 'PAKO OSME',
        description: 'Përjeto pasionin unik me platformën tonë. Me më shumë se 300 kanale me super kualitet transmetimi',

    },
]

function Biznes() {
    return (
        <>
<div className="first">
    <h1 className="font">PAKOT PER BIZNESE</h1>
    <div className="cards">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {data.map(pako => (
                <SwiperSlide key={pako.id} className="slide">
                    <div className="slide-kontenti">
                        <div className="pako.image">
                            <img src={foto23} alt='' className="user-photo"></img>
                        </div>
                        <h5>{pako.title}
                        </h5>
                        <p className="pako-decription"> " <i>{pako.description}</i>"</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        </div>
        </div>
        <div>
            <Footer/>
        </div>
</>
    );
};
export default Biznes;