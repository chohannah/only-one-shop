import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import CartDropdownContent from './cart-dropdown-content.component'

import { StyledCartCounterButton } from './styles'
import { useResponsive } from '../../hooks/useResponsive'

const CartDropdown = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  const { isMobile } = useResponsive()

  return (
    <div className="cart-dropdown">
      {isMobile ? (
        <StyledCartCounterButton
          className="cart cart-dropdown-button"
          as={Link}
          to="/cart"
        >
          {cartCount}
        </StyledCartCounterButton>
      ) : (
        <StyledCartCounterButton
          className="cart cart-dropdown-button"
          type="button"
          onClick={toggleIsCartOpen}
        >
          {cartCount}
        </StyledCartCounterButton>
      )}

      {isCartOpen && <CartDropdownContent />}
    </div>
  )
}

export default CartDropdown
