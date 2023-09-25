import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'

import CartItem from '../../components/cart-item/cart-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  const navigate = useNavigate()

  const handleNavigateToShop = () => {
    navigate('/shop')
  }

  const handleNavigateToShipping = () => {
    navigate('/policies/shipping-policy')
  }

  return (
    <section className="cart">
      <h2 className="section-title visually-hidden">cart page</h2>

      <header className="cart-header">
        <h2 className="title">your cart</h2>
        <button className="link-to-shop" onClick={handleNavigateToShop}>
          Continue shopping
        </button>
      </header>

      <article className="cart-content">
        <h3 className="cart-content-title">shopping bag items</h3>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })}
      </article>

      <footer className="cart-footer">
        <div className="cart-footer-total">
          <strong className="price-total">${cartTotal} USD</strong>
          <p className="misc">
            Taxes and{' '}
            <strong onClick={handleNavigateToShipping}>shipping</strong>{' '}
            calculated at checkout
          </p>
        </div>

        <div className="cart-footer-payment">
          <PaymentForm />
        </div>
      </footer>
    </section>
  )
}

export default Cart
