import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

function Skills() {
  return (
    <Container className="page">
      <h2 className="text-center section-title">My Skills</h2>

      <Row>
        <Col md={4} className="mb-4">
          <div className="skill-box">
            <FaCode className="skill-icon" />
            <h5>Programming</h5>
            <p>C, Java, Python, SQL</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="skill-box">
            <FaLaptopCode className="skill-icon" />
            <h5>Web Development</h5>
            <p>HTML, CSS, Bootstrap, React</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="skill-box">
            <FaTools className="skill-icon" />
            <h5>Tools & Libraries</h5>
            <p>VS Code, PyCharm, MySQL, Pandas, NumPy</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
