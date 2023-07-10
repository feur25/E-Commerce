import { useContext } from 'react';
import FeaturedProduct from '../../../components/FeaturedProduct';
import { ProductsContext } from '../../../context/products-context';
import Link from 'next/link'

export default function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => <FeaturedProduct {...product} key={product.id}/>);
  console.log(products.id)
  return (
    <>
        <div className="product-list-container">
          <h2 className="product-list-title">Bougie</h2>
          <div className="product-list">{allProducts}</div>
        </div>
        </>
  );
}
