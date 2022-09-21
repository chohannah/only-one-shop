import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, images } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <article className="product-card">
      <div className="thumbnail-container">
        <img className="thumbnail" src={images.img1} alt={`${name}`} />
      </div>
      <div className="text-group">
        <h3 className="name">{name}</h3>
        <p className="price">${price}</p>
      </div>
      <Button buttonType="filled" buttonSize="md" onClick={addProductToCart}>
        Add to cart
      </Button>
    </article>
  );
};

export default ProductCard;
