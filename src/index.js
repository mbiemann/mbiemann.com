// To avoid the white flash while load
document.documentElement.setAttribute("data-bs-theme", "dark")

import { StrictMode } from "react";
import { Container, Row, Col, Card, Stack, ListGroup, Button } from 'react-bootstrap';
import { Github, Linkedin, CCircle } from 'react-bootstrap-icons';
import { createRoot } from "react-dom/client";

function App() {
  return (
    <Container fluid className="main">
      <Row className="h-100 p-3 opacity-75">
        <Col md={{ span: 6, offset: 6 }}>
          <Card className="h-100 p-3">
            <Card.Body>
              <Stack gap={3} className="h-100">
                <h1 className="mt-auto">Marcell Biemann</h1>
                <ListGroup>
                  <ListGroup.Item action href="https://github.com/mbiemann"><Github size={25} className="me-2" />mbiemann</ListGroup.Item>
                  <ListGroup.Item action href="https://www.linkedin.com/in/mbiemann/"><Linkedin size={25} className="me-2" />in/mbiemann</ListGroup.Item>
                </ListGroup>
                <Container className="mt-auto fw-light text-end">
                  <a className="text-white-50 link-underline link-underline-opacity-0" href="https://github.com/mbiemann/mbiemann.com">
                    mbiemann
                    <CCircle className="mx-2" />
                    2024
                  </a>
                </Container>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
