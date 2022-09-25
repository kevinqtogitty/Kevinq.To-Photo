import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_API_KEY}`);
  }

  return stripePromise;
};
