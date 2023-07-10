import UseTranslation from "next-translate/useTranslation"
import styles from '../../styles/Bar.module.css'
import Link from 'next/link'
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const year = new Date().getFullYear();
  const {t} = UseTranslation('common');
  return (
    
    <>
      <div className={styles.footer}>
        <h1>{year} {t("social")}</h1>
        <br/>
        <Link href="https://www.twitter.com/">
          <a>
            <SocialIcon network="twitter" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a>
            <SocialIcon network="instagram" />
          </a>
        </Link>
        <Link href="https://www.facebook.com/">
          <a>
            <SocialIcon network="facebook" />
          </a>
        </Link>
        <Link href="https://www.youtube.com/">
          <a>
            <SocialIcon network="youtube" />
          </a>
        </Link>
        <Link href="https://www.discord.com/">
          <a>
            <SocialIcon network="discord" />
          </a>
        </Link>
      </div>
    </>
  )
}
