import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item-article.css";

interface IProps {
    id?: number;
    title: string;
    text: string;
    price: number;
    handleShow: Function;
}

export const ItemArticle = (prop: IProps) => {
  return (
    <Fragment>
      <Card bg="warning" className="card-content" >
        <Link to={`/articulos/${prop.id}`}><Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1381714954387087361/xqMf9gDl.png" /></Link>
        <Card.Body>
          <div onClick={() => alert("En body")} >
            <Card.Title>{prop.title}</Card.Title>
            <Card.Text>{prop.text}</Card.Text>
          </div>
          <Button variant="secondary" onClick={() => prop.handleShow()}>Editar</Button>
          <div className="price-content"><b>$ {prop.price}</b></div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
