import { useEffect } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Shop/Products.jsx";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice.js";
import Notification from "./components/UI/Notification.jsx";
import { sendCartData, fetchCartData } from "./store/cart-actions.js";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data!",
    //     }),
    //   );
    //   const response = await fetch(
    //     "https://test-ba97c-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     },
    //   );
    //   if (!response.ok) {
    //     throw new Error("Sending cart data failed.");
    //   }
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success",
    //       message: "Sent cart data succesfully!",
    //     }),
    //   );
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error",
    //       message: "Sending cart data failed",
    //     }),
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
