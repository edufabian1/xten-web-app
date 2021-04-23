import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { IArticle } from "../../models/article";
import { FormArticle } from "../article-form/form-article";
import { ItemArticle } from "../article-item/item-article";
import "./list-articles.css";

export const ListArticles = () => {
  const results: IArticle[] = [
    {
      id: 1,
      title: "Producto 1",
      description:
        "Type '{1}' is missing the following properties from type 'IProps': title, text, price",
      salePrice: 250,
      purchasePrice: 125,
      size: "S",
      brand: "Adidas"
    },
    {
      id: 2,
      title: "Producto 2",
      description:
        "Type '{2}' is missing the following properties from type 'IProps': title, text, price",
      salePrice: 52,
      purchasePrice: 26,
      size: "M",
      brand: "Nike"
    },
    {
      id: 3,
      title: "Producto 3",
      description:
        "Type '{3}' is missing the following properties from type 'IProps': title, text, price",
      salePrice: 1250,
      purchasePrice: 625,
      size: "XS",
      brand: "Under Armour"
    },
    {
      id: 4,
      title: "Producto 4",
      description:
        "Type '{4}' is missing the following properties from type 'IProps': title, text, price",
      salePrice: 400,
      purchasePrice: 200,
      size: "L",
      brand: "Adidas"
    },
  ];

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [article, setArticle] = useState<IArticle>();

  const handleShow = () => {
    setShowLogin(true);
    setArticle(undefined);
  }
  const handleClose = () => setShowLogin(false);
  
  const handleShowEdit = (item: IArticle) => {
    setShowLogin(true);
    setArticle(item);
  }

  return (
    <Fragment>
      <div className="list-cards-content">
        {results.map((item, index) => (
          <div key={item.id}>
            <ItemArticle
              id={item.id}
              title={item.title}
              text={item.description}
              price={item.salePrice}
              handleShow={() => handleShowEdit(item)}
            />
          </div>
        ))}
      </div>
      <Button variant="secondary" className="btn-add-article" onClick={handleShow} >
        Agregar articulo
      </Button>
      <FormArticle isVisible={showLogin} handleClose={handleClose} article={article} />
    </Fragment>
  );
};
