import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import Button from "../../components/button/button.component";

import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";

const CartDropdownContent = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  const handleNavigateToShop = () => {
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
        {cartItems?.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>

      <footer className="footer">
        <Button
          buttonType="outlined"
          buttonSize="md"
          onClick={handleNavigateToCart}
        >
          view cart
          <span className="count">({cartCount})</span>
        </Button>

        <button className="link-to-all" onClick={handleNavigateToShop}>
          Continue shopping
        </button>
      </footer>
    </aside>
  );
};

export default CartDropdownContent;
