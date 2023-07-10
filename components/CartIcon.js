import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import cart from '../public/icons/cart.png';

export default function CartIcon() {
  const router = useRouter();
  const { itemCount } = useContext(CartContext);

  return (
    <div
      className="cart-container"
      onClick={() => {
        router.push('/cart');
      }}
    >
      <Image src={cart} alt="shopping-cart-icon" width={30} height={30} />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
}
