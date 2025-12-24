import { Container, Row, Col, Button, Image } from "react-bootstrap";

function Home() {
  return (
    <div className="page">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 style={{ fontSize: "48px" }}>Welcome</h1>
            <p style={{ maxWidth: "520px", lineHeight: "1.8" }}>
              Hi, I’m Pallavi. I am a Computer Science student and web developer.
              I enjoy creating clean, user-friendly websites and learning
              new technologies.
            </p>
            <Button className="btn-soft">Contact</Button>
          </Col>

          <Col md={5} className="text-center">
            <Image
              src="photo.jpg"
              roundedCircle
              style={{ width: "260px", border: "6px solid #ede7e3" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
