import { Fragment, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { IArticle } from "../../models/article";
import { IModalPropsWithForm } from "../../models/modalProps";
import "./form-article.css";

interface IData {
  id: number;
  value: string;
}

export const FormArticle = (prop: IModalPropsWithForm) => {
  const brands: IData[] = [ { id: 1, value: "Adidas" }, { id: 2, value: "Nike" }, { id: 3, value: "Under Armour" }, { id: 4, value: "Otros" } ];
  const sizes: IData[] = [ { id: 1, value: "XS" }, { id: 2, value: "S" }, { id: 3, value: "M" }, { id: 4, value: "L" } ];

  const [article, setArticle] = useState<IArticle>({
    title: "",
    description: "",
    salePrice: 0,
    purchasePrice: 0,
    size: "S",
    brand: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //const value = target.type === "checkbox" ? target.checked : target.value;
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const [validated, setValidated] = useState<boolean>(false);

  const handleOnSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    else if (validated) {
      prop.handleClose();
    }
    
    setValidated(true);
  };

  return (
    <Fragment>
      <Modal show={prop.isVisible} onHide={prop.handleClose}>
        <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo artículo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Título"
                onChange={handleOnChange}
                defaultValue={prop.article ? prop.article.title : ""}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" name="description" rows={4} onChange={handleOnChange} defaultValue={prop.article ? prop.article.description : ""} required />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPurchasePrice">
                <Form.Label>Precio de compra</Form.Label>
                <Form.Control
                  type="number"
                  name="purchasePrice"
                  placeholder="Precio de compra"
                  min="0"
                  defaultValue={prop.article ? prop.article.purchasePrice : ""}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formSalePrice">
                <Form.Label>Precio de venta</Form.Label>
                <Form.Control
                  type="number"
                  name="salePrice"
                  placeholder="Precio de venta"
                  min="0"
                  defaultValue={prop.article ? prop.article.salePrice : ""}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridSize">
                <Form.Label>Talle</Form.Label>
                <Form.Control as="select" defaultValue={prop.article ? prop.article.size : "Seleccionar..."}>
                  <option value="Seleccionar..." disabled>Seleccionar...</option>
                  {sizes.map((item, index) => (
                    <option key={item.id} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridBrand">
                <Form.Label>Marca</Form.Label>
                <Form.Control as="select" defaultValue={prop.article ? prop.article.brand : "Seleccionar..."}>
                  <option value="Seleccionar..." disabled>Seleccionar...</option>
                  {brands.map((item, index) => (
                    <option key={item.id} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => prop.handleClose()}>
              Cerrar
            </Button>
            <Button
              variant="warning"
              type="submit"
            >
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};
