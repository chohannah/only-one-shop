import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../../components/cart-item/cart-item.component";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate("/shop");
  };

  const handleNavigateToShipping = () => {
    navigate("/policies/shipping-policy");
  };

  return (
    <section className="cart">
      <h2 className="section-title visually-hidden">cart page</h2>

      <header className="cart-header">
        <h2 className="title">your cart</h2>
        <button className="link-to-shop" onClick={handleNavigateToShop}>
          Continue shopping
        </button>
      </header>

      <article className="cart-content">
        <h3 className="cart-content-title">shopping bag items</h3>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}

        <div className="cart-content-footer">
          <strong className="price-total">${cartTotal} USD</strong>
          <p className="misc">
            Taxes and{" "}
            <strong onClick={handleNavigateToShipping}>shipping</strong>{" "}
            calculated at checkout
          </p>
        </div>
      </article>
    </section>
  );
};

export default Cart;
