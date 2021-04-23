import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router";
import { IArticle } from "../../models/article";

interface IPathParam {
  id: string;
}

export const ArticlePage = () => {
  const params = useParams<IPathParam>();
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    if (params.id) {
      //TODO: obtener de api y setear article
      setArticle({
        id: 123,
        title: "Producto Dummy",
        description:
          "Type '{1}' is missing the following properties from type 'IProps': title, text, price, Type '{1}' is missing the following properties from type 'IProps': title, text, price",
        salePrice: 1235,
        purchasePrice: 125,
        size: "S",
        brand: "Adidas",
      });
    }
  }, []);

  return (
    <Jumbotron style={{ margin: "70px" }}>
      <Row>
        <Col xs={12} md={8}>
          <h1>{article?.title}</h1>
          <p>{article?.description}</p>
          
          <Row style={{ margin: "25px" }}>
            <Row>
              <Col xs={6} md={5}><b>Marca:</b></Col>
              <Col>{article?.brand}</Col>
            </Row>
          </Row>
          <Row style={{ margin: "25px" }}>
            <Row>
              <Col xs={6} md={3}><b>Talle:</b></Col>
              <Col>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">XS</Button>
                  <Button variant="secondary">S</Button>
                  <Button variant="secondary">M</Button>
                  <Button variant="secondary">L</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col xs={6} md={8}>
              <Button variant="warning">Comprar</Button>
            </Col>
            <Col xs={3} md={4}>
              <h3>$ {article?.salePrice}</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <Card.Img
            variant="top"
            src="https://pbs.twimg.com/profile_images/1381714954387087361/xqMf9gDl.png"
          />
        </Col>
      </Row>
    </Jumbotron>
  );
};
