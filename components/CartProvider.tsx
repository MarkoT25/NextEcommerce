"use client";

import React, { ReactNode } from "react";
import { CartProvider as CTProvider } from "use-shopping-cart";

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CTProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      //   successUrl="https://commerce-next-yt.vercel.app/stripe/success"
      //   cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CTProvider>
  );
};

export default CartProvider;
