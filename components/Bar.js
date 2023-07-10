import Head from 'next/head';
import { useContext } from 'react';
import Link from 'next/link'
import styles from '../styles/Bar.module.css'

export default function Shop() {

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="An example shop created using Next.js & Stripe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="product-list-container">
          <div className={styles.menu}>
            <Link href="shop/bag"><button className="button-73" role="button">Sac</button></Link>
            <Link href="shop/bougie"><button className="button-73" role="button">Bougie</button></Link>
            <Link href="shop/bijoue"><button className="button-73" role="button">Bijoue</button></Link>
            <Link href="shop/savon"><button className="button-73" role="button">Savon</button></Link>
          </div>
        </div>
    </>
  );
}
