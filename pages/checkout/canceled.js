import { useRouter } from 'next/router';
import Layout from '../../components/Nav/Layout';

export default function Canceled() {
  const router = useRouter();
  const handleButton = () => {
    router.push('/shop');
  };

  return (
    <Layout>
      <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payment was not successful</p>
        <div>
          <button className="button is-black custom-btn submit" onClick={handleButton}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}
