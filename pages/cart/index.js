import CartItems from '../../components/CartItems';
import { CartContext } from '../../context/cart-context';
import { useContext } from 'react';
import Total from '../../components/Total';

export default function Cart() {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItems {...item} key={item.id} />
                ))}
              </div>
              <p>salope</p>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        )}
      </>
  );
}
