import Link from 'next/link';
import CartIcon from '../CartIcon';
import UseTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import menu from '../../styles/Bar.module.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import british from '../../picture/british.png'
import french from '../../picture/french.png'
import Image from 'next/image'
import HamburgerMenu, { Links } from '../hamburger.js'

config.autoAddCss = false; 

import {
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isOpenTranslate, setIsOpenTranslate] = useState(false);
  const onClickHeader = ()=>{
    setIsOpenTranslate(!isOpenTranslate);
  }
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onClickMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const { t } = UseTranslation('common');
  
  return (
    <div>
    <div className={menu.header}>
      <Link href={'/profil/user'}>
        <a>
          <h1 className={menu.left}>You Be Essentials</h1>
        </a>
      </Link>
        <div className={`${menu.row}`}>
          {/* <p>{t('talk')}</p>
          <FontAwesomeIcon
          icon={faCaretDown}
          style={{ fontSize: 30, color: "black"}}
          onClick={onClickHeader}
          className={`${menu.cursor}`}
          /> */}
          <div className='max-w-full h-12 flex justify-center items-center  mb-4 text-white rounded-md '>
            <div className='flex md:hidden'><HamburgerMenu /></div>
            <div className='hidden md:flex'>
                <Links />
            </div>
        </div>

      <CartIcon />
        </div> 
        <div className={`${menu.cursor} ${menu.translate} ${isOpenTranslate ? "active" : "none"}`}>
        <Link href="/" locale="en">
          <Image src={british} className={menu.borderBottom} alt="shopping-cart-icon" width={30} height={30} />
          {/* <h2 className={menu.borderBottom}>Anglais</h2> */}
        </Link>
        <Link href="/" locale="fr">
          {/* <h2>Français</h2> */}
          <Image src={french} className={menu.borderBottom} alt="shopping-cart-icon" width={30} height={30} />
        </Link>
      </div>
    </div>

    </div>
  );
}
export default Header;