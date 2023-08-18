import { useState, FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { StripeCardElement } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { Button } from '../button'

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
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
          name: currentUser ? currentUser.displayName : 'guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successfuly done!')
      }
    }
  }

  return (
    <div className="payment-form">
      <form className="payment-form-wrapper" onSubmit={handlePayment}>
        <CardElement />
        <Button isLoading={isProcessingPayment} variant="filled">
          pay now
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
