import { useContext } from "react";

import { ReactComponent as CartIcon } from "../../../assets/icon-cart.svg";

import CartDropdownContent from "../cart-dropdown-content/cart-dropdown-content.component.jsx";
import Button from "../../../components/button/button.component";

import { CartContext } from "../../../contexts/cart.context";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-dropdown sm-hidden">
      <Button
        type="button"
        className="cart cart-dropdown-button"
        to="/cart"
        onClick={toggleIsCartOpen}
      >
        <CartIcon className="icon-cart" />
        <span className="cart-count">8</span>
      </Button>

      {isCartOpen && <CartDropdownContent />}
    </div>
  );
};

export default CartDropdown;
