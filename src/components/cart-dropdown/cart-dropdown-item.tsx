import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'
import { CartItem as TCartItem } from '../../store/cart/cart.types'

import {
  StyledCartDropdownListItem,
  StyledCartDropdownListItemInfo,
  StyledCartDropdownListItemInfoCategory,
  StyledCartDropdownListItemInfoQuantity,
  StyledCartDropdownListItemInfoTitle,
  StyledCartDropdownListItemPrice,
  StyledCartDropdownListItemThumbnail,
} from './styles'
import { selectCartItems } from '../../store/cart/cart.selector'
import { MinusIcon, PlusIcon } from '../../assets/icons'

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

        <StyledCartDropdownListItemInfoQuantity>
          <button type="button" onClick={handleAddItem}>
            <PlusIcon />
          </button>
          Qty: {quantity}
          <button type="button" onClick={handleRemoveItem}>
            <MinusIcon />
          </button>
        </StyledCartDropdownListItemInfoQuantity>
      </StyledCartDropdownListItemInfo>

      <StyledCartDropdownListItemPrice>
        € {price}
      </StyledCartDropdownListItemPrice>
    </StyledCartDropdownListItem>
  )
}
