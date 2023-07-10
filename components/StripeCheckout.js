import { useState, useContext, useRef,useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../context/cart-context';
import { fetchFromAPI } from '../helpers/helpers';
import {userAccessToken, fetchUser} from '../utils/fetchUserDetails';
import { loadStripe } from '@stripe/stripe-js';
import getStripe from './getStripe';
import axios from 'axios';

export default function StripeCheckout() {
  const stripe = useStripe();
  const [email, setEmail] = useState(null);
  const { cartItems } = useContext(CartContext);

  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });  
    // const response = await fetchFromAPI('checkout', {
    //   body: { line_items, customer_email: email },
    // });
    // console.log(response);
    // // Call your backend to create the Checkout Session
    // fetch('/api/checkout_sessions', {
    //   method: 'POST',
    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(session) {
    //   redirectToCheckout();
    // })
  };  
  const redirectToCheckout = async () => {
    
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: Object.entries(cartItems).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });
    const stripe = await getStripe();
    console.log("id : " + id);
    await stripe.redirectToCheckout({ sessionId: id });
  };
  useEffect(()=>{
    const [userInfo] = fetchUser();
    setEmail(userInfo);  
   },[]) 

  return (
    <>
      <form onSubmit={redirectToCheckout}>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email?.email}
            required
            className="nomad-input"
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="button is-black custom-btn submit">
            Checkout
          </button>
        </div>
      </form>
    </>
  );
}