import { useContext } from 'react';
import FeaturedProduct from '../../../components/FeaturedProduct';
import { ProductsContext } from '../../../context/products-context';
// import { CartContext } from '../../../context/cart-context';
// import Head from 'next/head';
// import Link from 'next/link'
// import styles from '../../../styles/Bar.module.css'

export default function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => <FeaturedProduct {...product} key={product.id}/>);
  return (
    <>

        <div className="product-list-container">
          <h2 className="product-list-title">Bag</h2>
          <div className="product-list">{allProducts}</div>
        </div>
        </>
  );
}
