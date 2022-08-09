import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import React,{useState} from 'react';
import '../Style/lajme.scss';

function Lajme  () {

const [lajme,setLajme] = useState({
  id:"1",
  title:"Ekskluzive: “Big Brother” së shpejti për herë të parë në Kosovë | ArtMotion dhe KlanKosova",
  description:"Formati “Big Brother” po zgjerohet në një treg të ri mediatik, duke u transmetuar për herë të parë në territorin e Republikës të Kosovës, pas marrëveshjes me Banijay Rights.",
  image:"",
},
{
  id:"2",
  title:"Ekskluzive: “Big Brother” së shpejti për herë të parë në Kosovë | ArtMotion dhe KlanKosova",
  description:"Formati “Big Brother” po zgjerohet në një treg të ri mediatik, duke u transmetuar për herë të parë në territorin e Republikës të Kosovës, pas marrëveshjes me Banijay Rights.",
  image:""
}
)



  return (
    <>
    <div className="firstt">
   
    <Card style={{ width: '10cm',}}>

      <Card.Img  style={{ width: '8cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px',fontStyle :'bold'}}>{lajme.title}</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>{lajme.description }</Card.Text>
        <Button variant="primary">Lexo me shum  </Button>
      </Card.Body>
    </Card>
   
    <Card style={{ width: '10cm',}}>

      <Card.Img  style={{ width: '8cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'20px',fontStyle :'bold'}}>{lajme.title}</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>{lajme.description }</Card.Text>
        <Button variant="primary">Lexo me shum  </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10cm',}}>

<Card.Img  style={{ width: '8cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
<Card.Body>
  <Card.Title style={{fontSize:'20px',fontStyle :'bold'}}>{lajme.title}</Card.Title>
  <Card.Text style={{fontSize:'15px'}}>{lajme.description }</Card.Text>
  <Button variant="primary">Lexo me shum  </Button>
</Card.Body>
</Card>    

    </div>
    </>
    
  );
  }

export default Lajme;