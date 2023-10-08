import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartDropdownItem } from './cart-dropdown-item'

import {
  selectIsCartOpen,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'

import {
  StyleCartDropdownContent,
  StyledCartDropdownFooter,
  StyledCartDropdownFooterText,
  StyledCartDropdownFooterTotal,
  StyledCartDropdownFooterTotalPrice,
  StyledCartDropdownFooterTotalTitle,
  StyledCartDropdownHeader,
  StyledCartDropdownList,
  StyledCartDropdownTitle,
} from './styles'
import { Button } from '../button'

export const CartDropdownContent = () => {
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)

  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <StyleCartDropdownContent isCartOpen={isCartOpen}>
      <StyledCartDropdownHeader>
        <StyledCartDropdownTitle>my cart</StyledCartDropdownTitle>

        <Button variant="underlined" type="button" onClick={toggleIsCartOpen}>
          Close
        </Button>
      </StyledCartDropdownHeader>

      <StyledCartDropdownList>
        {cartItems?.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </StyledCartDropdownList>

      <StyledCartDropdownFooter>
        <StyledCartDropdownFooterTotal>
          <StyledCartDropdownFooterTotalTitle>
            Subtotal
          </StyledCartDropdownFooterTotalTitle>
          <StyledCartDropdownFooterTotalPrice>
            € {cartTotal}
          </StyledCartDropdownFooterTotalPrice>
        </StyledCartDropdownFooterTotal>

        <StyledCartDropdownFooterText>
          Delivery: Your shipping costs <br /> will be calculated in the last
          step.
        </StyledCartDropdownFooterText>

        <Button
          variant="filled"
          size={54}
          to="/cart"
          onClick={toggleIsCartOpen}
        >
          View Cart ({cartCount})
        </Button>
      </StyledCartDropdownFooter>
    </StyleCartDropdownContent>
  )
}
