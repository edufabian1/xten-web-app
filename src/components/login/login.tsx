import { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IModalProps } from "../../models/modalProps";
import { IUsuario } from "../../models/usuario";
//TODO: Validar tipo de boton Enviar (deberia ser tipo submit)
export const Login = (prop: IModalProps) => {
  const [user, setUser] = useState<IUsuario>({ user: "", password: "" });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //const value = target.type === "checkbox" ? target.checked : target.value;
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = () => {
    alert("Bienvenido " + user.user);
    prop.handleClose();
  };

  return (
    <Fragment>
      <Modal show={prop.isVisible} onHide={prop.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="user"
                name="user"
                placeholder="usuario"
                onChange={(event) => handleOnChange(event as any)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={(event) => handleOnChange(event as any)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => prop.handleClose()}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleOnSubmit}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
