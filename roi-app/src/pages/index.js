import React from 'react';
import './index.scss';
import foto1 from '../foto/foto1.png';
import foto2 from '../foto/pakofull.png';
import foto3 from '../foto/pakopremi.png';
import foto4 from '../foto/pakolight.jpeg';
import artikull1 from '../foto/artikulli1.jpeg';
import artikull2 from '../foto/artilkull2.jpeg';
import artikull3 from '../foto/artikull3.jpeg';
import Footer from '../footer.js';

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
      <div className="lajmett">
      <div className="lajmet1">
        <div className="artikulli1">
          <img src={artikull1}></img>
        </div>
        <p>Ekskluzive: “Big Brother” së shpejti për herë të parë në Kosovë | ArtMotion dhe KlanKosova

Formati “Big Brother” po zgjerohet në një treg të ri mediatik, duke u transmetuar për herë të parë në territorin e Republikës të Kosovës, pas marrëveshjes me Banijay Rights.

</p>
      </div>
      <div className="lajmet2">
        <div className="artikulli2">
          <img src={artikull2}></img>
          <h3>bledi</h3>
        </div>
      </div>
      <div className="lajmet3">
        <div className="artikulli3">
          <img src={artikull3}></img>
          <h3>bledi</h3>
        </div>     
         </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
    </>
  );
};

export default Home;
