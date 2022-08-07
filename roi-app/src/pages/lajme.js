import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './lajme.scss';

function BasicExample() {

  return (
    <>
    <div className="firstt">
    <Card style={{ width: '10cm',}}>
      <Card.Img  style={{ width: '9cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10cm' }}>
      <Card.Img  style={{ width: '9cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10cm' }}>
      <Card.Img  style={{ width: '9cm' }} variant="top" src="https://www.artmotion.net/wp-content/uploads/2022/06/Artikulli-Portal-1536x926.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
    
  );
}

export default BasicExample;