import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <div className="payment-form" onSubmit={handlePayment}>
      <CardElement />
      <Button buttonType="filled" buttonSize="lg">
        pay now
      </Button>
    </div>
  );
};

export default PaymentForm;
