// import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
// import "./App.css";

// function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm("service_xxx", "template_xxx", e.target, "public_xxx");

//     e.target.reset();
//     alert("Message sent successfully");
//   };

//   return (
//     <div className="contact-wrapper">
//       <Container>
//         <Row className="align-items-center">
//           {/* LEFT – FORM */}
//           <Col md={6}>
//             <div className="contact-form-box">
//               <h4 className="mb-4">Send me a message</h4>

//               <Form onSubmit={sendEmail}>
//                 <Form.Group className="mb-3">
//                   <Form.Control name="name" placeholder="Name" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Control name="email" placeholder="Email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Control name="subject" placeholder="Subject" />
//                 </Form.Group>

//                 <Form.Group className="mb-4">
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     name="message"
//                     placeholder="Message"
//                   />
//                 </Form.Group>

//                 <Button type="submit" className="send-btn">
//                   Send Message
//                 </Button>
//               </Form>
//             </div>
//           </Col>

//           {/* RIGHT – INFO */}
//           <Col md={6}>
//             <div className="contact-info-box text-center">
//               <Image src="photo.jpg" />

//               <h4 className="mb-3">Contact Me</h4>
//               <p className="mb-4">
//                 I am open for opportunities, projects, or a friendly chat.
//               </p>

//               <div className="contact-info-item">
//                 <FaMapMarkerAlt /> Maharashtra, India
//               </div>

//               <div className="contact-info-item">
//                 <FaPhone /> +91 8262891302
//               </div>

//               <div className="contact-info-item">
//                 <FaEnvelope /> pallaviestake2004@gmail.com
//               </div>

//               <div className="contact-info-item">
//                 <FaGlobe /> linkedin.com/in/pallavi-estake
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Contact;



           
import { Container, Row, Col, Form, Button, Image, Toast } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xxx", "template_xxx", e.target, "public_xxx");

    e.target.reset();
    setShowToast(true);
  };

  return (
    <div className="contact-wrapper">
      <Container>
        <Row className="align-items-center">
          {/* LEFT – FORM */}
          <Col md={6}>
            <div className="contact-form-box" >
              <h4 className="mb-4">Send me a message</h4>

              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Control name="name" placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control name="email" placeholder="Email" required />
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
                    required
                  />
                </Form.Group>

                <Button type="submit" className="send-btn">
                  Send Message
                </Button>
              </Form>
            </div><br />
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
                <FaPhone /> +91 8262891302
              </div>
              <div className="contact-info-item">
                <FaEnvelope /> pallaviestake2004@gmail.com
              </div>

              {/* SOCIAL ICONS */}
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank">
                  <FaGithub />
                </a>
                <a href="mailto:pallaviestake2004@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* TOAST */}
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          className="success-toast"
        >
          <Toast.Body>✅ Message sent successfully</Toast.Body>
        </Toast>
      </Container>
    </div>
  );
}

export default Contact;
