import { useState } from "react";
import { Button, Form, Modal, Nav, Navbar } from "react-bootstrap";

export const AppNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">XTEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="primary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="user" placeholder="usuario" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
