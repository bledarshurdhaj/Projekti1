import React ,{Component}from 'react';
import './index.scss';
import foto1 from '../foto/foto1.png';
import foto2 from '../foto/pakofull.png';
import foto3 from '../foto/pakopremi.png';
import foto4 from '../foto/pakolight.jpeg';
import artikull1 from '../foto/artikulli1.jpeg';
import artikull2 from '../foto/artilkull2.jpeg';
import artikull3 from '../foto/artikull3.jpeg';
import Footer from '../footer.js';


class App extends React.Component{
  
constructor() {
super();
this.state = {displayBio: false }
console.log ('Component this', this);
this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
}
toggleDisplayBio(){
this.setState({displayBio:!this.state.displayBio});
}

  render(){
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
        <h1>Lajmet e Fundit{this.props.name}</h1>
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
          <p>Risitë në Artmotion nuk kanë të ndalur.

Pas platformes Digitalb dhe SuperSport, Artmotion do te sjell edhe ngjarjet më madhore të futbollit evropian dhe botëror ndërsa ajka mbi ëmbëlsirë janë: të gjitha ndeshjet e Përfaqësueses së Kosovës dhe te gjitha  Përfaqësueset Evropiane deri në vitin 2028.
</p>
        </div>
      </div>
      <div className="lajmet3">
        <div className="artikulli3">
          <img src={artikull3}></img>
          <p>Zbritja e madhe në Artmotion vjen bashkë me Digitalb
Data e shumëpritur nga të gjithë klientet,1 Maji shënon rritjen edhe më të madhe të Artmotion, tani duke pershirë në përmbajtjen e vet të gjitha kanalet e Digitalb. Nga 1 Maji të gjithë klienteve të Artmotion do të ju pasurohet më...
</p>
        </div>     
         </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
    </>
  );
}
}

export default App;
