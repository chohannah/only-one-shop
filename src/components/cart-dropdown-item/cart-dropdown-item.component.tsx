import { CartItem as TCartItem } from '../../store/cart/cart.types'

type CartItemProps = {
  cartItem: TCartItem
}

const CartDropdownItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, price, images } = cartItem

  return (
    <li className="cart-item">
      <div className="thumbnail-container">
        <img className="thumbnail" src={images[0].img1} alt={`${name}`} />
      </div>

      <div className="text-group">
        <div className="left">
          <h3 className="name">{name}</h3>
          <p className="price">${price}</p>
        </div>

        <div className="right">
          <p className="quantity">{quantity}</p>
        </div>
      </div>
    </li>
  )
}

export default CartDropdownItem
