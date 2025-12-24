import { Container, Row, Col, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="projects-wrapper page">
      <Container>
        <h2 className="text-center mb-5"></h2>

        <Row>
          {/* PROJECT 1 */}
          <Col md={4} className="mb-4">
            <div className="project-card">
              <img
                src="project1.jpg"
                alt="project"
                className="w-100 project-img"
              />

              <div className="project-body">
                <div className="project-title">
                  Text File Compression
                </div>

                <div className="project-text">
                  Implemented Huffman Coding using Python and Data Structures.
                  Achieved file size reduction up to 58%.
                </div>

                <Button
                  className="project-btn mt-3"
                  href="https://github.com/"
                  target="_blank"
                >
                  View Project
                </Button>
              </div>
            </div>
          </Col>

          {/* PROJECT 2 */}
          <Col md={4} className="mb-4">
            <div className="project-card">
              <img
                src="project2.jpg"
                alt="project"
                className="w-100 project-img"
              />

              <div className="project-body">
                <div className="project-title">
                    Email Spam Detection System
                </div>

                <div className="project-text">
                 Email Spam Drection System built using python and machine learing modules. 
                </div>

                <Button
                  className="project-btn mt-3"
                  href="https://github.com/"
                  target="_blank"
                >
                  View Project
                </Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Projects;
