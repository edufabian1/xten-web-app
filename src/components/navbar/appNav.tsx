import { useState } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Login } from "../login/login";

export const AppNav = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleShow = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">XTEN</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/articulos">Inicio</Link></Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="secondary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Login isVisible={showLogin} handleClose={handleClose} />
    </div>
  );
};
