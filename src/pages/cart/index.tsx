import { useSelector } from 'react-redux'

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'

import { useResponsive } from '../../hooks'

import { CartItem } from '..'

import { Container, Row, Column } from '../../components'
import { Button } from '../../components'

import {
  StyledCart,
  StyledCartEmpty,
  StyledCartContent,
  StyledCartFooter,
  StyledCartHeader,
  StyledCartHeaderTitle,
  StyledCartEmptyTitle,
  StyledCartFooterTotal,
  StyledCartFooterTotalTitle,
  StyledCartFooterTotalPrice,
  StyledCartFooterText,
} from './styles'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const { isMobile } = useResponsive()

  return (
    <StyledCart className="cart">
      <Container>
        <Row justifyContent="center">
          <Column sm={4} md={8} lg={6}>
            {cartItems.length === 0 ? (
              <StyledCartEmpty>
                <StyledCartEmptyTitle>
                  Shopping cart is empty
                </StyledCartEmptyTitle>

                <Button
                  className="link-to-products"
                  to="/products"
                  variant="filled"
                  size={54}
                >
                  Go to products
                </Button>
              </StyledCartEmpty>
            ) : (
              <StyledCartHeader>
                <StyledCartHeaderTitle>Shopping Cart</StyledCartHeaderTitle>

                <Button
                  className="link-to-products"
                  to="/products"
                  variant="underlined"
                  size={isMobile ? 24 : 34}
                >
                  Back to products
                </Button>
              </StyledCartHeader>
            )}

            <StyledCartContent>
              {cartItems.length === 0
                ? null
                : cartItems.map((cartItem) => {
                    return (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        isCloseButton={true}
                      />
                    )
                  })}
            </StyledCartContent>

            {cartItems.length === 0 ? null : (
              <StyledCartFooter>
                <StyledCartFooterTotal>
                  <StyledCartFooterTotalTitle>
                    Subtotal
                  </StyledCartFooterTotalTitle>

                  <StyledCartFooterTotalPrice className="price-total">
                    € {cartTotal}
                  </StyledCartFooterTotalPrice>
                </StyledCartFooterTotal>

                <StyledCartFooterText>
                  More information is provided <br />
                  on{' '}
                  <Link className="link-to-shipping" to="/shipping">
                    shipping
                  </Link>{' '}
                  page
                </StyledCartFooterText>

                <Button
                  className="link-to-payment"
                  to="payment"
                  variant="filled"
                  size={54}
                >
                  Continue to payment
                </Button>
              </StyledCartFooter>
            )}
          </Column>
        </Row>
      </Container>
    </StyledCart>
  )
}
