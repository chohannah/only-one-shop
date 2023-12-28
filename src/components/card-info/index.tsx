import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { StripeCardElement } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { Button } from '../button'

import { StyledCardInfo } from './styles'
import { scrollToTop } from '../../utils/scroll/scroll-to-top'

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

export const CardInfo = () => {
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const cardDetails = elements.getElement(CardElement)

    if (!ifValidCardElement(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment is successfuly done! We will redirect you to home.')
        navigate('/')
        scrollToTop()
      }
    }
  }

  return (
    <StyledCardInfo className={clsx('card-info')} onSubmit={handlePayment}>
      <h3 className="card-info-title">Credit Card Payment: </h3>

      <CardElement className="card-info-content" />

      {/* Payment will be processed under `localhose:8888`, which `netlify dev` command enables*/}
      <Button
        className="checkout-button"
        isLoading={isProcessingPayment}
        variant="filled"
        size={54}
        type="submit"
      >
        Checkout
      </Button>
    </StyledCardInfo>
  )
}
