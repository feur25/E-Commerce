import Head from 'next/head';
import Image from 'next/image';
import SHOP_DATA from '../../public/DummyData';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers/helpers';

export default function SingleProduct({ product }) {
  const { imageUrl, title, price, description } = product;
  const { addProduct, increaseProduct, cartItems } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  const addToCartHandler = () => {
    if (!itemInCart) return addProduct(product);
    if (itemInCart) return increaseProduct(product);
  };

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="An example shop created using Next.js & Stripe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="single-product-container">
          <div className="product-image">
            <Image src={imageUrl} alt={title} height="100%" width="100%" layout="responsive" />
          </div>
          <div className="product-details">
            <div className="name-price">
              <h3>{title}</h3>
              <p>$ {price}</p>
            </div>
            <div className="add-to-cart-btns">
              <button
                className={`button ${itemInCart ? 'is-white' : 'is-black'} custom-btn`}
                id="btn-white-outline"
                onClick={addToCartHandler}
              >
                {!itemInCart && 'ADD TO CART'}
                {itemInCart && 'ADD MORE'}
              </button>
            </div>
            <div className="product-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export async function getStaticPaths() {
  const idArray = SHOP_DATA.map((el) => el.id);

  return {
    fallback: false,
    paths: idArray.map((id) => ({
      params: { id: id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const product = SHOP_DATA.find((item) => Number(item.id) === Number(id));

  return {
    props: {
      product,
    },
  };
}
