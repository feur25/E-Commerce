import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { isInCart } from '../helpers/helpers';
import ConditionalWrapper from './Condition'
import styles from '../styles/Bar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function FeaturedProduct({ title, imageUrl, price, id, description, categorie, promotion, newPrice}) {
  const product = { title, imageUrl, price, id, description, categorie, promotion, newPrice };
  const { addProduct, cartItems, increaseProduct } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  const router = useRouter();

  const addToCartHandler = () => {
    if (!itemInCart) return router.push(`/shop/${categorie}`);
    if (itemInCart) return router.push(`/shop/${categorie}`);
  };

  const ConditionalWrapper = ({ children, condition }) => {
      return condition ?(
        <div className="featured-product">{children}</div>
      ) : (
        <div className={styles.none}></div>
      )
  }
  const addMoreHandler = () => {};
  const { asPath } = useRouter()
  const namePath = asPath.split('/')
  const name = namePath[namePath.length - 1]
  let reduction = 100 - newPrice;
  let prix = price * reduction;
  let promoPrice = prix / 100;

  return (
    <>
    <ConditionalWrapper condition={promotion == true}>
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
                {!itemInCart && 'More Information'}
                {itemInCart && 'Add More'}
              </button>
            </div>
          </div>
      </ConditionalWrapper>
    </>
  );
}
