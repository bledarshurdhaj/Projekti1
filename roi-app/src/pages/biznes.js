
import React from 'react';
import './biznes.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Footer from '../components/footer';
import pako1 from '../foto/pakoo.png';
import pako2 from '../foto/foto400.png';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id: 1,
        title: 'PAKO  GAMING CENTERS',
        description: 'Internet të dedikuar me shpejtësi të ndryshme , Shërbime të kombinuara, Internet dhe TV kabllor,Përkrahje teknike 24h',
    },
    {
        id: 2,
        title: 'PAKO  HOTELE',
        description: 'Internet dhe DTV për çdo dhomë , Wi - Fi routera , Shërbim Teknik 24h , Zgjedhje të specializuara , Personel të dedikuar',

    },
    {
        id: 3,
        title: 'PAKO HORECA',
        description: 'Internet dhe DTV , Wi - Fi router për çdo lokal , VPN sipas kërkesës tuaj,Shërbim Teknik 24h',

    },
    {
        id: 4,
        title: 'PAKO OSME',
        description: 'Internet të dedikuar, Internet + DTV , VPN sipas kërkesës tuaj ,Ip Reale ,24h Përkrahje Teknike',

    },
]

function Biznes() {
    return (
        <>
  <div className="eee">
  <img src={pako2}></img>
  </div>
            <div className="first">
     
                <h1 className="font">PAKOT PER BIZNESE</h1>
                <div className="cards">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {data.map(pako => (
                            <SwiperSlide key={pako.id} className="slide">
                                <div className="slide-kontenti">
                                    <div className="pako-image">
                                        <img src={pako1}></img>
                                    </div>
                                    <h3 className="h3">{pako.title} </h3>
                                    <p className="pako-decription">{pako.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};
export default Biznes;