import { useRouter } from 'next/router';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export default function Total({ itemCount, total }) {
  const { clearCart } = useContext(CartContext);

  const router = useRouter();
  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <button className="button is-black" onClick={() => router.push('/checkout')}>
          CHECKOUT
        </button>
        <button className="button is-white" onClick={handleClear}>
          CLEAR
        </button>
      </div>
    </div>
  );
}
