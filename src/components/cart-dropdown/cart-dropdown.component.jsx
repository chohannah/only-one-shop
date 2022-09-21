import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";

import CartDropdownContent from "../cart-dropdown-content/cart-dropdown-content.component.jsx";
import Button from "../button/button.component";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-dropdown sm-hidden">
      <Button
        type="button"
        className="cart cart-dropdown-button"
        to="/cart"
        onClick={toggleIsCartOpen}
      >
        <CartIcon className="icon-cart" />
        <span className="cart-count">{cartCount}</span>
      </Button>

      {isCartOpen && <CartDropdownContent />}
    </div>
  );
};

export default CartDropdown;
