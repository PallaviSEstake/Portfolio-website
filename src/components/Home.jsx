import { Container, Row, Col, Button, Image } from "react-bootstrap";

function Home() {
  return (
    <div className="page home-page">
      <Container>
        <Row className="home-row">
          <Col md={4} className="home-text">
            <h1>Welcome</h1>
            <p>
              Hi, I’m Pallavi. I am a Computer Science student and web
              developer. I enjoy creating clean, user-friendly websites and
              learning new technologies.
            </p>
            <Button href="/Contact" className="btn-soft">
              Contact
            </Button>
          </Col>

          <Col md={5} className="home-image">
            <Image src="photo.jpg" roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
