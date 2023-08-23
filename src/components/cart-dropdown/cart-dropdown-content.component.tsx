import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setIsCartOpen } from '../../store/cart/cart.action'

import CartDropdownItem from './cart-dropdown-item.component'
import { Button } from '../button'

import { CloseIcon } from '../../assets/icons'

import {
  selectIsCartOpen,
  selectCartCount,
  selectCartItems,
} from '../../store/cart/cart.selector'

const CartDropdownContent = () => {
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  const handleNavigateToCart = () => {
    navigate('/cart')
  }

  const handleNavigateToShop = () => {
    navigate('/shop')
  }

  return (
    <aside className="cart-dropdown-content">
      <header className="header">
        <h3 className="title">my cart</h3>
        <button className="close" type="button" onClick={toggleIsCartOpen}>
          <CloseIcon />
        </button>
      </header>

      <ul className="list">
        {cartItems?.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>

      <footer className="footer">
        <Button variant="filled" onClick={handleNavigateToCart}>
          view cart
          <span className="count">({cartCount})</span>
        </Button>

        <button className="link-to-all" onClick={handleNavigateToShop}>
          Continue shopping
        </button>
      </footer>
    </aside>
  )
}

export default CartDropdownContent
