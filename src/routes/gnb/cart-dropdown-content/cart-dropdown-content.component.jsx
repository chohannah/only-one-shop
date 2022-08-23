import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../contexts/cart.context";

import Button from "../../../components/button/button.component";
import CartItem from "../../../components/cart-item/cart-item.component";

import { ReactComponent as CloseIcon } from "../../../assets/icon-close.svg";

const CartDropdownContent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate("/cart");
  };

  const goToAllHandler = () => {
    navigate("/shop");
  };

  return (
    <aside className="cart-dropdown-content">
      <header className="header">
        <h3 className="title">my cart</h3>
        <button className="close" type="button">
          <CloseIcon />
        </button>
      </header>

      <ul className="list">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </ul>

      <footer className="footer">
        <Button buttonType="outlined" buttonSize="md" onClick={goToCartHandler}>
          view cart
          <span className="count">(2)</span>
        </Button>

        <button className="link-to-all" onClick={goToAllHandler}>
          Continue shopping
        </button>
      </footer>
    </aside>
  );
};

export default CartDropdownContent;
