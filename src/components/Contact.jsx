import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./App.css"

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xxx",
      "template_xxx",
      e.target,
      "public_xxx"
    );

    e.target.reset();
    alert("Message sent successfully");
  };

  return (
    <div className="contact-wrapper">
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT – FORM */}
          <Col md={6}>
            <div className="contact-form-box">
              <h4 className="mb-4">Send me a message</h4>

              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Control name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="subject" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Message"
                  />
                </Form.Group>

                <Button type="submit" className="send-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* RIGHT – INFO */}
          <Col md={6}>
            <div className="contact-info-box text-center">
              <Image src="photo.jpg" />

              <h4 className="mb-3">Contact Me</h4>
              <p className="mb-4">
                I am open for opportunities, projects, or a friendly chat.
              </p>

              <div className="contact-info-item">
                <FaMapMarkerAlt /> Maharashtra, India
              </div>

              <div className="contact-info-item">
                <FaPhone /> +91 XXXXXXXXXX
              </div>

              <div className="contact-info-item">
                <FaEnvelope /> pallaviestake2004@gmail.com
              </div>

              <div className="contact-info-item">
                <FaGlobe /> linkedin.com/in/pallavi-estake
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Contact;
