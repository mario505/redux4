// import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className="button">
      <span>My Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default CartButton;
