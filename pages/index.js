import UseTranslation from 'next-translate/useTranslation';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
// import profilePic from '../picture/background.jpg'
import LogRocket from 'logrocket';
import { ProductsContext } from '../context/products-context';
import Carousel from '../components/displayProducts'
import {userAccessToken, fetchUser} from '../utils/fetchUserDetails';
import {useRouter} from 'next/router';
import { useEffect, useState, useRef, useContext } from 'react';
import {IoBagCheckOutline, IoLogOut} from 'react-icons/io5'
import { checkOut } from "../checkOut"
import Menu from '../components/Bar'
import HamburgerMenu, { Links } from '../components/hamburger.js'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

LogRocket.init('ta8tcw/noe');

export default function Home() {
  const { t } = UseTranslation('common');
        const router = useRouter();
        const [user, setUser] = useState(null);
        const timeUser = useRef();
        const myLogin = async () =>{
          const accessToken= userAccessToken();
          if(!accessToken) return router.push('/login');
          const [userInfo] = fetchUser();
          console.log(userInfo);
          setUser(userInfo);
        };
        timeUser.current = myLogin;
        useEffect(() => {
          timeUser.current()
        }, []);
        const signOut = () => {
          localStorage.clear();
          router.push('/login');
        }
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => <Carousel {...product} key={product.id} />);
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  
  const Box = () => {
  
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className={styles.home}>  
          {allProducts}
        </div>
      </motion.div>
    );
  };
  return (
    <>
    <div className="index">
      <img src=''></img>
    <a className="index" href="#1">
    <h1 className='black'>Me souviens plus du message aui fallait ecrire donc merdouille</h1>
    </a>
    </div>
    <div className={styles.container}>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content="Home shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className='beige'></div>
        {/* <h1 className={styles.SiteTitle}>
        exemple</h1> */}
        {/* {picture} */}
        {/* <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p> */}
        <div className='color absolute top-0.5 right-3'>
        <IoLogOut fontSize={30} className='absolute top-0 right-0 cursor-pointer text-gray-600' onClick={signOut}/>
        {/* {userPicture} */}
        {/* <Image> */}
        <picture>
          <source srcSet={user?.photoURL} type="image/webp" />
          <img src={user?.photoURL} alt='' className='rounded-md shadow-md absolute top-0 right-17 cursor-pointer taille'layout='fill'/>
        </picture>
        <p className='absolute top-9 right-13 cursor-pointer few'>
          
          <span className='block text-xs font-serif font-normal'>
            {user?.email}
          </span>
        </p> 
        </div>
        <div>
        {/* <h1>In Stock</h1> */}
          <Menu />
          <Box />
        </div>
        
        {/* </Image>  */}
        <button onClick={(()=>{
                        checkOut({
                          lineItems: [
                            {
                              price: "price_1LRtd2Jw7SyqSl04JZ8FbYXh",
                              //modo/quentin/admin/noe/dev
                              quantity: 1
                            }
                          ]
                        })
        })}>BUY!!</button>
        <a href="https://buy.stripe.com/test_fZe2aw4Pd7BF9iM000">Plop</a>
      </main>
    </div>
    </>
  )
}
