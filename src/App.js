import React from 'react';
import './App.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';

//Make sure to call loadStripe outside of a component's render to avoid
//recreating the Stripe object on every render
//loadStripe is initialized with a fake API key
//Sign in to see examples prefilled with your key

const promise = loadStripe(
  'pk_test_51GxQNmJkcyuQwfCB0DE4UcI2htmBPNrDzDWwOaeQ3BNbredGDn8Kv2GFmtWKhlzGFyffLCnExlMzmqkCIFslhJZv00ssVmBx9E'
);
export default function App() {
  return (
    <div className="App">
      <h1>Accept Payment</h1>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
