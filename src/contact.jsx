import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contactform = () => {
  const submitform = (e) => {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("selectgender").value;
    const message = document.getElementById("messagedata").value;
    e.preventDefault();
    if (name && gender && message) {
      document.getElementById("hellodata").innerHTML =
        "thank you for submitting";

      setTimeout(() => {
        document.getElementById("hellodata").innerHTML = "";
      }, 3000);
    }
  };

  const resetdata = () => {
    document.getElementById("contactform").reset();
  };

  return (
    <Container className="container1">
      <Form
        id="contactform"
        onSubmit={(e) => {
          submitform(e);
        }}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" id="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="selectgender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control as="select" id="selectgender">
            <option value="">Select Option</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="messagedata">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" placeholder="Message" id="messagedata" />
        </Form.Group>

        <Row>
          <Col md={3}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={(e) => resetdata(e)}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
      <div id="hellodata"></div>
    </Container>
  );
};

export default Contactform;
