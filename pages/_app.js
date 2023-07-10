import '../styles/main.scss';
import ProductsContextProvider from '../context/products-context';
import CartContextProvider from '../context/cart-context';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from '../components/Nav/Nav'
import Footer from '../components/Nav/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/burger.css'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

function MyApp({ Component, pageProps }) {  
  const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)    
  return (
    <CartContextProvider>
      <Header/>
      <ProductsContextProvider>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </ProductsContextProvider>
      <Footer />
    </CartContextProvider>
  );
}

export default MyApp;
