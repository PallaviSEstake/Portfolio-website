


import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" expanded={expanded} className="gradient-nav">
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          Pallavi
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={() => setExpanded(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaHome /> Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => setExpanded(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaUser /> About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/skills"
              onClick={() => setExpanded(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaTools /> Skills
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/projects"
              onClick={() => setExpanded(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaProjectDiagram /> Projects
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={() => setExpanded(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaEnvelope /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
