import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";

import {
  FaUserGraduate,
  FaProjectDiagram,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

function About() {
  return (
    <div className="mt-5"> 
      <Container className="page">
        <h2 className="text-center mb-4">About Me</h2>

        {/* Profile Summary */}
        <Card className="mb-4">
          <Card.Body>
            <h5>
              <FaUserGraduate className="icon" /> Profile Summary
            </h5>
            <p>
              I am Pallavi Estake, a Computer Science Engineering student with
              strong interest in web development and data-driven applications. I
              enjoy building efficient, secure, and user-friendly software.
            </p>
          </Card.Body>
        </Card>

        <Row>
          {/* LEFT COLUMN – EDUCATION (UPDATED STYLE) */}
          <Col md={6}>
            <h4 className="mb-3">Education</h4>

            <div className="education-card">
              <div className="education-title">
                B.Tech – Computer Science and Engineering
              </div>
              <div className="education-school">
                CSMSS Chh. Shahu College of Engineering, Chhatrapati
                Sambhajinagar
              </div>
              <div className="education-year">
                CGPA: 7.0 (till 5th Semester) | 2022 – 2026
              </div>
            </div>

            <div className="education-card">
              <div className="education-title">12th (HSC) – 74.67%</div>
              <div className="education-school">
                Shree D.H.G.P. Medium & Higher Secondary School, Newasa
              </div>
              <div className="education-year">2021 – 2022</div>
            </div>

            <div className="education-card">
              <div className="education-title">10th (SSC) – 84.00%</div>
              <div className="education-school">
                pShree D.H.G.P. Medium & Higher Secondary School, Newasa
              </div>
              <div className="education-year">2019 – 2020</div>
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={6}>
            {/* Project */}
            <Card className="mb-3">
              <Card.Body>
                <h5>
                  <FaProjectDiagram className="icon" /> Project
                </h5>
                <p>
                  <strong>Text File Compression using Huffman Coding</strong>
                  <br />
                  Implemented using Python and Data Structures. Reduced file
                  size up to 58%.
                </p>
              </Card.Body>
            </Card>

            {/* Certifications */}
            <Card className="mb-3">
              <Card.Body>
                <h5>
                  <FaCertificate className="icon" /> Certifications
                </h5>
                <p>
                  • Programming in Java – NPTEL
                  <br />
                  • Database Management System – NPTEL
                  <br />
                  • Compiler Design – NPTEL
                  <br />
                  • Python Basics – Infosys
                  <br />
                  • HTML & CSS – Infosys
                  <br />• Google Cybersecurity – Coursera
                </p>
              </Card.Body>
            </Card>

            {/* Achievements */}
            <Card className="mb-3">
              <Card.Body>
                <h5>
                  <FaTrophy className="icon" /> Achievements
                </h5>
                <p>
                  • HackerRank C – 4 Star
                  <br />
                  • HackerRank Java – 3 Star
                  <br />• HackerRank SQL – 3 Star
                </p>
              </Card.Body>
            </Card>

            {/* Resume */}
            <Card className="mb-3">
              <Card.Body>
                <Button variant="primary" href="resume.jpg" download>
                  Download Resume
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
