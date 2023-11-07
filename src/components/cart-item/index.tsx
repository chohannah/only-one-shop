import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action'

import { CartItem as TCartItem } from '../../store/cart/cart.types'

import { CloseIcon } from '../../assets/icons'
import { QuantityCounter } from '..'

import {
  StyledCartItem,
  StyledCartItemIconButton,
  StyledCartItemMiddle,
  StyledCartItemMiddleDetails,
  StyledCartItemMiddleHeader,
  StyledCartItemRight,
  StyledCartItemThumbnail,
} from './styles'

type CartItemProps = {
  cartItem: TCartItem
  isCloseButton: boolean
}

export const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  isCloseButton,
}) => {
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
          <QuantityCounter
            quantity={quantity}
            onDecrement={handleRemoveItem}
            onIncrement={handleAddItem}
          />
        </StyledCartItemMiddleDetails>
      </StyledCartItemMiddle>

      <StyledCartItemRight>
        {isCloseButton ? (
          <StyledCartItemIconButton
            type="button"
            className="close-icon"
            onClick={handleClearItem}
          >
            <CloseIcon aria-hidden />
          </StyledCartItemIconButton>
        ) : null}

        <p className="price">€ {price}</p>
      </StyledCartItemRight>
    </StyledCartItem>
  )
}
