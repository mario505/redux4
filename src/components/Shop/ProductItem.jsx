import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice.js";
import Card from "../UI/Card.jsx";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className="pitem">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="pprice">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="pactions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
