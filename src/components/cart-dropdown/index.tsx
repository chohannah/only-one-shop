import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartDropdownContent } from './cart-dropdown-content'

import { StyledCartDropdown, StyledCartCounterButton } from './styles'
import { useResponsive } from '../../hooks/useResponsive'

export const CartDropdown = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  const { isDesktop } = useResponsive()

  return (
    <StyledCartDropdown>
      {!isDesktop ? (
        <StyledCartCounterButton as={Link} to="/cart">
          {cartCount > 99 ? '99+' : cartCount}
        </StyledCartCounterButton>
      ) : (
        <StyledCartCounterButton type="button" onClick={toggleIsCartOpen}>
          {cartCount > 99 ? '99+' : cartCount}
        </StyledCartCounterButton>
      )}

      {isDesktop && isCartOpen && <CartDropdownContent />}
    </StyledCartDropdown>
  )
}
