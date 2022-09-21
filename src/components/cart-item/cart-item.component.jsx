import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, images } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  return (
    <div className="cart-item">
      <div className="thumbnail-container">
        <img className="thumbnail" src={images.img1} alt={name} />
      </div>
      <div className="text-group">
        <div className="text-group-header">
          <h4 className="name">{name}</h4>
          <p className="price">${price}</p>
        </div>

        <div className="text-group-details">
          <button
            className="increment-button"
            type="button"
            onClick={handleAddItem}
          >
            <PlusIcon className="icon-plus" />
          </button>
          <p className="quantity">{quantity}</p>
          <button className="decrement-button" type="button">
            <MinusIcon className="icon-minus" onClick={handleRemoveItem} />
          </button>
        </div>
      </div>

      <button type="button" onClick={handleClearItem}>
        <CloseIcon className="icon-close" />
      </button>
    </div>
  );
};

export default CartItem;
