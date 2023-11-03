import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'
import { CartItem as TCartItem } from '../../store/cart/cart.types'

import { MinusIcon, PlusIcon } from '../../assets/icons'

import {
  StyledCartDropdownListItem,
  StyledCartDropdownListItemInfo,
  StyledCartDropdownListItemInfoCategory,
  StyledCartDropdownListItemInfoTitle,
  StyledCartDropdownListItemPrice,
  StyledCartDropdownListItemThumbnail,
} from './styles'
import { QuantityCounter } from '../quantity-counter'

type CartItemProps = {
  cartItem: TCartItem
}

export const CartDropdownItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, price, image } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  return (
    <StyledCartDropdownListItem>
      <StyledCartDropdownListItemThumbnail>
        <img src={image} alt={`thumbnail of ${name}`} />
      </StyledCartDropdownListItemThumbnail>

      <StyledCartDropdownListItemInfo>
        <StyledCartDropdownListItemInfoTitle>
          {name}
        </StyledCartDropdownListItemInfoTitle>

        <StyledCartDropdownListItemInfoCategory>
          Electronic
        </StyledCartDropdownListItemInfoCategory>

        <QuantityCounter
          quantity={quantity}
          onDecrement={handleRemoveItem}
          onIncrement={handleAddItem}
        />
      </StyledCartDropdownListItemInfo>

      <StyledCartDropdownListItemPrice>
        € {price}
      </StyledCartDropdownListItemPrice>
    </StyledCartDropdownListItem>
  )
}
