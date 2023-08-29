import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import CartDropdownContent from './cart-dropdown-content'

import { StyledCartDropdown, StyledCartCounterButton } from './styles'
import { useResponsive } from '../../hooks/useResponsive'

const CartDropdown = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  const { isMobile, isDesktop } = useResponsive()

  return (
    <StyledCartDropdown>
      {isMobile ? (
        <StyledCartCounterButton as={Link} to="/cart">
          {cartCount}
        </StyledCartCounterButton>
      ) : (
        <StyledCartCounterButton type="button" onClick={toggleIsCartOpen}>
          {cartCount}
        </StyledCartCounterButton>
      )}

      {isDesktop && isCartOpen && <CartDropdownContent />}
    </StyledCartDropdown>
  )
}

export default CartDropdown
