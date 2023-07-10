import Image from 'next/image';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './Icons';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export default function CartItems(product) {
  const { increaseProduct, decreaseProduct, removeProduct } = useContext(CartContext);
  const { title, imageUrl, price, quantity } = product;
  const handleIncrease = () => {
    increaseProduct(product);
  };
  const handleRemove = () => {
    removeProduct(product);
  };
  const handleDecrease = () => {
    decreaseProduct(product);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <Image src={imageUrl} alt={title} height="100%" width="100%" layout="responsive" />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={handleIncrease}>
          <PlusCircleIcon width="20px" />
        </button>
        {quantity === 1 && (
          <button className="btn-trash" onClick={handleRemove}>
            <TrashIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease" onClick={handleDecrease}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
}
