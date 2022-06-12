import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51L0WJDFIPbASogk5HjXQEwYNFB3cGv0I8McNhxu9XL0FjEzufGyINGnvKUXvSp7WRZOo7aCLXZ7EfoKNk85WJoMk00hHRADb4q";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;