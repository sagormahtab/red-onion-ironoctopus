import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_BaDfgmaGWDPrEdjyrhlYXfW300TLKKPIfZ');

const Payment = ({orderPocess}) => {
   
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm orderPocess={orderPocess}/>
      </Elements>
      
    </div>
  );
};

export default Payment;