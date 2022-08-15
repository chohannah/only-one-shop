import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../contexts/cart.context";

import Button from "../../../components/button/button.component";
import CartItem from "../../../components/cart-item/cart-item.component";

import { ReactComponent as CloseIcon } from "../../../assets/icon-close.svg";

const CartDropdownContent = () => {
  const { cartItems } = useContext(CartContext);

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
        <Link className="link-to-cart" to="/cart">
          <Button buttonType="outlined" buttonSize="md">
            view cart
            <span className="count">(2)</span>
          </Button>
        </Link>

        <Link className="link-to-all" to="/all">
          Continue shopping
        </Link>
      </footer>
    </aside>
  );
};

export default CartDropdownContent;
