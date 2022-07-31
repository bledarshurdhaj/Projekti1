import React from 'react';
import './index.scss';
import foto1 from '../foto/foto1.png';
import foto2 from '../foto/pakofull.png';
import foto3 from '../foto/pakopremi.png';
import foto4 from '../foto/pakolight.jpeg';
import artikull1 from '../foto/artikulli1.jpeg';



const Home = () => {
  return (
    <>
      <div className="foto1">
        <img src={foto1}></img>
      </div>
      <div className="fotot">

        <img src={foto2}></img>
        <img src={foto3}></img>
        <img src={foto4}></img>
      </div>
        <div className="lajmet">
        <h1>Lajmet e Fundit</h1>
        </div>
        <div className="lajmet1">
        <div className="artikulli1">
        <img src={artikull1}></img>
        </div>
        </div>
        <div className="lajmet1">
        <div className="artikulli1">
        <img src={artikull1}></img>
        </div>
        </div>
        <div className="lajmet1">
        <div className="artikulli1">
        <img src={artikull1}></img>
        </div>
        </div>
    </>
  );
};

export default Home;
