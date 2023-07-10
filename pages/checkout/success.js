import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Nav/Layout';
import { CartContext } from '../../context/cart-context';

export default function Success() {
  const router = useRouter();
  const { clearCart } = useContext(CartContext);
  useEffect(clearCart, []);

  const handleButton = () => {
    router.push('/shop');
  };

  return (
    <Layout>
      <div className="checkout">
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and will send you a confirmation email shortly</p>
        <div>
          <button className="button is-black custom-btn submit" onClick={handleButton}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}
