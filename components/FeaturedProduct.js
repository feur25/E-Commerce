import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { isInCart } from '../helpers/helpers';
import ConditionalWrapper from './Condition'
import styles from '../styles/Bar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function FeaturedProduct({ title, imageUrl, price, id, description, categorie,promotion, newPrice }) {
  const product = { title, imageUrl, price, id, description, categorie, promotion, newPrice };
  const { addProduct, cartItems, increaseProduct } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  const addToCartHandler = () => {
    if (!itemInCart) return addProduct(product);
    if (itemInCart) return increaseProduct(product);
  };

  const ConditionalWrapper = ({ children, condition }) => {
      return condition ?(
        <div className="featured-product">{children}</div>
      ) : (
        <div className={styles.none}></div>
      )
  }
  const addMoreHandler = () => {};
  let reduction = 100 - newPrice;
  let prix = price * reduction;
  let promoPrice = prix / 100;
  const { asPath } = useRouter()
  const namePath = asPath.split('/')
  const name = namePath[namePath.length - 1]


  return (
    <>
    <ConditionalWrapper condition={categorie == name && promotion == false}>
      <div className="featured-product">
        <Link href={`/shop/${id}`}>
          <div className="featured-image">
            <Image src={imageUrl} alt={title} height="100%" width="100%" layout="responsive" />
          </div>
        </Link>
        <div className="name-price">
          <h3>{title}</h3>
          <p>$ {price}</p>
          <button
            className={`button ${itemInCart ? 'is-white' : 'is-black'} custom-btn`}
            id="btn-white-outline"
            onClick={addToCartHandler}
          >
            {!itemInCart && 'ADD TO CART'}
            {itemInCart && 'ADD MORE'}
          </button>
        </div>
      </div>
      </ConditionalWrapper>
      <ConditionalWrapper condition={categorie == name && promotion == true}>
      <div className="featured-product">
        <Link href={`/shop/${id}`}>
          <div className="featured-image">
            <Image src={imageUrl} alt={title} height="100%" width="100%" layout="responsive" />
          </div>
        </Link>
        <div className="name-price">
          <h3>{title}</h3>
          <div className='promotion'>
            <strike>$ {price}</strike>
            <p>$ {promoPrice}</p>
          </div>
          <button
            className={`button ${itemInCart ? 'is-white' : 'is-black'} custom-btn`}
            id="btn-white-outline"
            onClick={addToCartHandler}
          >
            {!itemInCart && 'ADD TO CART'}
            {itemInCart && 'ADD MORE'}
          </button>
        </div>
      </div>
      </ConditionalWrapper>
    </>
  );
}
