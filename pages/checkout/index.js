import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import StripeCheckout from '../../components/StripeCheckout';

export default function Checkout() {
  const { itemCount, total } = useContext(CartContext);
  console.log("plop");

  return (
    <>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
      </div>
      <StripeCheckout />
    </>
  );
}
