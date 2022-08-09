import React, { useState } from 'react';
import '../Style/kyquni.scss';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Footer from '../components/footer.js';

function Kyquni() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <div className="textarea">
        <h1>Ju lutem Plotsoni te dhenat per tu Kyqur!!!</h1>
      </div>
      <div className="Firsttt">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Emri</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Sheno Emrin"

              />
              <Form.Control.Feedback>Shum mir!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Mbiemri</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Sheno Mbiemrin"
              />
              <Form.Control.Feedback>Shum mir!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ju lutem shenoni Username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Qyteti</Form.Label>
              <Form.Control type="text" placeholder="Sheno Qytetin" required />
              <Form.Control.Feedback type="invalid">
                Ju lutemi jepni një qytet .
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Shteti</Form.Label>
              <Form.Control type="text" placeholder="Sheno shtetin" required />
              <Form.Control.Feedback type="invalid">
                Ju lutemi jepni një Shtet.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Ju lutemi jepni një Zip code te vlefshem.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Pajtohuni me termat dhe kushtet?"
              feedback="Duhet të bini dakord përpara se ti dorëzoni."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Kyquni</Button>
        </Form>

      </div>

      <Footer />
    </>

  );
}
export default Kyquni;
