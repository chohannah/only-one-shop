import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { selectCartItems } from '../../store/cart/cart.selector'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action'

import { CartItem as TCartItem } from '../../store/cart/cart.types'

import { PlusIcon, MinusIcon, CloseIcon } from '../../assets/icons'
import {
  StyledCartItem,
  StyledCartItemIconButton,
  StyledCartItemMiddle,
  StyledCartItemMiddleDetails,
  StyledCartItemMiddleHeader,
  StyledCartItemRight,
  StyledCartItemThumbnail,
} from './styles'
import { Button } from '../../components'

type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, price, images } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  const handleRemoveItem = () => {
    if (quantity <= 1) {
      return
    }

    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  return (
    <StyledCartItem>
      <StyledCartItemThumbnail>
        <img className="thumbnail" src={images.thumbnail} alt={name} />
      </StyledCartItemThumbnail>

      <StyledCartItemMiddle>
        <StyledCartItemMiddleHeader>
          <h4 className="name">{name}</h4>
          <p className="category"></p>
        </StyledCartItemMiddleHeader>

        <StyledCartItemMiddleDetails>
          <StyledCartItemIconButton
            className={`decrement-button ${clsx(
              quantity <= 1 ? 'disabled' : ''
            )}`}
            type="button"
          >
            <MinusIcon onClick={handleRemoveItem} aria-hidden />
          </StyledCartItemIconButton>

          <p className="quantity">Quantity: {quantity}</p>

          <StyledCartItemIconButton
            className="increment-button"
            type="button"
            onClick={handleAddItem}
          >
            <PlusIcon aria-hidden />
          </StyledCartItemIconButton>
        </StyledCartItemMiddleDetails>
      </StyledCartItemMiddle>

      <StyledCartItemRight>
        <StyledCartItemIconButton
          type="button"
          className="close-icon"
          onClick={handleClearItem}
        >
          <CloseIcon aria-hidden />
        </StyledCartItemIconButton>

        <p className="price">€ {price}</p>
      </StyledCartItemRight>
    </StyledCartItem>
  )
}

export default CartItem
