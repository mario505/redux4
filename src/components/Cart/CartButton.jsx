import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
