import Card from "../UI/Card.jsx";
// import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;

  return (
    <li className="pitem">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="pprice">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="pactions">
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
