import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";

import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown sm-hidden">
      <button type="button" className="cart cart-dropdown-button" to="/cart">
        <CartIcon className="icon-cart" />
        <span className="cart-count">8</span>
      </button>

      <aside className="cart-dropdown-content">
        <header className="header">
          <h3 className="title">my cart</h3>
          <button className="close" type="button">
            <CloseIcon />
          </button>
        </header>

        <ul className="list"></ul>

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
    </div>
  );
};

export default CartDropdown;
